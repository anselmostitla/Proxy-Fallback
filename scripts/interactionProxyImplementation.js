const { Web3 } = require('web3')
const hre = require('hardhat')
require('dotenv').config()

const web3 = new Web3(process.env.SEPOLIA_RPC_URL)

const { abi: abiImplementation } = require('../artifacts/contracts/Implementation.sol/Implementation.json')
const address = require('../addresses.json')

const contract = new web3.eth.Contract(abiImplementation, address.sepolia.proxy);

async function main(newValue){

   account0 = web3.eth.accounts.wallet.add(process.env.EDGE_PRIV_KEY_1)[0]

   

   // Create the transaction to call the setValue function via the Proxy
   const tx = {
      from: account0.address,
      to: address.sepolia.proxy,
      data: contract.methods.setValue(newValue).encodeABI(), // Use implementation ABI
      gas: 2000000 // Adjust as necessary
   };

   const receipt = await web3.eth.sendTransaction(tx);
   console.log('Transaction successful:', receipt);

   // await getValueFromProxy()
}


async function getValueFromProxy() {
   const value = await contract.methods.getValue().call();
   console.log('Current value:', value);
}

// // Call the functions
// main(42)  // Set the value
//    .then(() => getValueFromProxy()) // Get the value afterward
//    .catch(console.error);

main(50).catch(err => console.log(err))