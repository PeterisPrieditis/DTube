// npx hardhat run scripts/sendDummyData.js --network mumbai

const hre = require("hardhat");

async function main() {
    const nft = await ethers.getContractAt(
        "DTube",
        "0xcBd9d89d1EdE18A8E6313825b7a219c310bb41dA"
    );

    const [deployer, account_2, account_3, account_4] = await hre.ethers.getSigners();

    await nft.connect(deployer).safeMint(account_2.address, "QmR2SaapDATg7q9vVG2NSaGbSE3KUBLfUN49Lb737HY88h");
    await nft.connect(deployer).safeMint(account_2.address, "QmR2SaapDATg7q9vVG2NSaGbSE3KUBLfUN49Lb737HY88h");
    await nft.connect(deployer).safeMint(account_2.address, "QmR2SaapDATg7q9vVG2NSaGbSE3KUBLfUN49Lb737HY88h");
    await nft.connect(deployer).safeMint(account_2.address, "QmR2SaapDATg7q9vVG2NSaGbSE3KUBLfUN49Lb737HY88h");  

    console.log("Data has been sent");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
