// convert an offering to a just-started VoD-as-Live item

const R = require("ramda");

const Utility = require("./lib/Utility");

const ArgOfferingKey = require("./lib/concerns/ArgOfferingKey");
const ExistObj = require("./lib/concerns/ExistObj");
const Metadata = require("./lib/concerns/Metadata");

class OfferingStartAsVaL extends Utility {
  blueprint() {
    return {
      concerns: [
        ArgOfferingKey, ExistObj, Metadata
      ]
    };
  }

  async body() {
    const logger = this.logger;
    const {offeringKey} = this.args;
    const now = (new Date).toISOString();

    const metadataToMerge = {
      offerings: {
        [offeringKey]: {
          offer_as_live: true,
          offer_live_end_tol: 30,
          offer_live_seg_count: 3,
          offer_live_start_time: now,
        }
      }
    };

    // operations that need to wait on network access
    // ----------------------------------------------------
    const {libraryId, objectId} = await this.concerns.ExistObj.argsProc();

    logger.log("Retrieving existing metadata from object...");
    const currentMetadata = await this.concerns.ExistObj.metadata();

    // complain if offerings not found
    if(!currentMetadata.offerings) {
      throw Error("/offerings not found in metadata");
    }
    // complain if specified offering not found
    if(!currentMetadata.offerings[offeringKey]) {
      throw Error(`Offering '${offeringKey}' not found`);
    }

    const metadata = R.mergeDeepRight(currentMetadata, metadataToMerge);

    // Write back metadata
    const newHash = await this.concerns.Metadata.write({
      libraryId,
      metadata,
      objectId
    });
    this.logger.data("version_hash", newHash);
  }

  header() {
    return `"Start" VoD offering '${this.args.offeringKey}' in object ${this.args.objectId} as a live program`;
  }
}

if(require.main === module) {
  Utility.cmdLineInvoke(OfferingStartAsVaL);
} else {
  module.exports = OfferingStartAsVaL;
}