const hre = require('hardhat')

const fs = require('fs')
const path = require('path')

const addressPath = path.join(__dirname, "../addresses.json")
const address = require(addressPath)

async function main(){
   const network = 'sepolia'
   const [deployer] = await ethers.getSigners()

   const ProductImplementation = await ethers.getContractFactory("ProductImplementation")
   const productImplementation = await ProductImplementation.deploy()

   address[network] = {"ProductImplementation": productImplementation.target}


   const ProductProxy = await ethers.getContractFactory("ProductProxy")
   const productProxy = await ProductProxy.deploy(productImplementation.target)

   address[network]["ProductProxy"] = productProxy.target

   fs.writeFileSync(addressPath, JSON.stringify(address))
}

main().catch(err => console.log(err))