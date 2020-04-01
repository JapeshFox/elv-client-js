var contract = {
  "abi": [{
    "constant": true,
    "inputs": [{
      "name": "_addr",
      "type": "address"
    }, {
      "name": "msgHash",
      "type": "bytes32"
    }, {
      "name": "v",
      "type": "uint8"
    }, {
      "name": "r",
      "type": "bytes32"
    }, {
      "name": "s",
      "type": "bytes32"
    }],
    "name": "isSigned",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "msgHash",
      "type": "bytes32"
    }, {
      "name": "v",
      "type": "uint8"
    }, {
      "name": "r",
      "type": "bytes32"
    }, {
      "name": "s",
      "type": "bytes32"
    }],
    "name": "recoverAddr",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }]
};
module.exports = contract;