const contract={"abi":[{"constant":true,"inputs":[],"name":"STATUS_PUBLISHED","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"parentAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"request_ID","type":"uint256"},{"name":"score_pct","type":"uint256"},{"name":"","type":"uint256"}],"name":"accessComplete","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"publish","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"requestNonce","type":"uint256"},{"name":"payee","type":"address"},{"name":"label","type":"string"},{"name":"amount","type":"uint256"}],"name":"processRequestPayment","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"stakeholder","type":"address"},{"name":"access_type","type":"uint8"},{"name":"access","type":"uint8"}],"name":"setRights","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"CAN_SEE","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"canConfirm","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"requestMap","outputs":[{"name":"originator","type":"address"},{"name":"amountPaid","type":"uint256"},{"name":"status","type":"int8"},{"name":"settled","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"customValues","type":"bytes32[]"},{"name":"stakeholders","type":"address[]"}],"name":"accessRequestV3","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"group","type":"address"},{"name":"access_type","type":"uint8"},{"name":"access","type":"uint8"}],"name":"setGroupRights","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"contentContractAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_candidate","type":"address"}],"name":"isAdmin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"statusCode","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"visibility","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"addressKMS","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"countVersionHashes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contentType","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"commitPending","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"status_code","type":"int256"}],"name":"statusCodeDescription","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"level","type":"uint8"},{"name":"customValues","type":"bytes32[]"},{"name":"stakeholders","type":"address[]"}],"name":"getAccessInfo","outputs":[{"name":"","type":"uint8"},{"name":"","type":"uint8"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"objectTimestamp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"confirmCommit","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"requestNonce","type":"uint256"},{"name":"customValues","type":"bytes32[]"},{"name":"stakeholders","type":"address[]"}],"name":"accessCompleteV3","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"requestNonce","type":"uint256"},{"name":"customValues","type":"bytes32[]"},{"name":"stakeholders","type":"address[]"}],"name":"accessCompleteInternal","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"STATUS_DRAFT","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"status_code","type":"int256"}],"name":"setStatusCode","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"versionAPI","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"clearPending","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"pendingHash","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"indexCategory","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"accessCharge","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"address"}],"name":"hasEditorRight","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newCreator","type":"address"}],"name":"transferCreatorship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"canCommit","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"versionTimestamp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"requestNonce","type":"uint256"},{"name":"contextHash","type":"bytes32"},{"name":"accessor","type":"address"},{"name":"request_timestamp","type":"uint256"}],"name":"accessRequestContext","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"versionHashes","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"accessor","type":"address"},{"name":"customValues","type":"bytes32[]"},{"name":"stakeholders","type":"address[]"}],"name":"getAccessInfoV3","outputs":[{"name":"","type":"uint8"},{"name":"","type":"uint8"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"canEdit","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"status_code","type":"int256"}],"name":"updateStatus","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"reqId","type":"uint256"}],"name":"makeNonce","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"requestID","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"address"}],"name":"hasAccess","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CAN_ACCESS","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_objectHash","type":"string"}],"name":"commit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"level","type":"uint8"},{"name":"pkeRequestor","type":"string"},{"name":"pkeAFGH","type":"string"},{"name":"customValues","type":"bytes32[]"},{"name":"stakeholders","type":"address[]"}],"name":"accessRequest","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"prefix","type":"bytes"}],"name":"getKMSInfo","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_visibility_code","type":"uint8"}],"name":"setVisibility","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"key","type":"bytes"}],"name":"getMeta","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contentSpace","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"libraryAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_requestNonce","type":"uint256"},{"name":"_contextHash","type":"bytes32"},{"name":"_accessor","type":"address"},{"name":"_request_timestamp","type":"uint256"}],"name":"accessCompleteContext","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"accessor","type":"address"},{"name":"customValues","type":"bytes32[]"},{"name":"stakeholders","type":"address[]"}],"name":"getCustomInfo","outputs":[{"name":"","type":"uint8"},{"name":"","type":"uint8"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"updateRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"address_KMS","type":"address"}],"name":"setAddressKMS","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"canPublish","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"STATUS_REVIEW","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"objectHash","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_versionHash","type":"string"}],"name":"deleteVersion","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"setContentContractAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"key","type":"bytes"},{"name":"value","type":"bytes"}],"name":"putMeta","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"CAN_EDIT","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"charge","type":"uint256"}],"name":"setAccessCharge","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"statusDescription","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"content_space","type":"address"},{"name":"lib","type":"address"},{"name":"content_type","type":"address"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"containingLibrary","type":"address"}],"name":"ContentObjectCreate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"contentType","type":"address"},{"indexed":false,"name":"contentContractAddress","type":"address"}],"name":"SetContentType","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestNonce","type":"uint256"},{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"payee","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"LogPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"customValue","type":"bytes32"}],"name":"AccessRequestValue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"stakeholder","type":"address"}],"name":"AccessRequestStakeholder","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"level","type":"uint8"},{"indexed":false,"name":"contentHash","type":"string"},{"indexed":false,"name":"pkeRequestor","type":"string"},{"indexed":false,"name":"pkeAFGH","type":"string"}],"name":"AccessRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"scorePct","type":"uint256"},{"indexed":false,"name":"customContractResult","type":"bool"}],"name":"AccessComplete","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestNonce","type":"uint256"},{"indexed":false,"name":"customContractResult","type":"bool"},{"indexed":false,"name":"parentAddress","type":"address"},{"indexed":false,"name":"contextHash","type":"bytes32"},{"indexed":false,"name":"accessor","type":"address"},{"indexed":false,"name":"request_timestamp","type":"uint256"}],"name":"AccessCompleteV3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"contentContractAddress","type":"address"}],"name":"SetContentContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"accessCharge","type":"uint256"}],"name":"SetAccessCharge","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"accessCharge","type":"uint256"},{"indexed":false,"name":"amountProvided","type":"uint256"}],"name":"InsufficientFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"statusCode","type":"int256"}],"name":"SetStatusCode","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestStatus","type":"bool"},{"indexed":false,"name":"statusCode","type":"int256"},{"indexed":false,"name":"objectHash","type":"string"}],"name":"Publish","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"custom_contract","type":"address"}],"name":"InvokeCustomPreHook","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"custom_contract","type":"address"},{"indexed":false,"name":"result","type":"uint256"}],"name":"ReturnCustomHook","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"custom_contract","type":"address"}],"name":"InvokeCustomPostHook","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"spaceAddress","type":"address"},{"indexed":false,"name":"parentAddress","type":"address"},{"indexed":false,"name":"objectHash","type":"string"}],"name":"CommitPending","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"objectHash","type":"string"}],"name":"UpdateRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"spaceAddress","type":"address"},{"indexed":false,"name":"parentAddress","type":"address"},{"indexed":false,"name":"objectHash","type":"string"}],"name":"VersionConfirm","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"spaceAddress","type":"address"},{"indexed":false,"name":"versionHash","type":"string"},{"indexed":false,"name":"index","type":"int256"}],"name":"VersionDelete","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestNonce","type":"uint256"},{"indexed":false,"name":"parentAddress","type":"address"},{"indexed":false,"name":"contextHash","type":"bytes32"},{"indexed":false,"name":"accessor","type":"address"},{"indexed":false,"name":"requestTimestamp","type":"uint256"}],"name":"AccessRequestV3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"contentSpace","type":"address"},{"indexed":false,"name":"parentAddress","type":"address"},{"indexed":false,"name":"visibility","type":"uint8"}],"name":"VisibilityChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"key","type":"bytes"}],"name":"ObjectMetaChanged","type":"event"}]}; module.exports=contract;