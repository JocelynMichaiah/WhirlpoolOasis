import { Chain } from '@usedapp/core'

export const Sapphire: Chain = {
    chainId: 23295,
    chainName: 'Sapphire',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0x51Cac80DE446358D2452A5D8f8409f8583288673', //just paste #2 here as well
    multicall2Address: '0x51Cac80DE446358D2452A5D8f8409f8583288673',
    getExplorerAddressLink: (address: string) => `https://testnet.explorer.sapphire.oasis.dev/address/${address}/transactions`,
    getExplorerTransactionLink: (transactionHash: string) =>
        `https://testnet.explorer.sapphire.oasis.dev/tx/${transactionHash}/internal-transactions`,
}