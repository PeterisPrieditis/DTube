// npx hardhat run scripts/sendDummyData.js --network rinkeby

const hre = require("hardhat");

async function main() {
    const nft = await ethers.getContractAt(
        "DTube",
        "0x674C9E9046e0Bc8c7228555872B9052D99c79762"
    );

    const [deployer, account_2, account_3, account_4] = await hre.ethers.getSigners();

    await nft.connect(account_2).sendVideo("QmR2SaapDATg7q9vVG2NSaGbSE3KUBLfUN49Lb737HY88h");
    await nft.connect(account_2).sendVideo("QmR2SaapDATg7q9vVG2NSaGbSE3KUBLfUN49Lb737HY88h");
    await nft.connect(account_2).sendVideo("QmR2SaapDATg7q9vVG2NSaGbSE3KUBLfUN49Lb737HY88h");
    await nft.connect(account_2).sendVideo("QmR2SaapDATg7q9vVG2NSaGbSE3KUBLfUN49Lb737HY88h");

    
    console.log("Data has been sent");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
