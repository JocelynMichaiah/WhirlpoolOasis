import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 1337
    },
    sapphire: {
      // This is Testnet! If you want Mainnet, add a new network config item.
      chainId: 0x5aff,
      url: "https://testnet.sapphire.oasis.dev",
      accounts: [process.env.SAPPHIRE_PRIVATE_KEY ?? '']
      ,
    },
    emerald_mainnet: {
      url: "https://emerald.oasis.dev",
      accounts:
        [process.env.SAPPHIRE_PRIVATE_KEY ?? '']
    },
  },
};

export default config;
