// For scripts that edit an existing fabric object

const ArgNoWait = require("./ArgNoWait");
const Edit = require("./Edit.js");
const ExistObj = require("./ExistObj");
const Metadata = require("./Metadata");

const blueprint = {
  name: "ExistObjEdit",
  concerns: [Edit, Metadata, ExistObj, ArgNoWait]
};

const New = context => {

  const argsProc = async () => await context.concerns.ExistObj.argsProc();

  const del = async () => await context.concerns.ExistObj.objDelete();

  const finalize = async ({writeToken}) => {
    const {libraryId, objectId} = await argsProc();
    return await context.concerns.ArgNoWait.finalize({
      libraryId,
      objectId,
      writeToken
    });
  };

  const getWriteToken = async () => {
    const {libraryId, objectId} = await argsProc();
    return await context.concerns.Edit.getWriteToken({
      libraryId,
      objectId
    });
  };

  const libraryId = async () => await argsProc().libraryId;

  const metadata = async ({subtree} = {}) => await context.concerns.ExistObj.metadata({subtree});

  const metadataWrite =  async ({metadata, subtree, writeToken}) => {
    const {libraryId, noWait, objectId} = await argsProc();

    return await context.concerns.Metadata.write({
      libraryId,
      metadata,
      metadataSubtree: subtree,
      noWait,
      objectId,
      writeToken
    });
  };

  const partList = async () => await context.concerns.ExistObj.objPartList();

  const versionList = async () => await context.concerns.ExistObj.objVersionList();

  // ------------------
  // instance interface
  // ------------------
  return {
    argsProc,
    del,
    finalize,
    getWriteToken,
    libraryId,
    metadata,
    metadataWrite,
    partList,
    versionList
  };
};

module.exports = {
  blueprint,
  New
};