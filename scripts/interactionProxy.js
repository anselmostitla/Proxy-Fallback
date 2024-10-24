const { Web3 } = require('web3')
const hre = require('hardhat')
require('dotenv').config()

const web3 = new Web3(process.env.SEPOLIA_RPC_URL)

// const { abi: abiProxy } = require('../artifacts/contracts/Proxy.sol/Proxy.json')
const { abi: abiProxy } = require('../artifacts/contracts/ProductProxy.sol/ProductProxy.json')
const { abi: abiImplementation } = require('../artifacts/contracts/ProductImplementation.sol/ProductImplementation.json')
const address = require('../addresses.json')

async function main(newValue){

   const account0 = web3.eth.accounts.wallet.add(process.env.EDGE_PRIV_KEY_1)[0]

   const mixContract = new web3.eth.Contract(abiImplementation, address.sepolia.ProductProxy);

   const receipt = await mixContract.methods.createProduct("Tv").send({from: account0.address})
   console.log("receipt: ", receipt);

   const productId = await mixContract.methods.productCount().call()
   console.log("productId: ", productId);

   const product = await mixContract.methods.getProduct(productId).call()
   console.log("product: ", product)




}

main(50).catch(err => console.log(err))