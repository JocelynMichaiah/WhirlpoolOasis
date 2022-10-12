//We update constants.js manually from the artifacts folder hardhat generates whenever we launch the contract

export const contractAddress = "0xA27317526967237642F562D4f6dd8Af92C5a5B43"
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