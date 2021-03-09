// code related to editing fabric objects

const Client = require("./Client");
const Finalize = require("./Finalize");
const Logger = require("./Logger");

const blueprint = {
  name: "Edit",
  concerns: [Finalize, Logger, Client]
};

const New = context => {
  const logger = context.concerns.Logger;

  const finalize = async ({libraryId, noWait, objectId, writeToken}) => {
    return await context.concerns.Finalize.finalize({
      libraryId,
      noWait,
      objectId,
      writeToken
    });
  };

  const getWriteToken = async ({libraryId, objectId} = {}) => {
    logger.log("Getting write token...");
    const client = await context.concerns.Client.get();
    const editResponse = await client.EditContentObject({
      libraryId,
      objectId
    });
    logger.log(`New write token: ${editResponse.write_token}`);
    return editResponse.write_token;
  };

  // ------------------
  // instance interface
  // ------------------
  return {
    finalize,
    getWriteToken
  };
};

module.exports = {
  blueprint,
  New
};