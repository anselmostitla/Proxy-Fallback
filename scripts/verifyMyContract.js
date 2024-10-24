const hre = require('hardhat')

async function main(){

   const [deployer] = await ethers.getSigners()

   // await hre.run("verify:verify", {})
   await hre.run("verify:verify", {
      address: "0x7e4E9125da41bF42c5c7a7222fDbed7be5FA2f5a",
      constructorArguments: ["0x6ded876DA9D33a71b63FeFf055A6ef4B1D66be94"]  // Maybe is better to comment this line or erase if not arguments are require in the constructor
   })

}

main().catch(err => console.log(err))

/*
Successfully verified contract ProductImplementation on the block explorer.
https://sepolia.etherscan.io/address/0x6ded876DA9D33a71b63FeFf055A6ef4B1D66be94#code

Successfully verified contract ProductProxy on the block explorer.
https://sepolia.etherscan.io/address/0x7e4E9125da41bF42c5c7a7222fDbed7be5FA2f5a#code

*/