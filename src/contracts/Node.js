const contract={"abi":[{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"label","type":"string"}],"name":"log","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newCreator","type":"address"}],"name":"transferCreatorship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"}],"name":"Log","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"b","type":"bool"}],"name":"LogBool","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"a","type":"address"}],"name":"LogAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"u","type":"uint256"}],"name":"LogUint256","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"u","type":"int256"}],"name":"LogInt256","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"b","type":"bytes32"}],"name":"LogBytes32","type":"event"}],"bytecode":"60806040527f4f776e61626c6532303139303331353134313530304d4c0000000000000000006000557f4e6f646532303139303331353130353130304d4c00000000000000000000000060035560018054600160a060020a0319908116329081179092556002805490911690911790556103c48061007e6000396000f3006080604052600436106100825763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166302d05d3f811461008457806341304fac146100b557806341c0e1b51461010e57806354fd4d50146101235780636d2e4b1b1461014a5780638da5cb5b1461016b578063f2fde38b14610180575b005b34801561009057600080fd5b506100996101a1565b60408051600160a060020a039092168252519081900360200190f35b3480156100c157600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526100829436949293602493928401919081908401838280828437509497506101b09650505050505050565b34801561011a57600080fd5b5061008261027a565b34801561012f57600080fd5b506101386102b6565b60408051918252519081900360200190f35b34801561015657600080fd5b50610082600160a060020a03600435166102bc565b34801561017757600080fd5b50610099610317565b34801561018c57600080fd5b50610082600160a060020a0360043516610326565b600154600160a060020a031681565b600254600160a060020a03163214806101d35750600254600160a060020a031633145b15156101de57600080fd5b7fcf34ef537ac33ee1ac626ca1587a0a7e8e51561e5514f8cb36afa1c5102b3bab816040518080602001828103825283818151815260200191508051906020019080838360005b8381101561023d578181015183820152602001610225565b50505050905090810190601f16801561026a5780820380516001836020036101000a031916815260200191505b509250505060405180910390a150565b600254600160a060020a031632148061029d5750600254600160a060020a031633145b15156102a857600080fd5b600254600160a060020a0316ff5b60035481565b600154600160a060020a031632146102d357600080fd5b600160a060020a03811615156102e857600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600254600160a060020a031681565b600254600160a060020a03163214806103495750600254600160a060020a031633145b151561035457600080fd5b600160a060020a038116151561036957600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820388a3aec2c81020d64a358d313e568007de62e27481f58aad33df5ff0e78e3bc0029"}; module.exports=contract;