const contract={"abi":[{"constant":true,"inputs":[],"name":"STATUS_PUBLISHED","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"publish","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"requestMap","outputs":[{"name":"originator","type":"address"},{"name":"amountPaid","type":"uint256"},{"name":"status","type":"int8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contentContractAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"statusCode","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"addressKMS","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contentType","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"status_code","type":"int256"}],"name":"statusCodeDescription","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"STATUS_DRAFT","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"status_code","type":"int256"}],"name":"setStatusCode","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"request_ID","type":"uint256"},{"name":"score_pct","type":"uint256"},{"name":"ml_out_hash","type":"bytes32"}],"name":"accessComplete","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"accessCharge","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newCreator","type":"address"}],"name":"transferCreatorship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"status_code","type":"int256"}],"name":"updateStatus","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"level","type":"uint8"},{"name":"custom_values","type":"bytes32[]"},{"name":"stakeholders","type":"address[]"}],"name":"getAccessCharge","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"requestID","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"level","type":"uint8"},{"name":"pke_requestor","type":"string"},{"name":"pke_AFGH","type":"string"},{"name":"custom_values","type":"bytes32[]"},{"name":"stakeholders","type":"address[]"}],"name":"accessRequest","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"libraryAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"updateRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"address_KMS","type":"address"}],"name":"setAddressKMS","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"STATUS_REVIEW","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"objectHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"setContentContractAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"request_ID","type":"uint256"},{"name":"access_granted","type":"bool"},{"name":"re_key","type":"string"},{"name":"encrypted_AES_key","type":"string"}],"name":"accessGrant","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"object_hash","type":"bytes32"}],"name":"commit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"charge","type":"uint256"}],"name":"setAccessCharge","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"statusDescription","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"content_type","type":"address"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"containingLibrary","type":"address"}],"name":"ContentObjectCreate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"contentType","type":"address"},{"indexed":false,"name":"contentContractAddress","type":"address"}],"name":"SetContentType","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"level","type":"uint8"},{"indexed":false,"name":"contentHash","type":"bytes32"},{"indexed":false,"name":"pkeRequestor","type":"string"},{"indexed":false,"name":"pkeAFGH","type":"string"}],"name":"AccessRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"access_granted","type":"bool"},{"indexed":false,"name":"reKey","type":"string"},{"indexed":false,"name":"encryptedAESKey","type":"string"}],"name":"AccessGrant","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"customValue","type":"bytes32"}],"name":"AccessRequestValue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"stakeholder","type":"address"}],"name":"AccessRequestStakeholder","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"scorePct","type":"uint256"},{"indexed":false,"name":"mlOutHash","type":"bytes32"},{"indexed":false,"name":"customContractResult","type":"bool"}],"name":"AccessComplete","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"contentContractAddress","type":"address"}],"name":"SetContentContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"accessCharge","type":"uint256"}],"name":"SetAccessCharge","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"level","type":"uint8"},{"indexed":false,"name":"accessCharge","type":"uint256"}],"name":"GetAccessCharge","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"accessCharge","type":"uint256"},{"indexed":false,"name":"amountProvided","type":"uint256"}],"name":"InsufficientFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"statusCode","type":"int256"}],"name":"SetStatusCode","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestStatus","type":"bool"},{"indexed":false,"name":"statusCode","type":"int256"},{"indexed":false,"name":"objectHash","type":"bytes32"}],"name":"Publish","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"custom_contract","type":"address"}],"name":"InvokeCustomPreHook","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"custom_contract","type":"address"},{"indexed":false,"name":"result","type":"uint256"}],"name":"ReturnCustomHook","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"custom_contract","type":"address"}],"name":"InvokeCustomPostHook","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"objectHash","type":"bytes32"}],"name":"Commit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"objectHash","type":"bytes32"}],"name":"UpdateRequest","type":"event"}],"bytecode":"6060604052604051602080611c658339810160405280805160008054600160a060020a03328116600160a060020a0319928316811784556001805484169091179055600680543383169084161790819055600019600855600993909355600380548286169316929092179091559193507fc3decc188980e855666b70498ca85e8fa284d97d30483d828fa126f7303d7d19925016604051600160a060020a03909116815260200160405180910390a150611ba7806100be6000396000f3006060604052600436106101705763ffffffff60e060020a60003504166217de98811461017257806302d05d3f14610197578063075d4782146101c65780631a735f18146101e25780632310167f1461023457806327c1c21d1461024757806332eaf21b1461025a57806336ebffca1461026d578063388642841461028057806341c0e1b5146102965780634dd70788146102a95780635267db44146102bc5780635cc4aa9b146102d257806364ade32b146102e35780636d2e4b1b146102f65780638280dd8f14610315578063879fe48f1461032b5780638da5cb5b146103c25780638f779201146103d5578063a1ff106e146103e8578063b816f513146104f8578063c287e0ed1461050b578063c9e8e72d1461051e578063d810f8c81461053d578063e02dd9c214610550578063e538530314610563578063ee56d76714610582578063f14fcbc814610622578063f2fde38b14610638578063f4d9bae814610657578063f81ab0ae1461066d575b005b341561017d57600080fd5b610185610680565b60405190815260200160405180910390f35b34156101a257600080fd5b6101aa6106a4565b604051600160a060020a03909116815260200160405180910390f35b6101ce6106b3565b604051901515815260200160405180910390f35b34156101ed57600080fd5b6101f86004356107b7565b6040518084600160a060020a0316600160a060020a031681526020018381526020018260000b60000b8152602001935050505060405180910390f35b341561023f57600080fd5b6101aa6107e2565b341561025257600080fd5b6101856107f1565b341561026557600080fd5b6101aa6107f7565b341561027857600080fd5b6101aa610806565b341561028b57600080fd5b610185600435610815565b34156102a157600080fd5b610170610932565b34156102b457600080fd5b6101856109e9565b34156102c757600080fd5b610185600435610a0d565b6101ce600435602435604435610aaa565b34156102ee57600080fd5b610185610c4b565b341561030157600080fd5b610170600160a060020a0360043516610c51565b341561032057600080fd5b610185600435610cb0565b341561033657600080fd5b6101856004803560ff1690604460248035908101908301358060208082020160405190810160405280939291908181526020018383602002808284378201915050505050509190803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843750949650610e3c95505050505050565b34156103cd57600080fd5b6101aa610fb3565b34156103e057600080fd5b610185610fc2565b6101ce6004803560ff169060446024803590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509190803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843750949650610fc895505050505050565b341561050357600080fd5b6101aa61146b565b341561051657600080fd5b61017061147a565b341561052957600080fd5b610170600160a060020a03600435166114e7565b341561054857600080fd5b61018561154c565b341561055b57600080fd5b610185611570565b341561056e57600080fd5b610170600160a060020a0360043516611576565b341561058d57600080fd5b6101ce6004803590602480351515919060649060443590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052818152929190602084018383808284375094965061170b95505050505050565b341561062d57600080fd5b6101706004356119a1565b341561064357600080fd5b610170600160a060020a0360043516611a12565b341561066257600080fd5b610185600435611a8c565b341561067857600080fd5b610185611b05565b7f5075626c6973686564000000000000000000000000000000000000000000000081565b600054600160a060020a031681565b6001546000908190819032600160a060020a03908116911614806106e5575060015433600160a060020a039081169116145b15156106f057600080fd5b6106fa6001610cb0565b5060009150600060085413156107645750600654600160a060020a0316806349102e616040518163ffffffff1660e060020a028152600401602060405180830381600087803b151561074b57600080fd5b5af1151561075857600080fd5b50505060405180519250505b7f901e6f3cdc4c61620d5d424116934b9af6e31ba79cdeaa349336d93ecfe846d482600854600254604051921515835260208301919091526040808301919091526060909101905180910390a150919050565b600a60205260009081526040812080546001820154600290920154600160a060020a03909116920b83565b600554600160a060020a031681565b60085481565b600454600160a060020a031681565b600354600160a060020a031681565b60055460009081908190600160a060020a0316156108905750600554600160a060020a03168063450804428560405160e060020a63ffffffff84160281526004810191909152602401602060405180830381600087803b151561087757600080fd5b5af1151561088457600080fd5b50505060405180519250505b811561089e5781925061092b565b8315156108cd577f5075626c69736865640000000000000000000000000000000000000000000000925061092b565b60008412156108fe577f4472616674000000000000000000000000000000000000000000000000000000925061092b565b600084131561092b577f447261667420696e20726576696577000000000000000000000000000000000092505b5050919050565b60015460009032600160a060020a0390811691161480610960575060015433600160a060020a039081169116145b151561096b57600080fd5b600554600160a060020a0316156109de5750600554600160a060020a031680639e99bbea6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15156109bd57600080fd5b5af115156109ca57600080fd5b50505060405180511590506109de57600080fd5b6109e6611b17565b50565b7f447261667400000000000000000000000000000000000000000000000000000081565b60015460009032600160a060020a039081169116148015610a4557506000821280610a455750600082138015610a4557506000600854125b15610a505760088290555b60065433600160a060020a0390811691161415610a6d5760088290555b7fda4f34b30fa0ba8a73fedb922f4d28e2a10a5d68e53cf8e942abce3ac09158a260085460405190815260200160405180910390a1505060085490565b6000838152600a60205260408120805482908190600160a060020a031615801590610ae25750825433600160a060020a039081169116145b1515610aed57600080fd5b60055460019250600160a060020a031615610b665750600554600160a060020a031680636b2d13248860405160e060020a63ffffffff84160281526004810191909152602401602060405180830381600087803b1515610b4c57600080fd5b5af11515610b5957600080fd5b5050506040518051159250505b6002830154600090810b900b1515610baf5733600160a060020a03166108fc84600101549081150290604051600060405180830381858888f193505050501515610baf57600080fd5b6000878152600a6020526040808220805473ffffffffffffffffffffffffffffffffffffffff1916815560018101929092556002909101805460ff191690557f7f1f4b28434ce7beab4983e64a8b5bb96e195a67029fdaff925028aec57fbc6b90889088908890869051938452602084019290925260408084019190915290151560608301526080909101905180910390a15095945050505050565b60075481565b60005432600160a060020a03908116911614610c6c57600080fd5b600160a060020a0381161515610c8157600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6001546000908190819032600160a060020a0390811691161480610ce2575060015433600160a060020a039081169116145b80610cfb575060065433600160a060020a039081169116145b1515610d0657600080fd5b600554600160a060020a03161515610d965760015432600160a060020a0390811691161480610d43575060015433600160a060020a039081169116145b8015610d5a5750836000191480610d5a5750836001145b15610d6757839150610d91565b60065433600160a060020a039081169116148015610d885750600060085412155b15610d91578391505b610df9565b50600554600160a060020a031680633513a8058560405160e060020a63ffffffff84160281526004810191909152602401602060405180830381600087803b1515610de057600080fd5b5af11515610ded57600080fd5b50505060405180519250505b60088290557fda4f34b30fa0ba8a73fedb922f4d28e2a10a5d68e53cf8e942abce3ac09158a28260405190815260200160405180910390a1505060085492915050565b6007546005546000919082908190600160a060020a031615610f6a57600554600160a060020a031691508163f8117ca28888886040518463ffffffff1660e060020a028152600401808460ff1660ff1681526020018060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610ed1578082015183820152602001610eb9565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610f10578082015183820152602001610ef8565b5050505090500195505050505050602060405180830381600087803b1515610f3757600080fd5b5af11515610f4457600080fd5b505050604051805191505060008112610f5b578092505b600754831115610f6a57600080fd5b7fa58326ee5bb617cb8b4f0d0f5f557c469d2d05d7a738f777037deda9c724b370878460405160ff909216825260208201526040908101905180910390a1509095945050505050565b600154600160a060020a031681565b60095481565b6000806000610fd5611b5b565b600980546001019055600654600160a060020a0316925060008080856395a078e83260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561103557600080fd5b5af1151561104257600080fd5b50505060405180519050151561105757600080fd5b60015432600160a060020a03908116911614611088576110788c8a8a610e3c565b9450348590101561108857600080fd5b60606040519081016040908152600160a060020a03331682523460208084019190915260008284018190526009548152600a9091522090945084908151815473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03919091161781556020820151816001015560408201516002909101805460009290920b60ff1660ff1990921691909117905550600554600160a060020a03161561123a57600554600954600160a060020a039091169350839063123e0e80908e8c8c6040518563ffffffff1660e060020a028152600401808581526020018460ff1660ff1681526020018060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156111b0578082015183820152602001611198565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156111ef5780820151838201526020016111d7565b505050509050019650505050505050602060405180830381600087803b151561121757600080fd5b5af1151561122457600080fd5b5050506040518051925050811561123a57600080fd5b7f089a6f1788a3c353423e1be4ba12533bdde7d908bb41abeee185af0acb3df5626009548d6002548e8e60405185815260ff851660208201526040810184905260a060608201818152906080830190830185818151815260200191508051906020019080838360005b838110156112bb5780820151838201526020016112a3565b50505050905090810190601f1680156112e85780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561131e578082015183820152602001611306565b50505050905090810190601f16801561134b5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390a15060005b88518110156113d65788818151811061137657fe5b90602001906020020151156113ce577f515e0a48b385fce2a8e4d9f169a97c4f6ea669a752358f5e6ab37cc3c2e84c388982815181106113b257fe5b9060200190602002015160405190815260200160405180910390a15b600101611361565b5060005b8751811015611459578881815181106113ef57fe5b9060200190602002015115611451577fb6e3239e521a6c66920ae634f8e921a37e6991d520ac44d52f8516397f41b68488828151811061142b57fe5b90602001906020020151604051600160a060020a03909116815260200160405180910390a15b6001016113da565b5060019b9a5050505050505050505050565b600654600160a060020a031681565b60015432600160a060020a03908116911614806114a5575060015433600160a060020a039081169116145b15156114b057600080fd5b7f1b6452b35fd3ee7f1fad8558a9d3e79233f94d15fe657df3871f8efc2f97ef1960025460405190815260200160405180910390a1565b60015432600160a060020a0390811691161480611512575060015433600160a060020a039081169116145b151561151d57600080fd5b6004805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b7f447261667420696e20726576696577000000000000000000000000000000000081565b60025481565b6001546000908190819032600160a060020a03908116911614806115a8575060015433600160a060020a039081169116145b15156115b357600080fd5b600554600160a060020a03161561162957600554600160a060020a0316925082639e99bbea6040518163ffffffff1660e060020a028152600401602060405180830381600087803b151561160657600080fd5b5af1151561161357600080fd5b5050506040518051925050811561162957600080fd5b6005805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a038616908117909155156116bc5783925082600160a060020a0316637b1cdb3e6040518163ffffffff1660e060020a028152600401602060405180830381600087803b151561169957600080fd5b5af115156116a657600080fd5b505050604051805191505080156116bc57600080fd5b6005547fa6f2e38f0cfebf27212317fced3ac40bc62e00bd33f38d69603710740c69acb790600160a060020a0316604051600160a060020a03909116815260200160405180910390a150505050565b600154600090819033600160a060020a039081169116148061173b575060045433600160a060020a039081169116145b151561174657600080fd5b506000858152600a602052604090208054600160a060020a0316151561176b57600080fd5b6002810154600090810b900b1515611995578415156118315780546001820154600160a060020a039091169080156108fc0290604051600060405180830381858888f1935050505015156117be57600080fd5b60028101805460ff191660ff1790557f475e9d68ca61f129cebee5af694af00ed0e3b3b0d4b74071fbb81d0e2b9127188660006040519182521515602082015260806040808301829052600091830182905260c060608401819052830191909152610100909101905180910390a1611995565b6001805490820154600160a060020a039091169080156108fc0290604051600060405180830381858888f19350505050151561186c57600080fd5b60028101805460ff191660019081179091557f475e9d68ca61f129cebee5af694af00ed0e3b3b0d4b74071fbb81d0e2b91271890879086866040518481528315156020820152608060408201818152906060830190830185818151815260200191508051906020019080838360005b838110156118f35780820151838201526020016118db565b50505050905090810190601f1680156119205780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561195657808201518382015260200161193e565b50505050905090810190601f1680156119835780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a15b50600195945050505050565b60015432600160a060020a03908116911614806119cc575060015433600160a060020a039081169116145b15156119d757600080fd5b60028190557f9e8a51bb6b34b9d5d18c14fd753ee3bf44e2256512665a4577281ffcc91943ff8160405190815260200160405180910390a150565b60015432600160a060020a0390811691161480611a3d575060015433600160a060020a039081169116145b1515611a4857600080fd5b600160a060020a0381161515611a5d57600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60015460009032600160a060020a0390811691161480611aba575060015433600160a060020a039081169116145b1515611ac557600080fd5b60078290557f4114f8ef80b6de2161db580cbefa14e1892d15d3ebe2062c9914e4a5773114a38260405190815260200160405180910390a1505060075490565b6000611b12600854610815565b905090565b60015432600160a060020a0390811691161480611b42575060015433600160a060020a039081169116145b1515611b4d57600080fd5b600154600160a060020a0316ff5b6060604051908101604090815260008083526020830181905290820152905600a165627a7a723058205b935fd089f45337acd61a59747d7e4f09264773790e695bcdd1767ccbf37c420029"}; module.exports=contract;