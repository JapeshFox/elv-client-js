const {ElvClient} = require("../src/ElvClient");
const path = require("path");
var fs = require("fs");
var sizeof = require('object-sizeof')
var rejectedJSON = require('./rejected_tags_merge_hidden.json');

const ClientConfiguration = require("../TestConfiguration.json");

function Counter(array) {
    var count = {};
    array.forEach(val => count[val] = (count[val] || 0) + 1);
    return count;
}

function AddTextField(t) {
    return {"text": t}
}

function arrayRemove(arr, value) {
    return arr.filter(function(ele) {
        return !value.includes(ele["text"]);
    });
}

function arrayTrackRemove(arr, value) {
    return arr.filter(function(ele) {
        return !value.includes(ele["text"][0]);
    });
}

const Reject = async (libId, objId, targetPath) => {
    const textFilePath = path.join(targetPath, "iqFailed.txt");
    try {fs.unlinkSync(textFilePath);} catch(error) {}
    var iqLogger = fs.createWriteStream(textFilePath, {flags: 'a'})

    //// ++++++++++++ Track File +++++++++++++
    //const tagFilePath = path.join(targetPath, "video-tags-tracks-0000.json");
    //try {fs.unlinkSync(tagFilePath);} catch(error) {}
    //var outputfile = fs.createWriteStream(tagFilePath, {flags: 'a'})
    try {
        const client = await ElvClient.FromConfigurationUrl({
            configUrl: ClientConfiguration["config-url"]
        });
        let wallet = client.GenerateWallet();
        let signer = wallet.AddAccount({
            privateKey: process.env.PRIVATE_KEY
        });
        await client.SetSigner({signer});

        console.log("Adding curated video tags " + libId + " " + objId);
        const videoTags = await client.ContentObjectMetadata({
            libraryId: libId,
            objectId: objId,
            metadataSubtree: "video_tags",
        });
        //console.log(videoTags)
        var summary = videoTags.summary;
        if ("hidden_tags" in summary.object_detection) {
            console.log("Skip "+ libId +" "+ objId + " tags curated");
            return;
        }
        //// ++++++++++++ Track File +++++++++++++
        //const fileData = await client.DownloadFile({
        //    libraryId:  libId,
        //    objectId: objId,
        //    filePath: "/video_tags/video-tags-tracks-0000.json",
        //    format: "arrayBuffer"
        //});
        //console.log(fileData);
        //var enc = new TextDecoder();
        //var videoTracks = JSON.parse(enc.decode(fileData));
        //console.log(sizeof(videoTracks));
        ////outputfile.write(videoTracks);

        const map = {
            "Object Detection": [],
            "Celebrity Detection": [],
            "Landmark Recognition": [],
            "Logo Detection": [],
            "Optical Character Recognition": [],
            "Segment Labels": [],
            "Speech to Text": []
        };
        const mapName = {
            "Object Detection": "object_detection",
            "Celebrity Detection": "celebrity_detection",
            "Landmark Recognition": "landmark_recognition",
            "Logo Detection": "logo_detection",
            "Optical Character Recognition": "optical_character_recognition",
            "Segment Labels": "segment_levels",
            "Speech to Text": "speech_to_text"
        };

        if ("segment_labels" in summary) {
            summary["segment_levels"] = summary["segment_labels"];
            delete summary["segment_labels"];
        }
        var curatedTags = summary;

        if (objId in rejectedJSON) {
            var rejected = rejectedJSON[objId];
        } else {
            var rejected = map;
        }
        var hidden = map;
        hidden["Object Detection"] = ["Human face", "Person"];
        for (var feature in map) {
            curatedTags[mapName[feature]] = {
                "added_tags": [],
                "hidden_tags": hidden[feature].map(AddTextField),
                "curated_tags": arrayRemove(arrayRemove(summary[mapName[feature]]["tags"], rejected[feature]), hidden[feature]),
                "rejected_tags": rejected[feature].map(AddTextField),
                "tags": summary[mapName[feature]]["tags"]
            }
        }
        //console.log(JSON.stringify(curatedTags))

        //// ++++++++++++ Track File +++++++++++++
        //mapName["Segment Labels"] = "segment_levels"
        //var curatedVideoTracks = videoTracks;
        //for (var feature in map) {
        //    console.log(mapName[feature])
        //    curatedVideoTracks.metadata_tags[mapName[feature]]["rejected_tags"] = rejected[feature].map(AddTextField);
        //    curatedVideoTracks.metadata_tags[mapName[feature]]["curated_tags"] = arrayTrackRemove(videoTracks.metadata_tags[mapName[feature]]["tags"], rejected[feature])
        //}
        //shotTags = videoTracks.metadata_tags.shot_tags["tags"]
        //curatedVideoTracks.metadata_tags.shot_tags["curated_tags"] = shotTags
        //for (i=0; i<shotTags.length; i++) {
        //    for (var feature in map) {
        //        curatedVideoTracks.metadata_tags.shot_tags["curated_tags"][i].text[feature] = arrayTrackRemove(shotTags[i].text[feature], rejected[feature])
        //    }
        //}
        //console.log(curatedVideoTracks)
        //console.log(sizeof(curatedVideoTracks));

        console.log("Update content object with rejected tags...")
        const edit = await client.EditContentObject({
            libraryId: libId,
            objectId: objId,
        })
        console.log(edit)

        //// ++++++++++++ Track File +++++++++++++
        //await client.UploadFiles({
        //    libraryId: libId,
        //    objectId: objId,
        //    writeToken: edit["write_token"],
        //    fileInfo: [
        //        {
        //          "path": "/video_tags/video-tags-tracks-0000.json",
        //          "type": "file",
        //          "mime_type": "text/json",
        //          "size": sizeof(curatedVideoTracks),
        //          "data": curatedVideoTracks
        //        }
        //    ],
        //})

        await client.DeleteMetadata({
            libraryId: libId,
            objectId: objId,
            writeToken: edit["write_token"],
            metadataSubtree: "/video_tags/rejected_tags"
        });

        await client.ReplaceMetadata({
            libraryId: libId,
            objectId: objId,
            writeToken: edit["write_token"],
            metadataSubtree: "video_tags/summary",
            metadata: curatedTags
        })
        console.log("Finalize content object with summary tags...")
        const res = await client.FinalizeContentObject({
            libraryId: libId,
            objectId: objId,
            writeToken: edit["write_token"],
            commitMessage: "Add hidden video tags"
        })
        console.log(res);
        console.log("Finished " + libId + " " + objId);

    } catch(error) {
        iqLogger.write(objId + '\n');
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
