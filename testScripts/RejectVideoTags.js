const {ElvClient} = require("../src/ElvClient");
const fs = require("fs");
const path = require("path");
var rejectedJSON = require('./rejected_tags.json');

const ClientConfiguration = require("../TestConfiguration.json");

function Counter(array) {
    var count = {};
    array.forEach(val => count[val] = (count[val] || 0) + 1);
    return count;
}

function AddTextField(t) {
    return {"text": t}
}

const Reject = async (libId, objId, targetPath) => {
    const textFilePath = path.join(targetPath, "iqFailed.txt");
    try {fs.unlinkSync(textFilePath);} catch(error) {}
    var fs = require('fs')
    var iqLogger = fs.createWriteStream(textFilePath, {flags: 'a'})
    try {
        const client = await ElvClient.FromConfigurationUrl({
            configUrl: ClientConfiguration["config-url"]
        });
        let wallet = client.GenerateWallet();
        let signer = wallet.AddAccount({
            privateKey: process.env.PRIVATE_KEY
        });
        await client.SetSigner({signer});

        console.log("Adding rejected video tags " + libId + " " + objId);
        const videoTags = await client.ContentObjectMetadata({
            libraryId: libId,
            objectId: objId,
            metadataSubtree: "video_tags",
        });
        //console.log(videoTags)

        if ("rejected_tags" in videoTags) {
            console.log("Skip " + objId + ", video tag summarized");
            return
        }

        var celebrityTags = [];
        var landmarkTags = [];
        var logoTags = [];
        var objectTags = [];
        var ocrTags = [];
        var segmentTags = [];
        var sttTags = [];
        const map = {
            "Object Detection": objectTags,
            "Celebrity Detection": celebrityTags,
            "Landmark Recognition": landmarkTags,
            "Logo Detection": logoTags,
            "Optical Character Recognition": ocrTags,
            "Segment Labels": segmentTags,
            "Speech to Text": sttTags
        }
        const mapName = {
            "Object Detection": "object_detection",
            "Celebrity Detection": "celebrity_detection",
            "Landmark Recognition": "landmark_recognition",
            "Logo Detection": "logo_detection",
            "Optical Character Recognition": "optical_character_recognition",
            "Segment Labels": "segment_labels",
            "Speech to Text": "speech_to_text"
        }

        var rejectedTags = {
            "video_tags": {"rejected_tags": {}}
        }

        const rejected = rejectedJSON[objId]
        for (var feature in map) {
            const tags = rejected[feature].map(AddTextField);
            rejectedTags.video_tags.rejected_tags[mapName[feature]] = {"tags": tags}
        }
        console.log(JSON.stringify(rejectedTags))

        console.log("Update content object with rejected tags...")
        const edit = await client.EditContentObject({
            libraryId: libId,
            objectId: objId,
        })
        console.log(edit)
        if ("rejected_tags" in videoTags) {
            await client.ReplaceMetadata({
                libraryId: libId,
                objectId: objId,
                writeToken: edit["write_token"],
                metadataSubtree: "video_tags/rejected_tags",
                metadata: rejectedTags["video_tags"]["rejected_tags"]
            })
        } else {
            await client.MergeMetadata({
                libraryId: libId,
                objectId: objId,
                writeToken: edit["write_token"],
                metadata: rejectedTags
            })
        }
        console.log("Finalize content object with summary tags...")
        const res = await client.FinalizeContentObject({
            libraryId: libId,
            objectId: objId,
            writeToken: edit["write_token"],
            commitMessage: "Add rejected video tags"
        })
        console.log(res);
        console.log("Finished " + libId + " " + objId);

    } catch(error) {
        iqLogger.write(objId + '\n')
        console.error("Unrecoverable error:");
        console.log(JSON.stringify(error, null, 2));
        console.error(error.body ? error.body : error);
    }
};

const libId = process.argv[2];
const objId = process.argv[3];

var targetPath = process.argv[4];
if (targetPath == null) {
    targetPath = "./"
}

if(!libId || !objId) {
    console.error("Usage: node SummaryVideoTags.js libId objId targetPath(optional)");
    return;
}

const privateKey = process.env.PRIVATE_KEY;
if(!privateKey) {
    console.error("PRIVATE_KEY environment variable must be specified");
    return;
}

Reject(
    libId,
    objId,
    targetPath,
);
