const express = require('express');
const Web3 = require('web3');

const app = express();
const port = 3000;

// Instantiate Web3 correctly
const web3 = new Web3('http://localhost:8545');

const contractAddress = '0xFa79F1A2517dEf1057c29f50374c494E6e170099'; 
const contractABI = [
  
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

const contract = new web3.eth.Contract(contractABI, contractAddress);

app.get('/iqbal-test-api', async (req, res) => {
  try {
    // Fetch some info from the smart contract
    const name = await contract.methods.name().call();
    const symbol = await contract.methods.symbol().call();
    const totalSupply = await contract.methods.totalSupply().call();

    // Display the result in the console
    console.log(`Name: ${name}`);
    console.log(`Symbol: ${symbol}`);
    console.log(`Total Supply: ${totalSupply}`);

    // Send the result as a response
    return res.json({ name, symbol, totalSupply });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error fetching smart contract info');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});