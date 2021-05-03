// Create a new mezzanine and start jobs
const R = require("ramda");

const {seconds} = require("./lib/helpers/wait");
const {ModOpt, NewOpt} = require("./lib/options");
const Utility = require("./lib/Utility");

// const ArgAssetMetadata = require("./lib/concerns/ArgAssetMetadata");
// const ArgMetadata = require("./lib/concerns/ArgMetadata");
const ArgObjectId = require("./lib/concerns/ArgObjectId");
// const ArgType = require("./lib/concerns/ArgType");
const Client = require("./lib/concerns/Client");
// const Draft = require("./lib/concerns/Draft");
const ArgCredentials = require("./lib/concerns/ArgCredentials");
// const ContentType = require("./lib/concerns/ContentType");
const ExistObjEdit = require("./lib/concerns/ExistObjEdit");
const FabricObject = require("./lib/concerns/FabricObject");
const Finalize = require("./lib/concerns/Finalize");
const JSON = require("./lib/concerns/JSON");
const LRO = require("./lib/concerns/LRO");
const Metadata = require("./lib/concerns/Metadata");
const Version = require("./lib/concerns/Version");

class OfferingProcessOneStream extends Utility {
  blueprint() {
    return {
      concerns: [
        ArgObjectId,
        Client,
        ArgCredentials,
        ExistObjEdit,
        FabricObject,
        Finalize,
        JSON,
        LRO,
        Metadata,
        Version
      ],
      options: [
        NewOpt("abrProfile", {
          descTemplate: "Path to JSON file containing ABR profile with transcoding parameters and resolution ladders (if omitted, will be read from library metadata)",
          normalize: true,
          type: "string"
        }),
        NewOpt("masterHash", {
          demand: true,
          descTemplate: "Version hash of the master object",
          type: "string"
        }),
        ModOpt("objectId", {
          alias: ["existingMezId", "existing-mez-id"],
          demand: true,
          descTemplate: "Object ID of mezzanine",
        }),
        NewOpt("offeringKey", {
          default: "default",
          descTemplate: "Key for offering",
          type: "string"
        }),
        NewOpt("streamKey", {
          demand: true,
          descTemplate: "Stream to process",
          type: "string"
        }),
        NewOpt("variantKey", {
          default: "default",
          descTemplate: "Variant to use from production master",
          type: "string"
        })
        // NewOpt("wait", {
        //   descTemplate: "Wait for stream to finish transcoding, then finalize before exiting script (not recommended unless stream is audio or title is very short)",
        //   type: "boolean"
        // })
      ]
    };
  }

  async body() {
    const logger = this.logger;

    // do steps that don't require network access first
    // ----------------------------------------------------
    let access = this.concerns.ArgCredentials.credentialSet(false);

    const abrProfile = this.args.abrProfile
      ? this.concerns.JSON.parseFile({path: this.args.abrProfile})
      : undefined;

    // operations that may need to wait on network access
    // ----------------------------------------------------
    await this.concerns.ExistObjEdit.argsProc();

    const {
      existingMezId,
      libraryId,
      masterHash,
      offeringKey,
      streamKey,
      variantKey
      // wait
    } = this.args;

    const client = await this.concerns.Client.get();

    // check existence of variant + stream
    logger.log(`Retrieving metadata from production master object version ${masterHash}...`);
    const variantMetadata = await this.concerns.Metadata.get({
      versionHash: masterHash
    }) || {};

    const variantStreamPath = `/production_master/variants/${variantKey}/streams/${streamKey}`;
    if(!Metadata.pathExists({
      metadata: variantMetadata,
      path: variantStreamPath
    })) {
      throw Error(`Metadata path ${variantStreamPath} not found in master object version ${masterHash}`);
    }

    // check existence of offering
    logger.log(`Retrieving metadata from existing mezzanine object ${existingMezId}...`);
    const originalMezMetadata = await this.concerns.ExistObjEdit.metadata({
      libraryId,
      objectId: existingMezId
    }) || {};

    const offeringPath = `/offerings/${offeringKey}`;
    if(!Metadata.pathExists({
      metadata: originalMezMetadata,
      path: offeringPath
    })) {
      throw Error(`Metadata path ${offeringPath} not found in mezzanine object ${existingMezId}`);
    }

    // modify variant temporarily to remove other streams
    const tempVariantStreams = {[streamKey]: variantMetadata.production_master.variants[variantKey].streams[streamKey]};
    const masterId = this.concerns.Version.objectId({versionHash: masterHash});
    const masterLibId = await this.concerns.FabricObject.libraryId({objectId: masterId});
    logger.log("Temporarily modifying production master variant to isolate stream");
    const tempVariantHash = await this.concerns.Metadata.write({
      libraryId: masterLibId,
      objectId: masterId,
      metadata: tempVariantStreams,
      metadataSubtree: `/production_master/variants/${variantKey}/streams`
    });
    logger.log(`Master version hash with isolated stream: ${tempVariantHash}`);
    logger.log("Creating new version to revert change to master");
    const revertedVariantHash = await this.concerns.Metadata.write({
      libraryId: masterLibId,
      objectId: masterId,
      metadata: variantMetadata.production_master.variants[variantKey].streams,
      metadataSubtree: `/production_master/variants/${variantKey}/streams`
    });
    logger.log(`Master hash with reverted change: ${revertedVariantHash}`);

    // save current mez version hash
    const mezOriginalHash = await this.concerns.ExistObj.latestHash();
    logger.data("mezzanine_original_hash", mezOriginalHash);
    logger.log(`Mezzanine current version hash: ${mezOriginalHash}`);

    logger.log("Adding transcode job info to mezzanine...");

    const createResponse = await client.CreateABRMezzanine({
      name: originalMezMetadata.public.name,
      libraryId,
      objectId: existingMezId,
      masterVersionHash: tempVariantHash,
      variant: this.args.variantKey,
      offeringKey,
      abrProfile
    });

    logger.errorsAndWarnings(createResponse);

    const objectId = createResponse.id;
    await client.SetVisibility({id: objectId, visibility: 0});

    logger.log("Starting Mezzanine Job");

    const startResponse = await client.StartABRMezzanineJobs({
      libraryId,
      objectId,
      offeringKey,
      access
    });

    logger.errorsAndWarnings(startResponse);

    const lroWriteToken = R.path(["lro_draft", "write_token"], startResponse);
    const lroNode = R.path(["lro_draft", "node"], startResponse);

    logger.data("library_id", libraryId);
    logger.data("object_id", objectId);
    logger.data("offering_key", offeringKey);
    logger.data("write_token", lroWriteToken);
    logger.data("write_node", lroNode);

    logger.logList(
      "",
      `Library ID: ${libraryId}`,
      `Object ID: ${objectId}`,
      `Offering: ${offeringKey}`,
      `Write Token: ${lroWriteToken}`,
      `Write Node: ${lroNode}`,
      ""
    );

    // if(!this.args.wait) {
    //   logger.log(`IMPORTANT: After finalizing mezzanine as usual, run:
    //
    //   node elv-client-js/MezzanineMergeOfferings.js --objectId ${objectId}
    //
    //   `);
    //   return;
    // }

    logger.log("Progress:");

    const lro = this.concerns.LRO;
    let done = false;
    let lastStatus;
    while(!done) {
      const statusMap = await lro.status({libraryId, objectId});
      const statusSummary = lro.statusSummary(statusMap);
      lastStatus = statusSummary.run_state;
      if(lastStatus !== LRO.STATE_RUNNING) done = true;
      logger.log(`run_state: ${lastStatus}`);
      const eta = statusSummary.estimated_time_left_h_m_s;
      if(eta) logger.log(`estimated time left: ${eta}`);
      await seconds(15);
    }

    logger.log("Finalizing mezzanine");
    const finalizeAbrResponse = await client.FinalizeABRMezzanine({
      libraryId,
      objectId,
      offeringKey
    });
    const latestHash = finalizeAbrResponse.hash;

    logger.errorsAndWarnings(finalizeAbrResponse);
    logger.logList(
      "",
      "ABR mezzanine object finalized:",
      `  Object ID: ${objectId}`,
      `  Version Hash: ${latestHash}`,
      ""
    );
    logger.data("version_hash", latestHash);
    await this.concerns.Finalize.waitForPublish({
      latestHash,
      libraryId,
      objectId
    });

    // merge new offering (with single stream) with metadata from original mez
    logger.log("Merging stream info with previous offering metadata");
    const newMezMetadata = await this.concerns.ExistObjEdit.metadata({
      libraryId,
      objectId: existingMezId
    });

    const mergedMezMetadata = R.clone(originalMezMetadata);

    // merge the newly processed stream into offering, replacing previous version of stream if present
    mergedMezMetadata.offerings[offeringKey].media_struct.streams[streamKey] =
      newMezMetadata.offerings[offeringKey].media_struct.streams[streamKey];

    mergedMezMetadata.offerings[offeringKey].playout.streams[streamKey] =
      newMezMetadata.offerings[offeringKey].playout.streams[streamKey];

    // merge any DRM keys
    mergedMezMetadata.elv.crypt.drm.kids = R.mergeDeepRight(
      mergedMezMetadata.elv.crypt.drm.kids,
      newMezMetadata.elv.crypt.drm.kids
    );

    mergedMezMetadata.offerings[offeringKey].playout.drm_keys = R.mergeDeepRight(
      mergedMezMetadata.offerings[offeringKey].playout.drm_keys,
      newMezMetadata.offerings[offeringKey].playout.drm_keys
    );

    const mergeMetadataWriteToken = await this.concerns.ExistObjEdit.getWriteToken();

    const mergeMetadataResponse = await this.concerns.ExistObjEdit.metadataWrite({
      metadata: mergedMezMetadata,
      writeToken: mergeMetadataWriteToken
    });

    const finalizeMergedMetadataResponse = await this.concerns.ExistObjEdit.finalize({
      writeToken: mergeMetadataWriteToken
    });

  }

  header() {
    return `Process one stream (${this.args.streamKey}) for offering ${this.args.offeringKey}`;
  }
}

if(require.main === module) {
  Utility.cmdLineInvoke(OfferingProcessOneStream);
} else {
  module.exports = OfferingProcessOneStream;
}
