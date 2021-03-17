// print out playout urls for VoD Mez Offering

const Utility = require("./lib/Utility");

const {ModOpt} = require("./lib/options");

const ArgOfferingKey = require("./lib/concerns/ArgOfferingKey");
const Client = require("./lib/concerns/Client");
const ExistObjOrVer = require("./lib/concerns/ExistObjOrVer");


class OfferingGetPlayoutUrls extends Utility {
  blueprint() {
    return {
      concerns: [ArgOfferingKey, Client, ExistObjOrVer],
      options: [
        ModOpt("offeringKey",
          {
            X: " within mezzanine to get URLs for"
          })
      ]
    };
  }

  async body() {
    const logger = this.logger;

    // operations that need to wait on network access
    // ----------------------------------------------------
    const {libraryId, objectId, versionHash, offeringKey} = await this.concerns.ExistObjOrVer.argsProc();

    const offerings = await this.concerns.ExistObjOrVer.metadata({subtree: "/offerings"});
    if(!offerings) {
      throw Error("No offerings found in mezzanine");
    }

    if(!offerings[offeringKey]) {
      throw Error(`Offering '${offeringKey}' not found in mezzanine`);
    }

    const client = await this.concerns.Client.get();
    const url = await client.FabricUrl({
      libraryId,
      objectId,
      versionHash,
      rep: "playout/options.json"
    });

    logger.data("version_hash", versionHash);
    logger.data("options_url", url);

    logger.log();
    logger.log(`Version hash: ${versionHash}`);
    logger.log();
    logger.log("options.json URL:");
    logger.log();
    logger.log(url);

    const offeringUrl = await client.FabricUrl({
      libraryId,
      objectId,
      versionHash,
      rep: `playout/${offeringKey}/options.json`
    });
    logger.log();
    logger.log(`Offering '${offeringKey}' options.json URL:`);
    logger.log();
    logger.log(offeringUrl);

    const offeringOptions = await client.AvailableOfferings({
      libraryId,
      objectId,
      versionHash,
      handler: `playout/${offeringKey}`
    });

    let offUrlObj = new URL(offeringUrl);
    const urlBase = offUrlObj.origin + offUrlObj.pathname;
    const authToken = offUrlObj.searchParams.get("authorization");
    let sid = "";
    for(const [playoutFormatKey, playoutFormatInfo] of Object.entries(offeringOptions)) {
      const pfUrlObj = new URL(playoutFormatInfo.uri, urlBase);
      sid = pfUrlObj.searchParams.get("sid");
      const playoutUrl = new URL(playoutFormatInfo.uri, urlBase);
      playoutUrl.searchParams.set("authorization", authToken);
      playoutUrl.searchParams.set("sid", sid);

      logger.log();
      logger.log(`Sample playout URL for format '${playoutFormatKey}':`);
      logger.log();
      logger.log(playoutUrl.toString());
    }
  }

  header() {
    return `Print URLs for object offering ${this.args.offering_key}`;
  }
}

if(require.main === module) {
  Utility.cmdLineInvoke(OfferingGetPlayoutUrls);
} else {
  module.exports = OfferingGetPlayoutUrls;
}