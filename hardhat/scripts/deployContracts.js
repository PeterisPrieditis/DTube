
// npx hardhat run scripts/deployContracts.js --network mumbai
// DTube deployed to: 0xcBd9d89d1EdE18A8E6313825b7a219c310bb41dA
// npx hardhat verify 0xcBd9d89d1EdE18A8E6313825b7a219c310bb41dA --network mumbai
// https://mumbai.polygonscan.com/address/0xcBd9d89d1EdE18A8E6313825b7a219c310bb41dA#code

const hre = require("hardhat");
  
async function main() {

  const Cont = await hre.ethers.getContractFactory("DTube");
  const cont = await Cont.deploy(); 

  await cont.deployed();

  console.log("-> DTube deployed to:", cont.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
