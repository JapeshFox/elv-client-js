// For scripts that retrieve info from an existing fabric object
// Also supports deleting the object

const {ModOpt} = require("../options");

const ArgObjectId = require("./ArgObjectId");

const blueprint = {
  name: "ExistObj",
  concerns: [ArgObjectId],
  options: [
    ModOpt("objectId", {demand: true})
  ]
};

const New = context => {

  // fill in any implied missing args
  const argsProc = async () => await context.concerns.ArgObjectId.argsProc();

  const del = async () => await context.concerns.ArgObjectId.objDelete();

  const libraryId = async () => await argsProc().libraryId;

  const metadata = async ({subtree} = {}) => await context.concerns.ArgObjectId.objMetadata({subtree});

  const partList = async () => await context.concerns.ArgObjectId.objPartList();

  const versionList = async () => await context.concerns.ArgObjectId.objVersionList();

  // ------------------
  // instance interface
  // ------------------
  return {
    argsProc,
    del,
    libraryId,
    metadata,
    partList,
    versionList
  };
};

module.exports = {
  blueprint,
  New
};