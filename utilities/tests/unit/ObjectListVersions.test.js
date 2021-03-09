const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const expect = chai.expect;
chai.use(chaiAsPromised);

const {removeStubs, stubClient} = require("../mocks/ElvClient.mock");
const {argList2Params, removeElvEnvVars} = require("../helpers/params");

removeElvEnvVars();
beforeEach(removeStubs);

const ObjectListVersions = require("../../ObjectListVersions");

describe("ObjectListVersions", () => {

  it("should complain if no objectId supplied", () => {
    expect(() => {
      new ObjectListVersions(argList2Params());
    }).to.throw("Missing required argument: objectId");
  });

  it("should complain if unrecognized option supplied", () => {
    expect(() => {
      new ObjectListVersions(argList2Params(
        "--objectId", "myId",
        "--illegalOption"
      ));
    }).to.throw("Unknown argument: illegalOption");
  });

  it("should call ElvClient.ContentObjectVersions()", () => {
    const utility = new ObjectListVersions(argList2Params(
      "--objectId", "iq__001xxx001xxxxxxxxxxxxxxxxxxx",
      "--json"
    ));
    const stub = stubClient(utility.concerns.Client);
    stub.resetHistory();
    return utility.run().then( () => {
      // console.log(JSON.stringify(retVal, null, 2));
      expect(stub.callHistoryMismatches([
        "ContentObjectLibraryId",
        "ContentObjectVersions"
      ]).length).to.equal(0);
    });
  });
});
