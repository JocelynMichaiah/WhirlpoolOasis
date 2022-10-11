// Usage: npx hardhat run --network <network> scripts/deployMulticall.ts

import { ethers } from 'hardhat';
import * as sapphire from '@oasisprotocol/sapphire-paratime';

async function main() {
  const signer0 = (await ethers.getSigners())[0];
  const chainId = await signer0.getChainId();
  const signer = chainId in sapphire.NETWORKS ? sapphire.wrap(signer0) : signer0; // can sign messages and transactions

  const Multicall = await ethers.getContractFactory('Multicall2', signer);
  const multicall = await Multicall.deploy();
  console.log('Multicall2 deployed to:', multicall.address);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
