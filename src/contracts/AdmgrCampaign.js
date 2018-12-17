const contract={"abi":[{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"startDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"duration","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint8"},{"name":"","type":"bytes32[]"},{"name":"","type":"address[]"}],"name":"runAccess","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"adAddress","type":"address"},{"name":"budget","type":"uint256"}],"name":"setupAd","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isActive","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"adDataMap","outputs":[{"name":"budget","type":"uint256"},{"name":"paidOut","type":"uint256"},{"name":"status","type":"int8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"proposed_status_code","type":"int256"}],"name":"runStatusChange","outputs":[{"name":"","type":"int256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"percent","type":"uint8"}],"name":"setLibraryRetrocession","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"int256"}],"name":"runDescribeStatus","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"campaignAdsLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"}],"name":"runFinalize","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"newCreator","type":"address"}],"name":"transferCreatorship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"libraryRetrocession","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"runCreate","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"resetStartDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"runKill","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"ndays","type":"uint256"},{"name":"nhours","type":"uint256"},{"name":"nminutes","type":"uint256"},{"name":"nseconds","type":"uint256"}],"name":"setDuration","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"request_ID","type":"uint256"}],"name":"payout","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"delay","type":"uint256"}],"name":"setDelay","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"campaignAds","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint8"},{"name":"","type":"bytes32[]"},{"name":"","type":"address[]"}],"name":"runAccessCharge","outputs":[{"name":"","type":"int256"}],"payable":true,"stateMutability":"payable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"}],"name":"DbgString","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"a","type":"address"}],"name":"DbgAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"u","type":"uint256"}],"name":"DbgUint256","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"u","type":"uint256"}],"name":"DbgUint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"result","type":"uint256"}],"name":"RunCreate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"result","type":"uint256"}],"name":"RunKill","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"proposedStatusCode","type":"int256"},{"indexed":false,"name":"returnStatusCode","type":"int256"}],"name":"RunStatusChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"level","type":"uint8"},{"indexed":false,"name":"calculateAccessCharge","type":"int256"}],"name":"RunAccessCharge","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"result","type":"uint256"}],"name":"RunAccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"result","type":"uint256"}],"name":"RunFinalize","type":"event"}],"bytecode":"60606040526001805442600555600060068190558054600160a060020a033216600160a060020a03199091168117909155600160a860020a0319909116179055610df78061004e6000396000f30060606040526004361061012f5763ffffffff60e060020a60003504166302d05d3f81146101315780630b97bc86146101605780630fb5a6b414610185578063123e0e80146101985780631e1333fb1461022a57806322f3e2d414610260578063309d1e40146102735780633513a805146102bc57806341c0e1b5146102c757806344481439146102da578063450804421461030957806346d5badb1461031f5780636b2d1324146103145780636d2e4b1b1461033257806374cf29c2146103515780637b1cdb3e146103645780638da5cb5b1461036c5780639dfa5d331461037f5780639e99bbea14610364578063c940c6b314610392578063e1152343146103b1578063e177246e146103c7578063f2fde38b146103dd578063f34da3c0146103fc578063f8117ca214610412575b005b341561013c57600080fd5b61014461049e565b604051600160a060020a03909116815260200160405180910390f35b341561016b57600080fd5b6101736104ad565b60405190815260200160405180910390f35b341561019057600080fd5b6101736104b3565b61017360048035906024803560ff1691906064906044359081019083013580602080820201604051908101604052809392919081815260200183836020028082843782019150505050505091908035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437509496506104b995505050505050565b341561023557600080fd5b61024c600160a060020a03600435166024356104c3565b604051901515815260200160405180910390f35b341561026b57600080fd5b61024c6105c4565b341561027e57600080fd5b610292600160a060020a03600435166105f8565b604051808481526020018381526020018260000b60000b8152602001935050505060405180910390f35b61017360043561061d565b34156102d257600080fd5b61012f610620565b34156102e557600080fd5b6102f360ff60043516610664565b60405160ff909116815260200160405180910390f35b341561031457600080fd5b6101736004356106c8565b341561032a57600080fd5b6101736106ce565b341561033d57600080fd5b61012f600160a060020a03600435166106d4565b341561035c57600080fd5b6102f3610733565b610173610754565b341561037757600080fd5b610144610759565b341561038a57600080fd5b610173610768565b341561039d57600080fd5b6101736004356024356044356064356107ab565b34156103bc57600080fd5b61024c600435610801565b34156103d257600080fd5b610173600435610c73565b34156103e857600080fd5b61012f600160a060020a0360043516610cbc565b341561040757600080fd5b610144600435610d36565b6101736004803560ff1690604460248035908101908301358060208082020160405190810160405280939291908181526020018383602002808284378201915050505050509190803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843750949650610d5e95505050505050565b600054600160a060020a031681565b60055481565b60065481565b6000949350505050565b60006104cd610d68565b60015432600160a060020a03908116911614806104f8575060015433600160a060020a039081169116145b151561050357600080fd5b6060604051908101604090815284825260006020808401829052600183850152600160a060020a038816825260029052209091508190815181556020820151816001015560408201516002909101805460009290920b60ff1660ff1990921691909117905550600380546001810161057b8382610d88565b5060009182526020909120018054600160a060020a03861673ffffffffffffffffffffffffffffffffffffffff1990911617905560048054600190810190915591505092915050565b60055460009042908110156105dc57600091506105f4565b60065415806105f15750806006546005540110155b91505b5090565b6002602081905260009182526040822080546001820154919092015491929091900b83565b90565b60015432600160a060020a039081169116148061064b575060015433600160a060020a039081169116145b151561065657600080fd5b600154600160a060020a0316ff5b6000805432600160a060020a0390811691161461068057600080fd5b506001805474ff000000000000000000000000000000000000000019167401000000000000000000000000000000000000000060ff9384168102919091179182905590041690565b50600090565b60045481565b60005432600160a060020a039081169116146106ef57600080fd5b600160a060020a038116151561070457600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60015474010000000000000000000000000000000000000000900460ff1681565b600090565b600154600160a060020a031681565b60015460009032600160a060020a0390811691161480610796575060015433600160a060020a039081169116145b15156107a157600080fd5b5042600581905590565b60015460009032600160a060020a03908116911614806107d9575060015433600160a060020a039081169116145b15156107e457600080fd5b50603c601885028401810283010281016006819055949350505050565b60008060008060008060008060006108176105c4565b151561082257600080fd5b33975087600160a060020a0316630f990f198b60405160e060020a63ffffffff84160281526004810191909152602401602060405180830381600087803b151561086b57600080fd5b5af1151561087857600080fd5b5050506040518051975050600160a060020a038816639980ec868b60405160e060020a63ffffffff84160281526004810191909152602401602060405180830381600087803b15156108c957600080fd5b5af115156108d657600080fd5b50505060405180519050955086945033600160a060020a031685600160a060020a0316632310167f6040518163ffffffff1660e060020a028152600401602060405180830381600087803b151561092c57600080fd5b5af1151561093957600080fd5b50505060405180519050600160a060020a031614151561095857600080fd5b32600160a060020a031688600160a060020a0316637e2745308c60405160e060020a63ffffffff84160281526004810191909152602401602060405180830381600087803b15156109a857600080fd5b5af115156109b557600080fd5b50505060405180519050600160a060020a03161415156109d457600080fd5b600160a060020a0387166000908152600260208190526040822090810154909550810b900b600114610a0557600080fd5b600184015484540386901015610a1a57600080fd5b600180850154600160a060020a0333166000908152600260205260409020908801918101829055541415610a7057600160a060020a033316600090815260026020819052604090912001805460ff191660ff1790555b60015474010000000000000000000000000000000000000000900460ff16606487040292508215610bd25787600160a060020a0316630b7ad54c8b60405160e060020a63ffffffff84160281526004810191909152602401602060405180830381600087803b1515610ae157600080fd5b5af11515610aee57600080fd5b5050506040518051925050600160a060020a03821663b816f5136040518163ffffffff1660e060020a028152600401602060405180830381600087803b1515610b3657600080fd5b5af11515610b4357600080fd5b5050506040518051915050600160a060020a038116638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1515610b8b57600080fd5b5af11515610b9857600080fd5b5050506040518051600160a060020a0316905083156108fc0284604051600060405180830381858888f193505050501515610bd257600080fd5b600160a060020a03321683870380156108fc0290604051600060405180830381858888f193505050501515610c0657600080fd5b87600160a060020a031663ad207e1e8b60405160e060020a63ffffffff84160281526004810191909152602401602060405180830381600087803b1515610c4c57600080fd5b5af11515610c5957600080fd5b50505060405180515060019b9a5050505050505050505050565b60015460009032600160a060020a0390811691161480610ca1575060015433600160a060020a039081169116145b1515610cac57600080fd5b5060058054820190819055919050565b60015432600160a060020a0390811691161480610ce7575060015433600160a060020a039081169116145b1515610cf257600080fd5b600160a060020a0381161515610d0757600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6003805482908110610d4457fe5b600091825260209091200154600160a060020a0316905081565b6000199392505050565b606060405190810160409081526000808352602083018190529082015290565b815481835581811511610dac57600083815260209020610dac918101908301610db1565b505050565b61061d91905b808211156105f45760008155600101610db75600a165627a7a72305820358b47dbcde8979945f69eea020ba0711cbd39e713c71f80c63041d37d13a64a0029"}; module.exports=contract;