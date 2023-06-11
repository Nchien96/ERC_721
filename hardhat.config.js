/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
module.exports = {
  solidity: "0.8.2",

  networks: {
    bsctest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [process.env.PRIV_KEY],
    },
  },

  networks: {
    matic: {
      url: "https://rpc-mumbai.maticvigil.com/",
      accounts: [process.env.PRIV_KEY],
    },
  },

  etherscan: {
    apiKey: {
      polygonMumbai: process.env.API_KEY,
    },
  },
};
