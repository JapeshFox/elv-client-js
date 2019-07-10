const contract={"abi":[{"constant":false,"inputs":[],"name":"parentAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"stakeholder","type":"address"},{"name":"access_type","type":"uint8"},{"name":"access","type":"uint8"}],"name":"setRights","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"canConfirm","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"group","type":"address"},{"name":"access_type","type":"uint8"},{"name":"access","type":"uint8"}],"name":"setGroupRights","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"countVersionHashes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"confirmCommit","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingHash","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newCreator","type":"address"}],"name":"transferCreatorship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"canCommit","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"versionHashes","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_objectHash","type":"string"}],"name":"commit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"contentSpace","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"updateRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"objectHash","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_versionHash","type":"string"}],"name":"deleteVersion","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"accessRequest","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"content_space","type":"address"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"spaceAddress","type":"address"},{"indexed":false,"name":"parentAddress","type":"address"},{"indexed":false,"name":"objectHash","type":"string"}],"name":"CommitPending","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"objectHash","type":"string"}],"name":"UpdateRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"objectHash","type":"string"}],"name":"VersionConfirm","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"versionHash","type":"string"},{"indexed":false,"name":"index","type":"int256"}],"name":"VersionDelete","type":"event"},{"anonymous":false,"inputs":[],"name":"AccessRequest","type":"event"}],"bytecode":"608060408190527f41636365737369626c6532303139303232323133353930304d4c0000000000006000557f4f776e61626c6532303139303532383139333830304d4c0000000000000000006001557f4564697461626c653230313930363037313035363030504f00000000000000006005557f42617365436f6e74656e745479706532303139303630353135303130304d4c0060095560208061142483398101604052516002805432600160a060020a0319918216811790925560038054821690921790915560048054909116600160a060020a03909216919091179055611337806100ed6000396000f3006080604052600436106101025763ffffffff60e060020a600035041662821de3811461010457806302d05d3f146101355780630fe1b5a21461014a57806314cfabb31461017757806322e564eb146101a0578063331b86c0146101cd57806341c0e1b5146101f4578063446e88261461020957806354fd4d5014610211578063628449fd146102265780636d2e4b1b146102b05780636e375427146102d15780637ca8f618146102e65780638da5cb5b146102fe5780639867db7414610313578063af570c041461036c578063c287e0ed14610381578063e02dd9c214610396578063e1a70717146103ab578063f155188714610404578063f2fde38b14610419575b005b34801561011057600080fd5b5061011961043a565b60408051600160a060020a039092168252519081900360200190f35b34801561014157600080fd5b5061011961044a565b34801561015657600080fd5b50610102600160a060020a036004351660ff60243581169060443516610459565b34801561018357600080fd5b5061018c610529565b604080519115158252519081900360200190f35b3480156101ac57600080fd5b50610102600160a060020a036004351660ff602435811690604435166105c8565b3480156101d957600080fd5b506101e261065a565b60408051918252519081900360200190f35b34801561020057600080fd5b50610102610660565b61018c61069c565b34801561021d57600080fd5b506101e261081d565b34801561023257600080fd5b5061023b610823565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561027557818101518382015260200161025d565b50505050905090810190601f1680156102a25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102bc57600080fd5b50610102600160a060020a03600435166108b1565b3480156102dd57600080fd5b5061018c61090c565b3480156102f257600080fd5b5061023b600435610aae565b34801561030a57600080fd5b50610119610b22565b34801561031f57600080fd5b506040805160206004803580820135601f8101849004840285018401909552848452610102943694929360249392840191908190840183828082843750949750610b319650505050505050565b34801561037857600080fd5b50610119610c41565b34801561038d57600080fd5b50610102610c50565b3480156103a257600080fd5b5061023b610d26565b3480156103b757600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526101e2943694929360249392840191908190840183828082843750949750610d819650505050505050565b34801561041057600080fd5b5061018c6110cc565b34801561042557600080fd5b50610102600160a060020a03600435166110fd565b600454600160a060020a03165b90565b600254600160a060020a031681565b60048054604080517f63e6ffdd000000000000000000000000000000000000000000000000000000008152600160a060020a03878116948201949094529051929091169160009183916363e6ffdd9160248082019260209290919082900301818787803b1580156104c957600080fd5b505af11580156104dd573d6000803e3d6000fd5b505050506040513d60208110156104f357600080fd5b50519050600160a060020a0381161515610517576105128585856105c8565b610522565b6105228185856105c8565b5050505050565b60048054604080517f26683e14000000000000000000000000000000000000000000000000000000008152339381019390935251600092600160a060020a039092169182916326683e149160248082019260209290919082900301818887803b15801561059557600080fd5b505af11580156105a9573d6000803e3d6000fd5b505050506040513d60208110156105bf57600080fd5b505191505b5090565b604080517f8635adb500000000000000000000000000000000000000000000000000000000815230600482015260ff80851660248301528316604482015290518491600160a060020a03831691638635adb59160648082019260009290919082900301818387803b15801561063c57600080fd5b505af1158015610650573d6000803e3d6000fd5b5050505050505050565b60075490565b600354600160a060020a03163214806106835750600354600160a060020a031633145b151561068e57600080fd5b600354600160a060020a0316ff5b60006106a6610529565b15156106b157600080fd5b60006006805460018160011615610100020316600290049050111561072a5760078054600181810180845560009390935260068054610727937fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c688019260026101009183161591909102600019019091160461116f565b50505b6008805461074d916006916002600019610100600184161502019091160461116f565b5060408051602081019182905260009081905261076c916008916111f0565b5060408051602080825260068054600260001961010060018416150201909116049183018290527f5ae4ddb3009a8ccdedc04b2011fc66a472807bcdcff04af16286ddb27819ebe19390929182918201908490801561080c5780601f106107e15761010080835404028352916020019161080c565b820191906000526020600020905b8154815290600101906020018083116107ef57829003601f168201915b50509250505060405180910390a190565b60095481565b6008805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156108a95780601f1061087e576101008083540402835291602001916108a9565b820191906000526020600020905b81548152906001019060200180831161088c57829003601f168201915b505050505081565b600254600160a060020a031632146108c857600080fd5b600160a060020a03811615156108dd57600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600080600080600460009054906101000a9004600160a060020a0316925082600160a060020a031663a2d67fcf6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561096857600080fd5b505af115801561097c573d6000803e3d6000fd5b505050506040513d602081101561099257600080fd5b5051604080517f5d97b6c20000000000000000000000000000000000000000000000000000000081529051919350839250600160a060020a0383169163fe538c5a9130918491635d97b6c29160048083019260209291908290030181600087803b1580156109ff57600080fd5b505af1158015610a13573d6000803e3d6000fd5b505050506040513d6020811015610a2957600080fd5b50516040805160e060020a63ffffffff8616028152600160a060020a03909316600484015260ff90911660248301525160448083019260209291908290030181600087803b158015610a7a57600080fd5b505af1158015610a8e573d6000803e3d6000fd5b505050506040513d6020811015610aa457600080fd5b5051935050505090565b6007805482908110610abc57fe5b600091825260209182902001805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152935090918301828280156108a95780601f1061087e576101008083540402835291602001916108a9565b600354600160a060020a031681565b610b3961090c565b1515610b4457600080fd5b8051608011610b5257600080fd5b8051610b659060089060208401906111f0565b506004547fb3ac059d88af6016aca1aebb7b3e796f2e7420435c59c563687814e9b85daa7590600160a060020a0316610b9c61043a565b60408051600160a060020a038085168252831660208201526060918101828152600880546002600019610100600184161502019091160493830184905292608083019084908015610c2e5780601f10610c0357610100808354040283529160200191610c2e565b820191906000526020600020905b815481529060010190602001808311610c1157829003601f168201915b505094505050505060405180910390a150565b600454600160a060020a031681565b600354600160a060020a0316331480610c6c5750610c6c610529565b1515610c7757600080fd5b60408051602080825260068054600260001961010060018416150201909116049183018290527f403f30aa5f4f2f89331a7b50054f64a00ce206f4d0a37f566ff344bbe46f8b6593909291829182019084908015610d165780601f10610ceb57610100808354040283529160200191610d16565b820191906000526020600020905b815481529060010190602001808311610cf957829003601f168201915b50509250505060405180910390a1565b6006805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156108a95780601f1061087e576101008083540402835291602001916108a9565b6000806000806000610d9161090c565b1515610d9c57600080fd5b856040516020018082805190602001908083835b60208310610dcf5780518252601f199092019160209182019101610db0565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b60208310610e325780518252601f199092019160209182019101610e13565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902093506000199250600091505b600754821015611012576007805483908110610e8357fe5b906000526020600020016040516020018082805460018160011615610100020316600290048015610eeb5780601f10610ec9576101008083540402835291820191610eeb565b820191906000526020600020905b815481529060010190602001808311610ed7575b50509150506040516020818303038152906040526040518082805190602001908083835b60208310610f2e5780518252601f199092019160209182019101610f0f565b5181516020939093036101000a60001901801990911692169190911790526040519201829003909120935050505083811415611007576007805483908110610f7257fe5b906000526020600020016000610f88919061125e565b600754600019018214610feb57600780546000198101908110610fa757fe5b90600052602060002001600783815481101515610fc057fe5b906000526020600020019080546001816001161561010002031660029004610fe992919061116f565b505b6007805490610ffe9060001983016112a5565b50819250611012565b600190910190610e6b565b60001983141561102157600080fd5b7f165c03d1f6eb5280d41c4b5f467649bacdff0baf01ed576facebc59885dd7efa86846040518080602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561108757818101518382015260200161106f565b50505050905090810190601f1680156110b45780820380516001836020036101000a031916815260200191505b50935050505060405180910390a15090949350505050565b6040516000907fed78a9defa7412748c9513ba9cf680f57703a46dd7e0fb0b1e94063423c73e88908290a150600190565b600354600160a060020a03163214806111205750600354600160a060020a031633145b151561112b57600080fd5b600160a060020a038116151561114057600080fd5b6003805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106111a857805485556111e4565b828001600101855582156111e457600052602060002091601f016020900482015b828111156111e45782548255916001019190600101906111c9565b506105c49291506112ce565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061123157805160ff19168380011785556111e4565b828001600101855582156111e4579182015b828111156111e4578251825591602001919060010190611243565b50805460018160011615610100020316600290046000825580601f1061128457506112a2565b601f0160209004906000526020600020908101906112a291906112ce565b50565b8154818355818111156112c9576000838152602090206112c99181019083016112e8565b505050565b61044791905b808211156105c457600081556001016112d4565b61044791905b808211156105c4576000611302828261125e565b506001016112ee5600a165627a7a72305820c89a44ffb3868e669f19ff7a1ad076a531af61d748e3fc2426238818e4cae0ee0029"}; module.exports=contract;