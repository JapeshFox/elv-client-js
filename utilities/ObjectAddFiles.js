// Create new production master from specified file(s)

const {ModOpt, StdOpt} = require("./lib/options");
const Utility = require("./lib/Utility");

const ArgNoWait = require("./lib/concerns/ArgNoWait");
const ExistObj = require("./lib/concerns/ExistObj");
const FileRemote = require("./lib/concerns/FileRemote");
const Edit = require("./lib/concerns/Edit");
const FileLocal = require("./lib/concerns/FileLocal");
const Logger = require("./lib/concerns/Logger");

class ObjectAddFiles extends Utility {
  blueprint() {
    return {
      concerns: [Logger, ExistObj, Edit, ArgNoWait, FileLocal, FileRemote],
      options: [
        ModOpt("files", {X: "to add"}),
        StdOpt("encrypt", {X: "uploaded files"})
      ]
    };
  }

  async body() {
    const logger = this.logger;
    const {encrypt, noWait} = this.args;

    let access;
    if(this.args.s3Reference || this.args.s3Copy) access = this.concerns.FileRemote.credentialSet();

    let fileHandles = [];
    const fileInfo = access
      ? this.concerns.FileRemote.fileInfo()
      : this.concerns.FileLocal.fileInfo(fileHandles);

    const {libraryId, objectId} = await this.concerns.ExistObj.argsProc();

    const writeToken = await this.concerns.Edit.getWriteToken({
      libraryId,
      objectId
    });

    if(access) {
      await this.concerns.FileRemote.add({
        libraryId,
        objectId,
        writeToken,
        access,
        fileInfo,
        encrypt
      });
    } else {
      await this.concerns.FileLocal.add({
        libraryId,
        objectId,
        writeToken,
        fileInfo,
        encrypt
      });
      // Close file handles
      this.concerns.FileLocal.closeFileHandles(fileHandles);
    }

    const hash = await this.concerns.Edit.finalize({
      libraryId,
      noWait,
      objectId,
      writeToken
    });

    logger.logList(
      "",
      "File(s) added.",
      `New version hash: ${hash}`,
      ""
    );

    logger.data("version_hash", hash);
  }

  header() {
    return `Add file(s) to object ${this.args.objectId}`;
  }
}

if(require.main === module) {
  Utility.cmdLineInvoke(ObjectAddFiles);
} else {
  module.exports = ObjectAddFiles;
}