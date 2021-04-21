const {ElvClient} = require("../src/ElvClient");
const fs = require("fs");
const path = require("path");


const ClientConfiguration = require("../TestConfiguration.json");

function Counter(array) {
    var count = {};
    array.forEach(val => count[val] = (count[val] || 0) + 1);
    return count;
}

const Summary = async (libId, objId, targetPath) => {
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

        console.log("Getting video tags " + libId + " " + objId);
        const videoTags = await client.ContentObjectMetadata({
            libraryId: libId,
            objectId: objId,
            metadataSubtree: "video_tags",
        });
        const metadataTags = videoTags.metadata_tags
        // console.log(JSON.stringify(metadataTags));

        //if ("summary" in videoTags) {
        //    console.log("Skip " + objId + ", video tag summarized");
        //    return
        //}

        console.log("Summarizing video tags...");
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
        for (var k in metadataTags) {
            if (k.length!=4) {continue;}
            const tags = await client.ContentObjectMetadata({
                libraryId: libId,
                objectId: objId,
                metadataSubtree: "video_tags/metadata_tags/" + k + "/metadata_tags/shot_tags/tags"
            })
            for (var i = 0; i < tags.length; i++) {
                for (var feature in map) {
                    if (!(feature in tags[i]["text"])) {continue;}
                    var featureTags = tags[i]["text"][feature]
                    for (var j = 0; j < featureTags.length; j++) {
                        var textList = featureTags[j]["text"]
                        for (var jt = 0; jt < textList.length; jt++) {
                            map[feature].push(textList[jt])
                        };
                    };
                }
            }
        }

        console.log("Create summary metadata tags...");
        const mapName = {
            "Object Detection": "object_detection",
            "Celebrity Detection": "celebrity_detection",
            "Landmark Recognition": "landmark_recognition",
            "Logo Detection": "logo_detection",
            "Optical Character Recognition": "optical_character_recognition",
            "Segment Labels": "segment_labels",
            "Speech to Text": "speech_to_text"
        }
        var summaryTags = {
            "video_tags": {"summary": {}}
        }
        for (var feature in map) {
            const count = Counter(map[feature])
            var tags = []
            for (const [k, v] of Object.entries(count)) {
                tags.push({
                    "confidence": v,
                    "text": k
                });
            }
            summaryTags.video_tags.summary[mapName[feature]] = {"tags": tags}
        }
        console.log("summaryTags", JSON.stringify(summaryTags))

        console.log("Update content object with summary tags...")
        const edit = await client.EditContentObject({
            libraryId: libId,
            objectId: objId,
        })
        console.log(edit)
        if ("summary" in videoTags) {
            await client.ReplaceMetadata({
                libraryId: libId,
                objectId: objId,
                writeToken: edit["write_token"],
                metadataSubtree: "video_tags/summary",
                metadata: summaryTags["video_tags"]["summary"]
            })
        } else {
            await client.MergeMetadata({
                libraryId: libId,
                objectId: objId,
                writeToken: edit["write_token"],
                metadata: summaryTags
            })
        }
        console.log("Finalize content object with summary tags...")
        const res = await client.FinalizeContentObject({
            libraryId: libId,
            objectId: objId,
            writeToken: edit["write_token"],
            commitMessage: "Add video tags summary"
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

Summary(
    libId,
    objId,
    targetPath
);
