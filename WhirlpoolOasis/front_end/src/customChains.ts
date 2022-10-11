import { Chain } from '@usedapp/core'

export const Sapphire: Chain = {
    chainId: 23295,
    chainName: 'Sapphire',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0xF02Ef0Ffc2dE82E5Ee3184Ba9F1e2e5f95eDC399', //just paste #2 here as well
    multicall2Address: '0xF02Ef0Ffc2dE82E5Ee3184Ba9F1e2e5f95eDC399',
    getExplorerAddressLink: (address: string) => `https://testnet.explorer.sapphire.oasis.dev/address/${address}/transactions`,
    getExplorerTransactionLink: (transactionHash: string) =>
        `https://testnet.explorer.sapphire.oasis.dev/tx/${transactionHash}/internal-transactions`,
}