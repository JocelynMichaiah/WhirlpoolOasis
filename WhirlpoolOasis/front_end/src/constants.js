//We update constants.js manually from the artifacts folder hardhat generates whenever we launch the contract

export const contractAddress = "0xD8ad26dD18089A1e29FdEc307Fd4dB8E1b67C769"
export const abi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "new_address",
                "type": "address"
            }
        ],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "withdraw_address",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]