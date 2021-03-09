const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const expect = chai.expect;
chai.use(chaiAsPromised);

const {removeStubs, stubClient} = require("../mocks/ElvClient.mock");
const {argList2Params, removeElvEnvVars} = require("../helpers/params");

removeElvEnvVars();
beforeEach(removeStubs);

const ObjectCreate = require("../../ObjectCreate");

describe("ObjectCreate", () => {

  it("should complain if --libraryId missing", () => {
    expect(() => {
      new ObjectCreate(argList2Params("--name", "foo"));
    }).to.throw("Missing required argument: libraryId");
  });

  it("should call ElvClient.CreateContentObject()", () => {
    const utility = new ObjectCreate(argList2Params("--libraryId", "ilib001xxxxxxxxxxxxxxxxxxxxxxxx", "--name", "foo", "--noWait", "--json"));
    const stub = stubClient(utility.concerns.Client);
    stub.resetHistory();
    return utility.run().then(() => {
      // console.log(JSON.stringify(retVal, null, 2));
      expect(stub.callHistoryMismatches([
        "CreateContentObject",
        "FinalizeContentObject"
      ]).length).to.equal(0);
    });
  });

});
