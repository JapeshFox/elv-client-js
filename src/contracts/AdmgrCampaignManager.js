const contract={"abi":[{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint8"},{"name":"","type":"bytes32[]"},{"name":"","type":"address[]"}],"name":"runAccess","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"proposed_status_code","type":"int256"}],"name":"runStatusChange","outputs":[{"name":"","type":"int256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"percent","type":"uint8"}],"name":"setLibraryRetrocession","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"int256"}],"name":"runDescribeStatus","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"campaignLibraryAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"}],"name":"runFinalize","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"newCreator","type":"address"}],"name":"transferCreatorship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"libraryRetrocession","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"runCreate","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"campaign_library_address","type":"address"}],"name":"setCampaignLibraryAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"runKill","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"market_place_address","type":"address"}],"name":"setMarketPlaceAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"initializedAsCampaignMgr","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"marketPlaceAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint8"},{"name":"","type":"bytes32[]"},{"name":"","type":"address[]"}],"name":"runAccessCharge","outputs":[{"name":"","type":"int256"}],"payable":true,"stateMutability":"payable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"}],"name":"Log","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"a","type":"address"}],"name":"LogAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"u","type":"uint256"}],"name":"LogUint256","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"b","type":"bytes32"}],"name":"LogBytes32","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"payee","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"LogPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"result","type":"uint256"}],"name":"RunCreate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"result","type":"uint256"}],"name":"RunKill","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"proposedStatusCode","type":"int256"},{"indexed":false,"name":"returnStatusCode","type":"int256"}],"name":"RunStatusChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"level","type":"uint8"},{"indexed":false,"name":"calculateAccessCharge","type":"int256"}],"name":"RunAccessCharge","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"result","type":"uint256"}],"name":"RunAccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"result","type":"uint256"}],"name":"RunFinalize","type":"event"}],"bytecode":"6060604052600180546003805460a060020a60ff021916905560008054600160a060020a033216600160a060020a03199091168117909155600160a860020a031990911617905561189b806100556000396000f3006060604052600436106100ed5763ffffffff60e060020a60003504166302d05d3f81146100ef578063123e0e801461011e5780633513a805146101c257806341c0e1b5146101cd57806344481439146101e0578063450804421461020f5780634edd676b146102255780636b2d13241461021a5780636d2e4b1b1461023857806374cf29c2146102575780637b1cdb3e1461026a5780638597a2a3146102725780638da5cb5b146102915780639e99bbea146102a4578063cc98ef96146102ac578063d7f48c34146102cb578063ed27107b146102f2578063f2fde38b14610305578063f8117ca214610324575b005b34156100fa57600080fd5b6101026103b0565b604051600160a060020a03909116815260200160405180910390f35b6101b060048035906024803560ff1691906064906044359081019083013580602080820201604051908101604052809392919081815260200183836020028082843782019150505050505091908035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437509496506103bf95505050505050565b60405190815260200160405180910390f35b6101b06004356103c9565b34156101d857600080fd5b6100ed6103cc565b34156101eb57600080fd5b6101f960ff60043516610410565b60405160ff909116815260200160405180910390f35b341561021a57600080fd5b6101b0600435610480565b341561023057600080fd5b610102610486565b341561024357600080fd5b6100ed600160a060020a0360043516610495565b341561026257600080fd5b6101f96104f4565b6101b0610504565b341561027d57600080fd5b6100ed600160a060020a036004351661070b565b341561029c57600080fd5b610102610770565b6101b061077f565b34156102b757600080fd5b6100ed600160a060020a0360043516610784565b34156102d657600080fd5b6102de6107ce565b604051901515815260200160405180910390f35b34156102fd57600080fd5b6101026107de565b341561031057600080fd5b6100ed600160a060020a03600435166107ed565b6101b06004803560ff169060446024803590810190830135806020808202016040519081016040528093929190818152602001838360200280828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284375094965061086795505050505050565b600054600160a060020a031681565b6000949350505050565b90565b60015432600160a060020a03908116911614806103f7575060015433600160a060020a039081169116145b151561040257600080fd5b600154600160a060020a0316ff5b60015460009032600160a060020a039081169116148061043e575060015433600160a060020a039081169116145b151561044957600080fd5b506001805474ff0000000000000000000000000000000000000000191660a060020a60ff9384168102919091179182905590041690565b50600090565b600254600160a060020a031681565b60005432600160a060020a039081169116146104b057600080fd5b600160a060020a03811615156104c557600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60015460a060020a900460ff1681565b60035460009081908190819060a060020a900460ff16151561054d576003805474ff0000000000000000000000000000000000000000191660a060020a17905560009350610705565b610555610871565b604051809103906000f080151561056b57600080fd5b925033915081600160a060020a031663e53853038460405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401600060405180830381600087803b15156105be57600080fd5b5af115156105cb57600080fd5b5050600154849250600160a060020a038316915063444814399060a060020a900460ff1660405160e060020a63ffffffff841602815260ff9091166004820152602401602060405180830381600087803b151561062757600080fd5b5af1151561063457600080fd5b50505060405180515050600160a060020a0381166363c77f8f3060405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401600060405180830381600087803b151561068c57600080fd5b5af1151561069957600080fd5b5050600154600160a060020a038084169250636d2e4b1b911660405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401600060405180830381600087803b15156106f057600080fd5b5af115156106fd57600080fd5b505050600093505b50505090565b60015432600160a060020a0390811691161480610736575060015433600160a060020a039081169116145b151561074157600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600154600160a060020a031681565b600090565b60005432600160a060020a0390811691161461079f57600080fd5b6003805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60035460a060020a900460ff1681565b600354600160a060020a031681565b60015432600160a060020a0390811691161480610818575060015433600160a060020a039081169116145b151561082357600080fd5b600160a060020a038116151561083857600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6000199392505050565b604051610fee8061088283390190560060606040526002805460a060020a60ff021916905542600655600060078190558054600160a060020a033216600160a060020a03199182168117909255600180549091169091179055610f97806100576000396000f3006060604052600436106101455763ffffffff60e060020a60003504166302d05d3f81146101475780630b97bc86146101765780630fb5a6b41461019b578063123e0e80146101ae5780631e1333fb1461024057806322f3e2d414610276578063309d1e40146102895780633513a805146102d25780633b917c30146102dd57806341c0e1b5146102f05780634448143914610303578063450804421461033257806346d5badb1461034857806363c77f8f1461035b5780636b2d13241461033d5780636d2e4b1b1461037a57806374cf29c2146103995780637b1cdb3e146103ac5780638da5cb5b146103b45780639dfa5d33146103c75780639e99bbea146103ac578063c940c6b3146103da578063cfefb3d5146103f9578063e177246e1461040f578063f2fde38b14610425578063f34da3c014610444578063f8117ca21461045a575b005b341561015257600080fd5b61015a6104e6565b604051600160a060020a03909116815260200160405180910390f35b341561018157600080fd5b6101896104f5565b60405190815260200160405180910390f35b34156101a657600080fd5b6101896104fb565b61018960048035906024803560ff16919060649060443590810190830135806020808202016040519081016040528093929190818152602001838360200280828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284375094965061050195505050505050565b341561024b57600080fd5b610262600160a060020a036004351660243561050b565b604051901515815260200160405180910390f35b341561028157600080fd5b61026261063a565b341561029457600080fd5b6102a8600160a060020a036004351661066e565b604051808481526020018381526020018260000b60000b8152602001935050505060405180910390f35b61018960043561068f565b34156102e857600080fd5b61015a610692565b34156102fb57600080fd5b6101456106a1565b341561030e57600080fd5b61031c60ff600435166106e5565b60405160ff909116815260200160405180910390f35b341561033d57600080fd5b610189600435610749565b341561035357600080fd5b61018961074f565b341561036657600080fd5b610145600160a060020a0360043516610755565b341561038557600080fd5b610145600160a060020a036004351661079f565b34156103a457600080fd5b61031c6107fe565b61018961081f565b34156103bf57600080fd5b61015a610824565b34156103d257600080fd5b610189610833565b34156103e557600080fd5b610189600435602435604435606435610876565b341561040457600080fd5b6102626004356108cc565b341561041a57600080fd5b610189600435610e13565b341561043057600080fd5b610145600160a060020a0360043516610e5c565b341561044f57600080fd5b61015a600435610ed6565b6101896004803560ff1690604460248035908101908301358060208082020160405190810160405280939291908181526020018383602002808284378201915050505050509190803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843750949650610efe95505050505050565b600054600160a060020a031681565b60065481565b60075481565b6000949350505050565b6000610515610f08565b60015460009032600160a060020a0390811691161480610543575060015433600160a060020a039081169116145b151561054e57600080fd5b6060604051908101604090815285825260006020808401829052600183850152600160a060020a0389168252600390529081206002810154929450925090810b900b15156105e45760048054600181016105a88382610f28565b506000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0387161790556005805460010190555b600160a060020a03851660009081526003602052604090208290815181556020820151816001015560408201516002909101805460009290920b60ff1660ff199092169190911790555060019250505092915050565b6006546000904290811015610652576000915061066a565b60075415806106675750806007546006540110155b91505b5090565b60036020526000908152604081208054600182015460029092015490920b83565b90565b600254600160a060020a031681565b60015432600160a060020a03908116911614806106cc575060015433600160a060020a039081169116145b15156106d757600080fd5b600154600160a060020a0316ff5b6000805432600160a060020a0390811691161461070157600080fd5b506002805474ff000000000000000000000000000000000000000019167401000000000000000000000000000000000000000060ff9384168102919091179182905590041690565b50600090565b60055481565b60005432600160a060020a0390811691161461077057600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60005432600160a060020a039081169116146107ba57600080fd5b600160a060020a03811615156107cf57600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60025474010000000000000000000000000000000000000000900460ff1681565b600090565b600154600160a060020a031681565b60015460009032600160a060020a0390811691161480610861575060015433600160a060020a039081169116145b151561086c57600080fd5b5042600681905590565b60015460009032600160a060020a03908116911614806108a4575060015433600160a060020a039081169116145b15156108af57600080fd5b50603c601885028401810283010281016007819055949350505050565b60003381808080808080600160a060020a038816630e0a0d748b60405160e060020a63ffffffff84160281526004810191909152602401602060405180830381600087803b151561091c57600080fd5b5af1151561092957600080fd5b5050506040518051975050600160a060020a03881663989800818b60405160e060020a63ffffffff84160281526004810191909152602401602060405180830381600087803b151561097a57600080fd5b5af1151561098757600080fd5b50505060405180519050955085945033600160a060020a031685600160a060020a0316632310167f6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15156109dd57600080fd5b5af115156109ea57600080fd5b50505060405180519050600160a060020a0316141515610a0957600080fd5b32600160a060020a031688600160a060020a0316637afc54d48c60405160e060020a63ffffffff84160281526004810191909152602401602060405180830381600087803b1515610a5957600080fd5b5af11515610a6657600080fd5b50505060405180519050600160a060020a0316141515610a8557600080fd5b600160a060020a03861660009081526003602052604081206002810154909550810b900b600114610ab557600080fd5b600184015484540387901015610aca57600080fd5b600180850154600160a060020a0388166000908152600360205260409020908901910181905584541415610b1f57600160a060020a0386166000908152600360205260409020600201805460ff191660ff1790555b60025474010000000000000000000000000000000000000000900460ff16606488040292508215610d515787600160a060020a0316635cc150018b60405160e060020a63ffffffff84160281526004810191909152602401602060405180830381600087803b1515610b9057600080fd5b5af11515610b9d57600080fd5b5050506040518051925050600160a060020a03821663b816f5136040518163ffffffff1660e060020a028152600401602060405180830381600087803b1515610be557600080fd5b5af11515610bf257600080fd5b5050506040518051915050600160a060020a038116638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1515610c3a57600080fd5b5af11515610c4757600080fd5b5050506040518051600160a060020a0316905083156108fc0284604051600060405180830381858888f193505050501515610c8157600080fd5b7f6a0f12fe24f7c34df8acc096f076bac6e3f1ff225f4fccc7b0f389657bde895a81600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1515610cdf57600080fd5b5af11515610cec57600080fd5b5050506040518051905084604051600160a060020a0390921660208301526040808301919091526060808352600c908301527f526574726f63657373696f6e0000000000000000000000000000000000000000608083015260a0909101905180910390a15b600160a060020a03321683880380156108fc0290604051600060405180830381858888f193505050501515610d8557600080fd5b7f6a0f12fe24f7c34df8acc096f076bac6e3f1ff225f4fccc7b0f389657bde895a32848903604051600160a060020a03909216602083015260408083019190915260608083526007908301527f526f79616c747900000000000000000000000000000000000000000000000000608083015260a0909101905180910390a15060019998505050505050505050565b60015460009032600160a060020a0390811691161480610e41575060015433600160a060020a039081169116145b1515610e4c57600080fd5b5060068054820190819055919050565b60015432600160a060020a0390811691161480610e87575060015433600160a060020a039081169116145b1515610e9257600080fd5b600160a060020a0381161515610ea757600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6004805482908110610ee457fe5b600091825260209091200154600160a060020a0316905081565b6000199392505050565b606060405190810160409081526000808352602083018190529082015290565b815481835581811511610f4c57600083815260209020610f4c918101908301610f51565b505050565b61068f91905b8082111561066a5760008155600101610f575600a165627a7a723058202fd6bbacf63cb07c95c6d241a54315e98f94857fb60b25758cf59dffed2816520029a165627a7a723058204e4d3154a0b742bc69f4cb5e881595cdac44e02bc381e4e0f32efb480dc853a70029"}; module.exports=contract;