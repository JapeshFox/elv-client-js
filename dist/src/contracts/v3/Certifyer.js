var contract = {
  "abi": [{
    "constant": true,
    "inputs": [{
      "name": "message_hash",
      "type": "bytes32"
    }, {
      "name": "sig",
      "type": "bytes"
    }],
    "name": "recoverSignerFromMessageHash",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "sig",
      "type": "bytes"
    }],
    "name": "splitSignature",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }, {
      "name": "",
      "type": "bytes32"
    }, {
      "name": "",
      "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "message",
      "type": "bytes"
    }, {
      "name": "sig",
      "type": "bytes"
    }],
    "name": "recoverSignerFromMessage",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "message",
      "type": "bytes"
    }],
    "name": "messageHash",
    "outputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "i",
      "type": "uint256"
    }],
    "name": "uint2str",
    "outputs": [{
      "name": "",
      "type": "bytes"
    }],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }]
};
module.exports = contract;