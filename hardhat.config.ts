import { HardhatUserConfig } from "hardhat/config";
import * as dotenv from "dotenv";

dotenv.config();

import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: "0.6.6" }],
  },
  networks: {
    hardhat: {},
    goerli: {
      url: process.env.RPC,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
  },
};

export default config;
