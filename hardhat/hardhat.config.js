
require("hardhat-gas-reporter");
require("solidity-coverage");

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-abi-exporter");
require("dotenv").config();

// npx hardhat accounts --network rinkeby
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      forking: {
        url: process.env.ETH_RINKEBY_FIGMENT,
      },
    },
    mumbai: {
      url: process.env.MATIC_MUMBAI_FIGMENT,
      chainId: 80001,
      accounts: [process.env.PRIVATE_KEY_1, process.env.PRIVATE_KEY_2, process.env.PRIVATE_KEY_3, process.env.PRIVATE_KEY_4],
    },
    rinkeby: {
      url: process.env.ETH_RINKEBY_FIGMENT,
      accounts: [process.env.PRIVATE_KEY_1, process.env.PRIVATE_KEY_2, process.env.PRIVATE_KEY_3, process.env.PRIVATE_KEY_4],
    },
    celoTestnet: {
      url: process.env.CELO_ALFAJORES,
      chainId: 44787,
      accounts: [process.env.PRIVATE_KEY_1, process.env.PRIVATE_KEY_2, process.env.PRIVATE_KEY_3, process.env.PRIVATE_KEY_4],
    },
    celoMainnet: {
      url: process.env.CELO_MAINNET,
      chainId: 42220,
      accounts: [process.env.PRIVATE_KEY_1, process.env.PRIVATE_KEY_2, process.env.PRIVATE_KEY_3, process.env.PRIVATE_KEY_4],
    },
    sokol: {
      url: process.env.GNOSIS_SOKOL,
      accounts: [process.env.PRIVATE_KEY_1, process.env.PRIVATE_KEY_2, process.env.PRIVATE_KEY_3, process.env.PRIVATE_KEY_4],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: {
      rinkeby: process.env.ETHERSCAN_API_KEY,
    }
  },
  abiExporter: {
    path: "../abi",
    clear: true,
    // flat: true,
    only: [":DTube$"],
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 21,
    enabled: (process.env.REPORT_GAS) ? true : false
  }
};
