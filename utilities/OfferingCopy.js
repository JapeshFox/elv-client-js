// Copy metadata from one path to another within a single object
const objectPath = require("object-path");
const R = require("ramda");

const {ModOpt, NewOpt} = require("./lib/options");
const Utility = require("./lib/Utility");

const ArgOfferingKey = require("./lib/concerns/ArgOfferingKey");
const ExistObjEdit = require("./lib/concerns/ExistObjEdit");
const Metadata = require("./lib/concerns/Metadata");

class OfferingCopy extends Utility {
  blueprint() {
    return {
      concerns: [ArgOfferingKey, ExistObjEdit, Metadata],
      options: [
        ModOpt("objectId", {ofX: " mezzanine containing offering to copy"}),
        ModOpt("libraryId", {forX: " mezzanine object"}),
        ModOpt("offeringKey", {X: " to copy"}),
        NewOpt("targetOfferingKey", {
          demand: true,
          descTemplate: "Key to copy offering to.",
          type: "string"
        })
      ]
    };
  }

  async body() {
    const {offeringKey, targetOfferingKey} = this.args;

    const existOfferingPath = `/offerings/${offeringKey}`;
    const targetOfferingPath = `/offerings/${targetOfferingKey}`;

    const currentMetadata = await this.concerns.ExistObjEdit.metadata();

    // check to make sure offering exists
    Metadata.validatePathExists({
      metadata: currentMetadata,
      path: existOfferingPath
    });

    // make sure targetOfferingPath does NOT exist
    if(Metadata.pathExists({metadata:currentMetadata, path: targetOfferingPath})) {
      throw new Error(`Offering '${targetOfferingKey}' already exists.`);
    }

    // copy sourcePath attribute to targetPath
    const valueToCopy = Metadata.valueAtPath({
      metadata: currentMetadata,
      path: existOfferingPath
    });
    const revisedMetadata = R.clone(currentMetadata);
    objectPath.set(
      revisedMetadata,
      Metadata.pathPieces({path: targetOfferingPath}),
      valueToCopy
    );

    // Write back metadata
    const newHash = await this.concerns.ExistObjEdit.metadataWrite({
      metadata: revisedMetadata
    });
    this.logger.data("version_hash", newHash);
    this.logger.log("New version hash: ", newHash);
  }

  header() {
    return `Copy offering '${this.args.offeringKey}' to offering '${this.args.targetOfferingKey}' in object ${this.args.objectId}`;
  }
}

if(require.main === module) {
  Utility.cmdLineInvoke(OfferingCopy);
} else {
  module.exports = OfferingCopy;
}
