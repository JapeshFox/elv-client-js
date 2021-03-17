// List all object IDs in a library

const R = require("ramda");

const {ModOpt, NewOpt} = require("./lib/options");
const Utility = require("./lib/Utility");

const JSON = require("./lib/concerns/JSON");
const ArgLibraryId = require("./lib/concerns/ArgLibraryId");
const Metadata = require("./lib/concerns/Metadata");
const FabricObject = require("./lib/concerns/FabricObject");

class LibraryListObjects extends Utility {
  blueprint() {
    return {
      concerns: [JSON, ArgLibraryId, Metadata, FabricObject],
      options: [
        ModOpt("libraryId", {demand: true}),
        NewOpt("filter", {
          descTemplate: `JSON expression (or path to JSON file if starting with '@') to filter objects by (public) metadata.\nExample for 'name contains FOO': --filter '{"key":"/public/name", "type":"cnt", "filter":"FOO"}'\nFor more info see https://eluv-io.github.io/elv-client-js/module-ElvClient_ContentAccess.html#.ContentObjects`,
          type: "string"
        }),
        NewOpt("date", {
          descTemplate: "Include latest commit date/time if available",
          type: "boolean"
        }),
        NewOpt("hash", {
          descTemplate: "Include latest version hash",
          type: "boolean"
        }),
        NewOpt("name", {
          descTemplate: "Include object name if available",
          type: "boolean"
        }),
        NewOpt("size", {
          descTemplate: "Include object total size",
          type: "boolean"
        })
      ]
    };
  }

  async body() {
    const logger = this.logger;
    const filter = this.args.filter && this.concerns.JSON.parseStringOrFile({strOrPath: this.args.filter});

    const objectList = await this.concerns.ArgLibraryId.libObjectList(
      {
        filterOptions: {
          select: ["/public/name"],
          filter
        }
      }
    );

    const formattedObjList = [];
    this.logger.log(`Found ${objectList.length} object(s)`);
    for(let i = 0; i < objectList.length; i++) {
      const e = objectList[i];
      const libraryId = this.args.libraryId;
      const objectId = e.objectId;
      // console.log(JSON.stringify(e,null,2));
      const formattedObj = {object_id: e.objectId};
      if(this.args.hash) formattedObj.latest_hash = e.latestHash;
      if(this.args.name) formattedObj.name = R.path(["metadata", "public", "name"], e);
      if(this.args.date) {
        const commitInfo = await this.concerns.Metadata.commitInfo({
          libraryId,
          objectId
        });
        formattedObj.commit_date = commitInfo && commitInfo.timestamp;
      }
      if(this.args.size) formattedObj.size = await this.concerns.FabricObject.size({libraryId, objectId});
      formattedObjList.push(formattedObj);
    }

    logger.data("object_list", formattedObjList);

    logger.logTable({list: formattedObjList});
    if(formattedObjList.length === 0) logger.warn("No visible objects found using supplied private key.");
  }

  header() {
    return `List objects in library ${this.args.libraryId}`;
  }

}

if(require.main === module) {
  Utility.cmdLineInvoke(LibraryListObjects);
} else {
  module.exports = LibraryListObjects;
}