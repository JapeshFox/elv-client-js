const contract={"abi":[{"constant":false,"inputs":[{"name":"content","type":"address"},{"name":"accessor","type":"address"}],"name":"setAccessorGroup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"level","type":"uint8"},{"name":"","type":"bytes32[]"},{"name":"","type":"address[]"}],"name":"runAccessInfo","outputs":[{"name":"","type":"uint8"},{"name":"","type":"uint8"},{"name":"","type":"uint8"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"validateAvailability","outputs":[],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"},{"name":"level","type":"uint8"},{"name":"","type":"bytes32[]"},{"name":"","type":"address[]"}],"name":"runAccess","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"content","type":"address"},{"name":"accessor","type":"address"}],"name":"hasAccess","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"runFinalize","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"proposed_status_code","type":"int256"}],"name":"runStatusChange","outputs":[{"name":"","type":"int256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"int256"}],"name":"runDescribeStatus","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DEFAULT_ACCESS","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newCreator","type":"address"}],"name":"transferCreatorship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"runCreate","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"accessors","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"content","type":"address"},{"name":"accessor","type":"address"}],"name":"isAvailable","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"runKill","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"content","type":"address"},{"name":"sd","type":"bool"},{"name":"hd","type":"bool"},{"name":"start","type":"uint256"},{"name":"end","type":"uint256"},{"name":"region","type":"address"}],"name":"setAvailability","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"availability","outputs":[{"name":"clearedSD","type":"bool"},{"name":"clearedHD","type":"bool"},{"name":"startDate","type":"uint256"},{"name":"endDate","type":"uint256"},{"name":"region","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contentSpace","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DEFAULT_SEE","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"bool"}],"name":"runGrant","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"DEFAULT_CHARGE","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"}],"name":"Log","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"b","type":"bool"}],"name":"LogBool","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"a","type":"address"}],"name":"LogAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"u","type":"uint256"}],"name":"LogUint256","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"u","type":"int256"}],"name":"LogInt256","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"b","type":"bytes32"}],"name":"LogBytes32","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"payee","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"LogPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"result","type":"uint256"}],"name":"RunCreate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"result","type":"uint256"}],"name":"RunKill","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"proposedStatusCode","type":"int256"},{"indexed":false,"name":"returnStatusCode","type":"int256"}],"name":"RunStatusChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"level","type":"uint8"},{"indexed":false,"name":"calculateAccessCharge","type":"int256"}],"name":"RunAccessCharge","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"result","type":"uint256"}],"name":"RunAccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"result","type":"uint256"}],"name":"RunFinalize","type":"event"}],"bytecode":"60806040527f4f776e61626c6532303139303532383139333830304d4c0000000000000000006000557f436f6e74656e7432303139303531303135313630304d4c0000000000000000006004557f41766c44656c697665727932303139303531303135323530304d4c000000000060055560018054600160a060020a031990811632908117909255600280549091169091179055610bc2806100a26000396000f30060806040526004361061012f5763ffffffff60e060020a60003504166301bd8ca3811461013157806302d05d3f146101585780630f82c16f14610189578063112d0d321461024e578063123e0e80146102635780631709ef0714610302578063176859531461033d5780633513a8051461034b57806341c0e1b514610356578063450804421461036b57806354fd4d50146103835780636af27417146103985780636d2e4b1b146103c35780637b1cdb3e146103e45780638579a492146103ec5780638da5cb5b1461040d57806391357d4b146104225780639e99bbea146103e4578063a7b4a4df14610449578063ab3a742514610484578063af570c04146104db578063b535b03e146104f0578063e870ed9114610505578063f185db0c14610515578063f2fde38b1461052a575b005b34801561013d57600080fd5b5061012f600160a060020a036004358116906024351661054b565b34801561016457600080fd5b5061016d61060a565b60408051600160a060020a039092168252519081900360200190f35b34801561019557600080fd5b5060408051602060046024803582810135848102808701860190975280865261021f96843560ff1696369660449591949091019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506106199650505050505050565b6040805160ff958616815293851660208501529190931682820152606082019290925290519081900360800190f35b34801561025a57600080fd5b5061012f61069d565b60408051602060046044358181013583810280860185019096528085526102f0958335956024803560ff1696369695606495939492019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506106cb9650505050505050565b60408051918252519081900360200190f35b34801561030e57600080fd5b50610329600160a060020a03600435811690602435166106e9565b604080519115158252519081900360200190f35b6102f06004356024356107b4565b6102f06004356107bc565b34801561036257600080fd5b5061012f6107bf565b34801561037757600080fd5b506102f06004356107fb565b34801561038f57600080fd5b506102f0610801565b3480156103a457600080fd5b506103ad610807565b6040805160ff9092168252519081900360200190f35b3480156103cf57600080fd5b5061012f600160a060020a036004351661080c565b6102f0610867565b3480156103f857600080fd5b5061016d600160a060020a036004351661086c565b34801561041957600080fd5b5061016d610887565b34801561042e57600080fd5b506103ad600160a060020a0360043581169060243516610896565b34801561045557600080fd5b5061012f600160a060020a03600435811690602435151590604435151590606435906084359060a43516610999565b34801561049057600080fd5b506104a5600160a060020a0360043516610ad0565b6040805195151586529315156020860152848401929092526060840152600160a060020a03166080830152519081900360a00190f35b3480156104e757600080fd5b5061016d610b0b565b3480156104fc57600080fd5b506103ad610b1a565b6102f060043560243515156107b4565b34801561052157600080fd5b506103ad610b1f565b34801561053657600080fd5b5061012f600160a060020a0360043516610b24565b600082905080600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561058e57600080fd5b505af11580156105a2573d6000803e3d6000fd5b505050506040513d60208110156105b857600080fd5b5051600160a060020a031632146105ce57600080fd5b50600160a060020a039182166000908152600660205260409020805473ffffffffffffffffffffffffffffffffffffffff191691909216179055565b600154600160a060020a031681565b60008080808060ff8816151561065d5761063333326106e9565b1561064a5760009450849350839250829150610693565b6000945060649350849250829150610693565b6106673332610896565b905060ff8116156106845760009450925083915081905082610693565b60039450600093508392508291505b5093509350935093565b6106a733326106e9565b15156106b257600080fd5b6106bc3332610896565b60ff16156106c957600080fd5b565b600060ff8416156106de576106de61069d565b506000949350505050565b600160a060020a038083166000908152600660205260408120549091168181151561071757600192506107ac565b50604080517f95a078e8000000000000000000000000000000000000000000000000000000008152600160a060020a038581166004830152915183928316916395a078e89160248083019260209291908290030181600087803b15801561077d57600080fd5b505af1158015610791573d6000803e3d6000fd5b505050506040513d60208110156107a757600080fd5b505192505b505092915050565b600092915050565b90565b600254600160a060020a03163214806107e25750600254600160a060020a031633145b15156107ed57600080fd5b600254600160a060020a0316ff5b50600090565b60055481565b600281565b600154600160a060020a0316321461082357600080fd5b600160a060020a038116151561083857600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600090565b600660205260009081526040902054600160a060020a031681565b600254600160a060020a031681565b600160a060020a0380831660009081526007602052604081206003810154919283921682811561095d5750604080517f95a078e8000000000000000000000000000000000000000000000000000000008152600160a060020a038781166004830152915183928316916395a078e89160248083019260209291908290030181600087803b15801561092657600080fd5b505af115801561093a573d6000803e3d6000fd5b505050506040513d602081101561095057600080fd5b5051151561095d57600a93505b428360010154111561096e57601493505b6002830154158015906109845750428360020154105b1561098e57601e93505b509195945050505050565b60008087915081600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156109dd57600080fd5b505af11580156109f1573d6000803e3d6000fd5b505050506040513d6020811015610a0757600080fd5b5051600160a060020a03163214610a1d57600080fd5b5083801515610a295750425b6040805160a0810182529715158852951515602080890191825288880192835260608901958652600160a060020a0394851660808a01908152998516600090815260079091529690962096518754965160ff199097169015151761ff0019166101009615159690960295909517865550925160018501555160028401555091516003909101805473ffffffffffffffffffffffffffffffffffffffff191691909216179055565b600760205260009081526040902080546001820154600283015460039093015460ff80841694610100909404169290600160a060020a031685565b600354600160a060020a031681565b600181565b600481565b600254600160a060020a0316321480610b475750600254600160a060020a031633145b1515610b5257600080fd5b600160a060020a0381161515610b6757600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820e7a04f8e7ab025786ae84fe32eb40eab150986e52f7368da8a0ef5f2a058cd870029"}; module.exports=contract;