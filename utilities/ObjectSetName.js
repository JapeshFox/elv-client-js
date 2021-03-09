// Set name for object

const {ModOpt, StdOpt} = require("./lib/options");

const Utility = require("./lib/Utility");

const ExistObjEdit = require("./lib/concerns/ExistObjEdit");

class ObjectSetName extends Utility {
  blueprint() {
    return {
      concerns: [ExistObjEdit],
      options: [
        ModOpt("objectId", {ofX: " item to name"}),
        ModOpt("libraryId", {forX: " object to name"}),
        StdOpt("name", {demand: true, forX: "object"})
      ]
    };
  }

  async body() {
    const newHash = await this.concerns.ExistObjEdit.metadataWrite(
      {
        metadata: this.args.name,
        subtree: "/public/name"
      });
    this.logger.data("version_hash", newHash);
    this.logger.log(`New version hash: ${newHash}`);
  }

  header() {
    return `Set name for object ${this.args.objectId} to '${this.args.name}'`;
  }
}

if(require.main === module) {
  Utility.cmdLineInvoke(ObjectSetName);
} else {
  module.exports = ObjectSetName;
}
