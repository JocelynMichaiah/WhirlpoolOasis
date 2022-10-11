// Usage: npx hardhat run --network <network> scripts/deploy.ts

import { ethers } from 'hardhat';
import * as sapphire from '@oasisprotocol/sapphire-paratime';

async function main() {
  const signer0 = (await ethers.getSigners())[0];
  const chainId = await signer0.getChainId();
  const signer = chainId in sapphire.NETWORKS ? sapphire.wrap(signer0) : signer0; // can sign messages and transactions

  const Whirlpool = await ethers.getContractFactory('Whirlpool', signer);
  const whirlpool = await Whirlpool.deploy();
  console.log('Whirlpool deployed to:', whirlpool.address);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
