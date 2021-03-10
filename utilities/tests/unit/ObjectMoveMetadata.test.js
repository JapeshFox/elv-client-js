const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const expect = chai.expect;
chai.use(chaiAsPromised);

const {removeStubs, stubClient} = require("../mocks/ElvClient.mock");
const {argList2Params, removeElvEnvVars} = require("../helpers/params");

removeElvEnvVars();
beforeEach(removeStubs);

const ObjectMoveMetadata = require("../../ObjectMoveMetadata");

describe("ObjectMoveMetadata", () => {

  it("should complain if --objectId missing", () => {
    expect(() => {
      new ObjectMoveMetadata(argList2Params("--oldPath", "/foo", "--newPath", "/bar"));
    }).to.throw("Missing required argument: objectId");
  });

  it("should complain if --oldPath missing", () => {
    expect(() => {
      new ObjectMoveMetadata(argList2Params("--objectId", "foo", "--newPath", "/bar"));
    }).to.throw("Missing required argument: oldPath");
  });

  it("should complain if --newPath missing", () => {
    expect(() => {
      new ObjectMoveMetadata(argList2Params("--objectId", "foo", "--oldPath", "/foo"));
    }).to.throw("Missing required argument: newPath");
  });

  it("should call ElvClient.ReplaceMetadata()", () => {
    const utility = new ObjectMoveMetadata(argList2Params("--objectId", "iq__001xxx002xxxxxxxxxxxxxxxxxxx", "--oldPath", "/production_master/variants/default", "--newPath", "/production_master/variants/special", "--noWait", "--json"));
    const stub = stubClient(utility.concerns.Client);
    stub.resetHistory();
    return utility.run().then(() => {
      // console.log(JSON.stringify(retVal, null, 2));
      expect(stub.callHistoryMismatches([
        "ContentObjectLibraryId",
        "ContentObjectMetadata",
        "EditContentObject",
        "ReplaceMetadata",
        "FinalizeContentObject"
      ]).length).to.equal(0);
    });
  });

});
