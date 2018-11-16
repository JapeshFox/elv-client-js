const contract={"abi":[{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newCreator","type":"address"}],"name":"transferCreatorship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"updateRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"objectHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"object_hash","type":"bytes32"}],"name":"commit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"objectHash","type":"bytes32"}],"name":"Commit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"objectHash","type":"bytes32"}],"name":"UpdateRequest","type":"event"}],"bytecode":"606060405260008054600160a060020a033216600160a060020a031991821681179092556001805490911690911790556103918061003e6000396000f30060606040526004361061008d5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166302d05d3f811461008f57806341c0e1b5146100be5780636d2e4b1b146100d15780638da5cb5b146100f0578063c287e0ed14610103578063e02dd9c214610116578063f14fcbc81461013b578063f2fde38b14610151575b005b341561009a57600080fd5b6100a2610170565b604051600160a060020a03909116815260200160405180910390f35b34156100c957600080fd5b61008d61017f565b34156100dc57600080fd5b61008d600160a060020a03600435166101a8565b34156100fb57600080fd5b6100a2610249565b341561010e57600080fd5b61008d610258565b341561012157600080fd5b6101296102aa565b60405190815260200160405180910390f35b341561014657600080fd5b61008d6004356102b0565b341561015c57600080fd5b61008d600160a060020a0360043516610306565b600054600160a060020a031681565b60015432600160a060020a0390811691161461019a57600080fd5b600154600160a060020a0316ff5b60005432600160a060020a039081169116146101c357600080fd5b600160a060020a03811615156101d857600080fd5b600054600154600160a060020a039081169116141561021a576001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600154600160a060020a031681565b60015432600160a060020a0390811691161461027357600080fd5b7f1b6452b35fd3ee7f1fad8558a9d3e79233f94d15fe657df3871f8efc2f97ef1960025460405190815260200160405180910390a1565b60025481565b60015432600160a060020a039081169116146102cb57600080fd5b60028190557f9e8a51bb6b34b9d5d18c14fd753ee3bf44e2256512665a4577281ffcc91943ff8160405190815260200160405180910390a150565b60015432600160a060020a0390811691161461032157600080fd5b600160a060020a038116151561033657600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a7230582047865fe46130eeda7cb2e8ab535dd7bbd2906377077e28ef3a3e45c1669de4f40029"}; module.exports=contract;