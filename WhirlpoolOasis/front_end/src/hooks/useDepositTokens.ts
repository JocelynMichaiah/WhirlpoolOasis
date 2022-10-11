import { useEffect, useState } from "react"
import { useEthers, useContractFunction, useSendTransaction } from "@usedapp/core"
import { constants, utils } from "ethers"
import { abi, contractAddress } from "../constants.js"
import { Contract } from "@ethersproject/contracts"
import * as sapphire from '@oasisprotocol/sapphire-paratime';
import { ethers } from 'ethers';
import { chainPropTypes } from "@mui/utils"

export const useDepositTokens = (address: string, amount: number) => {

    //to find a contract on the chain, we need its address
    //to communicate with the contract, we need its abi (interface)
    const ContractInterface = new utils.Interface(abi)
    const contract = new Contract(contractAddress, ContractInterface)

    //function called from the Deposit button when clicked.
    const approveAndDeposit = () => {
        return depositSend(address, { value: ethers.utils.parseEther(String(amount)) })
    }

    const Sapphiresigner = new ethers.providers.Web3Provider(sapphire.wrap(window.ethereum)).getSigner()
    //function to call the deposit function from the contract.
    const { send: depositSend, state: depositState } =
        useContractFunction(contract, "deposit", {
            transactionName: "deposit",
            signer: Sapphiresigner
        })

    const [state, setState] = useState(depositState)

    return { approveAndDeposit, state }
}
