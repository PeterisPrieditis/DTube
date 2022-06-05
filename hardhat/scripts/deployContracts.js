
// npx hardhat run scripts/deployContracts.js --network rinkeby

// DTube deployed to: 0x674C9E9046e0Bc8c7228555872B9052D99c79762
// npx hardhat verify 0x674C9E9046e0Bc8c7228555872B9052D99c79762 --network rinkeby

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
