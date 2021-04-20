const { ElvClient } = require("../src/ElvClient.js")

/*
 * Usage:
 * export PRIVATE_KEY=deadbeefbadf00dbadf00dbadf00dbadf00dbadf00dbadf00dbadf00dbadf00d
 * node SetupLive.js
 *
 * For clientConf, use EITHER configUrl OR contentSpaceId, fabricURIs, and ethereumURIs
 *
 * From the config json
 *   contentSpaceId is qspace.id
 *   fabricURIs/ingressNodeApiUrl is network.seed_nodes.fabric_api
 *   ethereumURIs is network.seed_nodes.ethereum_api
 *   ingressNodeId is node_id
 *
 * TODO: Load configuration from a file
 */

const PRINT_DEBUG = false

const hlsStream = {
  txParams: {
    "audio_bitrate": 128000, // required
    "audio_index": 11, // required
    "dcodec": "aac", // required
    "sample_rate": 48000, // Hz, required
    // 24s @ 48000 Hz @ 1024 samples per frame (1443840 for 30.08s)
    "audio_seg_duration_ts": 1152000, // part size, required
    "enc_height": 720, // required
    "enc_width": 1280, // required
    "force_keyint": 40, // frames, required
    "video_seg_duration_ts": 2160000, // 24s @ 25 fps, part size, required
    "video_bitrate": 8000000, // 8 Mbps, required
  },
  ingestType: "hls", // default: hls
  maxDurationSec: 600, // 10m, default: 2h
  originUrl: "http://yourhlsplaylist", // required for hls
  sourceTimescale: 90000, // required
}

const udpTsStream = {
  txParams: {
    "audio_bitrate": 128000,            // required
    "audio_index": 0,                   // required
    "dcodec2": "ac3",                   // required
    "ecodec2": "aac",                   // required
    "sample_rate": 48000,               // Hz, required
    "seg_duration": "30.03",
    "format": "fmp4-segment",
    "audio_seg_duration_ts": 1443840,   // 30s @ 48000 Hz @ 1024 samples per frame; part size, required
    "enc_height": 720,
    "enc_width": 1280,
    "force_keyint": 120,
    "video_seg_duration_ts": 2702700,   // 30s @ 60000/1001 fps
    "video_bitrate": 20000000,          // 20 Mbps
  },
  ingestType: "udp",
  maxDurationSec: 600,
  sourceTimescale: 90000,
  udpPort: 22001,                       // required for udp
  simpleWatermark: {
    "font_color": "white@0.5",
    "font_relative_height": 0.05000000074505806,
    "shadow": true,
    "shadow_color": "black@0.5",
    "template": "%{pts\:gmtime\:1602968400\:%d-%m-%Y %T}",
    "x": "(w-tw)/2",
    "y": "h-(2*lh)"
  },
}

// For 2020-11-06_20-22-32_KSAZ.pcap
const udpTsStream2 = {
  txParams: {
    "audio_bitrate": 128000,                // required
    "n_audio": 1,
    "audio_index": [1,0,0,0,0,0,0,0],       // required
    "ecodec2": "aac",                       // required
    "sample_rate": 48000,                   // Hz, required
    "seg_duration": "30.03",
    "format": "fmp4-segment",
    "audio_seg_duration_ts": 1441440,       // 30.03s @ 48000 Hz @ 1024 samples per frame; part size, required
    "enc_height": 720,
    "enc_width": 1280,
    "force_keyint": 120,
    "video_seg_duration_ts": 2702700,       // 30.03s @ 60000/1001 fps
    "video_bitrate": 20000000,              // 20 Mbps
    "sync_audio_to_stream_id": 0,
   },
  ingestType: "udp",
  maxDurationSec: 600,
  sourceTimescale: 90000,
  udpPort: 22001,                           // required for udp
}

// For fs1-mpegts-2019-11-25.cap
const udpTsStream3 = {
  txParams: {
    "audio_bitrate": 128000,                // required
    "n_audio": 1,
    "audio_index": [0,0,0,0,0,0,0,0],       // required
    "ecodec2": "aac",                       // required
    "sample_rate": 48000,                   // Hz, required
    "seg_duration": "30.03",
    "format": "fmp4-segment",
    "audio_seg_duration_ts": 1441440,       // 30.03s @ 48000 Hz @ 1024 samples per frame; part size, required
    "enc_height": 720,
    "enc_width": 1280,
    "force_keyint": 120,
    "video_seg_duration_ts": 2702700,       // 30.03s @ 60000/1001 fps
    "video_bitrate": 20000000,              // 20 Mbps
    "sync_audio_to_stream_id": -1,
   },
  ingestType: "udp",
  maxDurationSec: 600,
  sourceTimescale: 90000,
  udpPort: 22001,                           // required for udp
}

const rtmpStream = {
  txParams: {
    "audio_bitrate": 128000,    // required
    "n_audio": 1,
    "audio_index": [1,0,0,0,0,0,0,0],           // required
    "ecodec2": "aac",           // required
    "sample_rate": 48000,       // Hz, required
    "seg_duration": "30.03",
    //"audio_seg_duration_ts": 1441440, //1443840 30.03s @ 48000 Hz @ 1024 samples per frame; part size, required
    "enc_height": 720,
    "enc_width": 1280,
    "force_keyint": 120,
    "format": "fmp4-segment",
    //"video_seg_duration_ts": 480480,    // 30.03*16000
    "video_bitrate": 20000000,          // 20 Mbps
   },
  ladderSpecs:
  [
    {
        "media_type": 1,
        "stream_name": "video",
        "bit_rate": 20000000,
        "width": 1280,
        "height": 720,
        "codecs": "avc1.640028,mp4a.40.2",
        "representation": "720@8000000"
      },
      {
        "media_type": 1,
        "stream_name": "video",
        "bit_rate": 4500000,
        "width": 960,
        "height": 540,
        "codecs": "avc1.640028,mp4a.40.2",
        "representation": "540@4500000"
      },
      {
        "media_type": 1,
        "stream_name": "video",
        "bit_rate": 1500000,
        "width": 640,
        "height": 360,
        "codecs": "avc1.640028,mp4a.40.2",
        "representation": "360@1500000"
      },
      {
        "media_type": 2,
        "stream_name": "audio_2ch_eng",
        "bit_rate": 128000,
        "channels": 6,
        "representation": "stereo@128000"
      }
  ],
  ingestType: "rtmp",
  maxDurationSec: 600,
  sourceTimescale: 16000,
  udpPort: 22001,               // required for udp
  partTTL: 0,
  //rtmpURL: "rtmp://localhost:5000/test002",
  rtmpURL: "rtmp://192.168.90.202:1935/rtmp/XQjNir3S",
  listen: true,
}

const rtmpStream2 = {
  txParams: {
    "audio_bitrate": 128000,    // required
    "n_audio": 1,
    "audio_index": [1,0,0,0,0,0,0,0],           // required
    "ecodec2": "aac",           // required
    "sample_rate": 48000,       // Hz, required
    "seg_duration": "30.03",
    "audio_seg_duration_ts": 1441440, //1443840 30s @ 48000 Hz @ 1024 samples per frame; part size, required
    "enc_height": 1080,
    "enc_width": 1920,
    "force_keyint": 120,
    "format": "fmp4-segment",
    "video_seg_duration_ts": 480480,    // 30*16000
    "video_bitrate": 20000000,          // 20 Mbps
  },
  ingestType: "rtmp",
  maxDurationSec: 600,
  sourceTimescale: 16000,
  udpPort: 22001,               // required for udp
  //partTTL: 0,
  //rtmpURL: "rtmp://localhost:5000/test002",
  rtmpURL: "rtmp://localhost:1935/rtmp/JxTT1dFA",
  //rtmpURL: "rtmp://localhost:1936/rtmp/XQjNir6S",
  listen: true,
}

const streamParams = rtmpStream2
//const streamParams = udpTsStream3

const confLocal = {
  txParams: streamParams.txParams,
  ladderSpecs: streamParams.ladderSpecs,

  clientConf: {
    configUrl: "",
    contentSpaceId: "ispc36s3uwY9voTx6gXcXENn4KfY29fC",
    fabricURIs: ["http://192.168.90.202:8009"],
    ethereumURIs: ["http://192.168.90.202:8546"],
    noCache: false,
    noAuth: false
  },
  ingestType: streamParams.ingestType,
  ingressNodeApiUrl: "", // "http://localhost:8008"
  ingressNodeId: "", // "inod2oZhwSumZZSYhaNaf77VVKCt3nu2"
  libraryId: "ilib8SLzhEyJWiJ41BPezhswG56MUwL",
  maxDurationSec: streamParams.maxDurationSec,
  objectType: "iq__AzMAxaZXN5MPAa2SvxhGMh56JCY",
  originUrl: streamParams.originUrl,
  signerPrivateKey: process.env.PRIVATE_KEY,
  sourceTimescale: streamParams.sourceTimescale,
  udpPort: streamParams.udpPort,
  simpleWatermark: streamParams.simpleWatermark,
  partTTL: streamParams.partTTL,
  rtmpURL: streamParams.rtmpURL,
  listen: streamParams.listen,
}

/*
 * Creates object in: https://core.test.contentfabric.io/#/apps/fabric-browser/content/ilibX37dYK6dj5F5ZQQC4eDLMNe1kZD
 *
 * For the private key, create an account at https://core.test.contentfabric.io/#/accounts
 */
const conf955210California = {
  txParams: streamParams.txParams,
  clientConf: {
    // configUrl: "https://main.net955210.contentfabric.io",
    contentSpaceId: "ispc2zqa4gZ8N3DH1QWakR2e5UowDLF1",
    fabricURIs: ["https://host-35-233-145-232.test.contentfabric.io"],
    ethereumURIs: ["https://host-35-233-145-232.test.contentfabric.io/eth/"],
    noCache: false,
    noAuth: false
  },
  ingestType: streamParams.ingestType,
  ingressNodeApiUrl: "https://host-35-233-145-232.test.contentfabric.io",
  ingressNodeId: "inod3jzKHgsuaBu3cqKu7t4N2fLLdkC4",
  libraryId: "ilibX37dYK6dj5F5ZQQC4eDLMNe1kZD",
  maxDurationSec: streamParams.maxDurationSec,
  objectType: "hq__aVeScS42SZYyRtud7ycv6UWqaxm76VGN398RamQ3w4b55Ycrn1z6DivNTJyaPhEs4m1TfR3bH",
  originUrl: streamParams.originUrl,
  signerPrivateKey: process.env.PRIVATE_KEY,
  sourceTimescale: streamParams.sourceTimescale,
  udpPort: streamParams.udpPort,
}

const conf955210Live = {
  txParams: streamParams.txParams,
  clientConf: {
    // configUrl: "https://main.net955210.contentfabric.io",
    contentSpaceId: "ispc2zqa4gZ8N3DH1QWakR2e5UowDLF1",
    fabricURIs: ["https://host-38-142-50-108.test.contentfabric.io"],
    ethereumURIs: ["https://host-38-142-50-108.test.contentfabric.io/eth/"],
    noCache: false,
    noAuth: false
  },
  ingestType: streamParams.ingestType,
  ingressNodeApiUrl: "https://host-38-142-50-108.test.contentfabric.io",
  ingressNodeId: "inod3o4epGxi6CKPiWjuyRUPieKCXai",
  libraryId: "ilibX37dYK6dj5F5ZQQC4eDLMNe1kZD",
  maxDurationSec: streamParams.maxDurationSec,
  objectType: "hq__aVeScS42SZYyRtud7ycv6UWqaxm76VGN398RamQ3w4b55Ycrn1z6DivNTJyaPhEs4m1TfR3bH",
  originUrl: streamParams.originUrl,
  signerPrivateKey: process.env.PRIVATE_KEY,
  sourceTimescale: streamParams.sourceTimescale,
  udpPort: streamParams.udpPort,
}

const conf955210London = {
  audioTxParams: streamParams.audioTxParams,
  clientConf: {
    // configUrl: "https://main.net955210.contentfabric.io",
    contentSpaceId: "ispc2zqa4gZ8N3DH1QWakR2e5UowDLF1",
    fabricURIs: ["https://host-35-246-28-142.test.contentfabric.io"],
    ethereumURIs: ["https://host-35-246-28-142.test.contentfabric.io/eth/"],
    noCache: false,
    noAuth: false
  },
  ingestType: streamParams.ingestType,
  ingressNodeApiUrl: "https://host-35-246-28-142.test.contentfabric.io",
  ingressNodeId: "inod3wynwpbH82fsCWxbatCKxCsgyP1c",
  libraryId: "ilibX37dYK6dj5F5ZQQC4eDLMNe1kZD",
  maxDurationSec: streamParams.maxDurationSec,
  objectType: "hq__aVeScS42SZYyRtud7ycv6UWqaxm76VGN398RamQ3w4b55Ycrn1z6DivNTJyaPhEs4m1TfR3bH",
  originUrl: streamParams.originUrl,
  signerPrivateKey: process.env.PRIVATE_KEY,
  sourceTimescale: streamParams.sourceTimescale,
  udpPort: streamParams.udpPort,
  videoTxParams: streamParams.videoTxParams,
}

const conf = confLocal

const Test = async () => {
  try {
    let client
    if (conf.clientConf.configUrl) {
      client = await ElvClient.FromConfigurationUrl({
        configUrl: conf.clientConf.configUrl
      })
    } else {
      client = new ElvClient(conf.clientConf)
    }
    const wallet = client.GenerateWallet()
    const signer = wallet.AddAccount({ privateKey: conf.signerPrivateKey })
    client.SetSigner({ signer })
    const fabURI = client.fabricURIs[0]
    console.log("Fabric URI: " + fabURI)
    const ethURI = client.ethereumURIs[0]
    console.log("Ethereum URI: " + ethURI)

    //client.ToggleLogging(true);

    /*
     * Create object for live streaming.
     */
    if (PRINT_DEBUG) console.log("CreateContentObject", conf.libraryId, conf.objectType)
    let response = await client.CreateContentObject({
      libraryId: conf.libraryId,
      options: {
        type: conf.objectType
      }
    })
    const objectId = response.id
    console.log("Object ID:", objectId)
    let writeToken = response.write_token

    /*
     * First finalize the object before creating the edge token, otherwise
     * the object type will be empty for the edge token.
     *
     * FIXME: Also sleep to make sure the operation is settled before
     * continuing, for the same reason.
     */
    if (PRINT_DEBUG) console.log("FinalizeContentObject", conf.libraryId, objectId, writeToken)
    await client.FinalizeContentObject({
      libraryId: conf.libraryId,
      objectId: objectId,
      writeToken: writeToken
    })
    if (PRINT_DEBUG) console.log("sleep 5 seconds")
    await sleep(5000)

    if (PRINT_DEBUG) console.log("EditContentObject", conf.libraryId, objectId)
    response = await client.EditContentObject({
      libraryId: conf.libraryId,
      objectId: objectId
    })
    const edgeToken = response.write_token
    console.log("Edge token:", edgeToken)

    /*
     * Set the metadata, including the edge token.
     */
    if (PRINT_DEBUG) console.log("EditContentObject", conf.libraryId, objectId)
    response = await client.EditContentObject({
      libraryId: conf.libraryId,
      objectId: objectId
    })
    writeToken = response.write_token

    if (PRINT_DEBUG) console.log("MergeMetadata", conf.libraryId, objectId, writeToken)
    await client.MergeMetadata({
      libraryId: conf.libraryId,
      objectId: objectId,
      writeToken: writeToken,
      metadata: {
        "tx_params": conf.txParams,
        "ladder_specs": conf.ladderSpecs,
        "description": "Lorem ipsum dolor sit amet",
        "edge_write_token": edgeToken,
        "ingest_type": conf.ingestType,
        "ingress_node_api": conf.ingressNodeApiUrl,
        "ingress_node_id": conf.ingressNodeId,
        "max_duration_sec": conf.maxDurationSec,
        "part_ttl": conf.partTTL,
        "rtmp_url": conf.rtmpURL,
        "listen": conf.listen,
        "name": "Live Test - " + Date().toLocaleString(),
        "origin_url": conf.originUrl,
        "playout_type" : "live",
        "source_timescale": conf.sourceTimescale,
        "udp_port": conf.udpPort,
        "simple_watermark": conf.simpleWatermark,
      }
    })

    if (PRINT_DEBUG) console.log("FinalizeContentObject", conf.libraryId, objectId, writeToken)
    response = await client.FinalizeContentObject({
      libraryId: conf.libraryId,
      objectId: objectId,
      writeToken: writeToken
    })
    const objectHash = response.hash
    console.log("Object hash:", objectHash)

    if (PRINT_DEBUG) console.log("AuthorizationToken", conf.libraryId, objectId)
    response = await client.authClient.AuthorizationToken({
      libraryId: conf.libraryId,
      objectId: objectId,
      versionHash: "",
      channelAuth: false,
      noCache: true,
      update: true,
    })

    const curlCmd = "curl -s -H \"$AUTH_HEADER\" "
    const fabLibHashURI = fabURI + "/qlibs/" + conf.libraryId + "/q/" + objectHash
    const fabLibTokenURI = fabURI + "/qlibs/" + conf.libraryId + "/q/" + edgeToken

    console.log("\nSet Authorization header:\nexport AUTH_HEADER=\"" +
      "Authorization: Bearer " + response + "\"")

    console.log("\nInspect metadata:\n" +
      curlCmd + fabLibHashURI + "/meta | jq")

    console.log("\nInspect edge metadata:\n" +
      curlCmd + fabLibTokenURI + "/meta | jq")

    console.log("\nStart recording (returns HANDLE):\n" +
      curlCmd + fabLibTokenURI + "/call/live/start | jq")

    console.log("\nStop recording (use HANDLE from start):\n" +
      curlCmd + fabLibTokenURI + "/call/live/stop/HANDLE")

    console.log("\nPlayout options:\n" +
      curlCmd + fabLibHashURI + "/rep/live/default/options.json | jq")

    console.log("\nHLS playlist:\n" +
      fabLibHashURI + "/rep/live/default/hls-clear/playlist.m3u8")
  } catch (error) {
    console.error(error)
  }
}




const StartStream = async () => {

  conf = {
	clientConf: {
	  contentSpaceId: "ispc3ANoVSzNA3P6t7abLR69ho5YPPZU",
      fabricURIs: ["https://host-184-104-204-51.contentfabric.io"],
      ethereumURIs: ["https://host-184-104-204-51.contentfabric.io/eth"],
	},
	libraryId: "ilib4UgUTory7GwH1k1syc77Uxnq7bMq",
	objectId: "iq__tVCfNiMQw5tHCY6TPtZd5CzhaGC",
	signerPrivateKey: process.env.PRIVATE_KEY,
  }

  try {
    let client
    if (conf.clientConf.configUrl) {
      client = await ElvClient.FromConfigurationUrl({
        configUrl: conf.clientConf.configUrl
      })
    } else {
      client = new ElvClient(conf.clientConf)
    }
    const wallet = client.GenerateWallet()
    const signer = wallet.AddAccount({ privateKey: conf.signerPrivateKey })
    client.SetSigner({ signer })
    const fabURI = client.fabricURIs[0]
    console.log("Fabric URI: " + fabURI)
    const ethURI = client.ethereumURIs[0]
    console.log("Ethereum URI: " + ethURI)

    //client.ToggleLogging(true);

    if (PRINT_DEBUG) console.log("EditContentObject", conf.libraryId, conf.objectId)
    response = await client.EditContentObject({
      libraryId: conf.libraryId,
      objectId: conf.objectId
    })
    const edgeToken = response.write_token
    console.log("Edge token:", edgeToken)

    /*
     * Set the metadata, including the edge token.
     */
    if (PRINT_DEBUG) console.log("EditContentObject", conf.libraryId, conf.objectId)
    response = await client.EditContentObject({
      libraryId: conf.libraryId,
      objectId: conf.objectId
    })
    writeToken = response.write_token

    if (PRINT_DEBUG) console.log("MergeMetadata", conf.libraryId, conf.objectId, writeToken)
    await client.MergeMetadata({
      libraryId: conf.libraryId,
      objectId: conf.objectId,
      writeToken: writeToken,
      metadata: {
        "edge_write_token": edgeToken,
      }
    })

     if (PRINT_DEBUG) console.log("FinalizeContentObject", conf.libraryId, conf.objectId, writeToken)
    response = await client.FinalizeContentObject({
      libraryId: conf.libraryId,
      objectId: conf.objectId,
      writeToken: writeToken
    })
    const objectHash = response.hash
    console.log("Object hash:", objectHash)

    if (PRINT_DEBUG) console.log("AuthorizationToken", conf.libraryId, conf.objectId)
    response = await client.authClient.AuthorizationToken({
      libraryId: conf.libraryId,
      objectId: conf.objectId,
      versionHash: "",
      channelAuth: false,
      noCache: true,
      update: true,
    })

    const curlCmd = "curl -s -H \"$AUTH_HEADER\" "
    const fabLibHashURI = fabURI + "/qlibs/" + conf.libraryId + "/q/" + objectHash
    const fabLibTokenURI = fabURI + "/qlibs/" + conf.libraryId + "/q/" + edgeToken

    console.log("\nSet Authorization header:\nexport AUTH_HEADER=\"" +
      "Authorization: Bearer " + response + "\"")

    console.log("\nInspect metadata:\n" +
      curlCmd + fabLibHashURI + "/meta | jq")

    console.log("\nInspect edge metadata:\n" +
      curlCmd + fabLibTokenURI + "/meta | jq")

    console.log("\nStart recording (returns HANDLE):\n" +
      curlCmd + fabLibTokenURI + "/call/live/start | jq")

    console.log("\nStop recording (use HANDLE from start):\n" +
      curlCmd + fabLibTokenURI + "/call/live/stop/HANDLE")

    console.log("\nPlayout options:\n" +
      curlCmd + fabLibHashURI + "/rep/live/default/options.json | jq")

    console.log("\nHLS playlist:\n" +
      fabLibHashURI + "/rep/live/default/hls-clear/playlist.m3u8")
  } catch (error) {
    console.error(error)
  }
}

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

Test()

//StartStream()
