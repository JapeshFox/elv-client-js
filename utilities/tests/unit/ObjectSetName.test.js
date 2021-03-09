const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const expect = chai.expect;
chai.use(chaiAsPromised);

const {removeStubs, stubClient} = require("../mocks/ElvClient.mock");
const {argList2Params, removeElvEnvVars} = require("../helpers/params");

removeElvEnvVars();
beforeEach(removeStubs);

const ObjectSetName = require("../../ObjectSetName");

describe("ObjectSetName", () => {

  it("should complain if --objectId missing", () => {
    expect(() => {
      new ObjectSetName(argList2Params("--name", "foo"));
    }).to.throw("Missing required argument: objectId");
  });

  it("should complain if --name missing", () => {
    expect(() => {
      new ObjectSetName(argList2Params("--objectId", "foo"));
    }).to.throw("Missing required argument: name");
  });

  it("should call ElvClient.ReplaceMetadata()", () => {
    const utility = new ObjectSetName(argList2Params("--objectId", "iq__001xxx001xxxxxxxxxxxxxxxxxxx", "--name", "foo", "--noWait", "--json"));
    const stub = stubClient(utility.concerns.Client);
    stub.resetHistory();
    return utility.run().then(() => {
      // console.log(JSON.stringify(retVal, null, 2));
      expect(stub.callHistoryMismatches([
        "ContentObjectLibraryId",
        "EditContentObject",
        "ReplaceMetadata",
        "FinalizeContentObject"
      ]).length).to.equal(0);
    });
  });

});
