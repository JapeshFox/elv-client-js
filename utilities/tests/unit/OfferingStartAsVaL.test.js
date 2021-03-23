const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const expect = chai.expect;
chai.use(chaiAsPromised);

const {removeStubs, stubClient} = require("../mocks/ElvClient.mock");
const {argList2Params, removeElvEnvVars} = require("../helpers/params");

removeElvEnvVars();
beforeEach(removeStubs);

const OfferingStartAsVaL = require("../../OfferingStartAsVaL");

describe("OfferingStartAsVaL", () => {

  it("should complain if --objectId not supplied", () => {
    expect(() => {
      new OfferingStartAsVaL(argList2Params());
    }).to.throw("Missing required argument: objectId");
  });

  it("should complain if unrecognized option supplied", () => {
    expect(() => {
      new OfferingStartAsVaL(argList2Params(
        "--objectId", "myId",
        "--illegalOption"
      ));
    }).to.throw("Unknown argument: illegalOption");
  });

  it("should complain if object does not have offerings", () => {
    const utility = new OfferingStartAsVaL(argList2Params(
      "--objectId", "iq__001xxx002xxxxxxxxxxxxxxxxxxx",
      "--json"
    ));
    const stub = stubClient(utility.concerns.Client);
    stub.resetHistory();
    return expect(utility.run()).to.eventually.be.rejectedWith("offerings not found");
  });

  it("should call ElvClient.ContentObjectMetadata()", () => {
    const utility = new OfferingStartAsVaL(argList2Params(
      "--objectId", "iq__003xxx001xxxxxxxxxxxxxxxxxxx",
      "--json"
    ));
    const stub = stubClient(utility.concerns.Client);
    stub.resetHistory();
    return utility.run().then( () => {
      // console.log(JSON.stringify(retVal, null, 2));
      expect(stub.callHistoryMismatches([
        "ContentObjectLibraryId",
        "ContentObjectMetadata",
        "EditContentObject",
        "ReplaceMetadata",
        "FinalizeContentObject",
        "ContentObject"
      ]).length).to.equal(0);
    });
  });
});
