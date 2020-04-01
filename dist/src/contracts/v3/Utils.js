var contract = {
  "abi": [{
    "constant": true,
    "inputs": [{
      "name": "addr",
      "type": "address"
    }],
    "name": "getBalance",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }]
};
module.exports = contract;