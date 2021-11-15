require("@nomiclabs/hardhat-waffle");

require('dotenv').config();
const mnemonic = process.env["ACCOUNT_MNEMONIC"];
const infuraUrl = process.env["INFURA_URL"];

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.7.6",
  networks: {
   rinkeby: {
     url: infuraUrl, //Infura url with projectId
     accounts: [mnemonic] // add the account that will deploy the contract (private key)
    },
  }
};