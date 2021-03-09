const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const expect = chai.expect;
chai.use(chaiAsPromised);

const {removeStubs, stubClient} = require("../mocks/ElvClient.mock");
const {argList2Params, removeElvEnvVars} = require("../helpers/params");

removeElvEnvVars();
beforeEach(removeStubs);

const ObjectListParts = require("../../ObjectListParts");

describe("ObjectListParts", () => {

  it("should complain if unrecognized option supplied", () => {
    expect(() => {
      new ObjectListParts(argList2Params("--objectId", "myObjId", "--illegalOption"));
    }).to.throw("Unknown argument: illegalOption");
  });

  it("should complain if --objectId and --versionHash missing", () => {
    expect(() => {
      new ObjectListParts(argList2Params());
    }).to.throw("Must supply either --objectId or --versionHash");
  });

  it("should not complain if --objectId or --versionHash supplied", () => {
    expect(() => {
      new ObjectListParts(argList2Params("--objectId", "myObjId"));
    }).to.not.throw();
    expect(() => {
      new ObjectListParts(argList2Params("--versionHash", "myHash"));
    }).to.not.throw();
  });

  it("should call ElvClient.ContentParts() and return list", () => {
    const utility = new ObjectListParts(argList2Params("--objectId", "iq__USKPjhGXje6aGaqEN5VBjdH3n12", "--json"));
    const stub = stubClient(utility.concerns.Client);
    stub.resetHistory();
    return utility.run().then( (retVal) => {
      expect(retVal.parts.length).to.be.greaterThan(0);
      // console.log(JSON.stringify(retVal, null, 2));
      expect(stub.callHistoryMismatches([
        "ContentObjectLibraryId",
        "ContentObject",
        "ContentParts"
      ]).length).to.equal(0);
    });
  });

});
