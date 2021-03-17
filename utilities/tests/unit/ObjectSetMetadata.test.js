const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const expect = chai.expect;
chai.use(chaiAsPromised);

const {removeStubs, stubClient} = require("../mocks/ElvClient.mock");
const {argList2Params, removeElvEnvVars} = require("../helpers/params");

removeElvEnvVars();
beforeEach(removeStubs);

const ObjectSetMetadata = require("../../ObjectSetMetadata");

describe("ObjectSetMetadata", () => {

  it("should complain if --objectId missing", () => {
    expect(() => {
      new ObjectSetMetadata(argList2Params("--metadata", "{}"));
    }).to.throw("Missing required argument: objectId");
  });

  it("should complain if --metadata missing", () => {
    expect(() => {
      new ObjectSetMetadata(argList2Params("--objectId", "foo"));
    }).to.throw("Missing required argument: metadata");
  });

  it("should complain if target exists and --force not specified", () => {
    const utility = new ObjectSetMetadata(argList2Params("--objectId", "iq__001xxx001xxxxxxxxxxxxxxxxxxx", "--metadata", "{}", "--noWait", "--json"));
    const stub = stubClient(utility.concerns.Client);
    stub.resetHistory();
    return expect(utility.run()).to.eventually.be.rejectedWith("Metadata path '/' is invalid (already exists, use --force to replace)");
  });

  it("should call ElvClient.ReplaceMetadata()", () => {
    const utility = new ObjectSetMetadata(argList2Params("--objectId", "iq__001xxx001xxxxxxxxxxxxxxxxxxx", "--metadata", "{}", "--force", "--noWait", "--json"));
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
