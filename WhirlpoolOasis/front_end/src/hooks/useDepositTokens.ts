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

    //if no metamask detected give null
    const Sapphiresigner = window.ethereum ? new ethers.providers.Web3Provider(sapphire.wrap(window.ethereum)).getSigner() : null as any

    //function called from the Deposit button when clicked.
    const approveAndDeposit = () => {
        return Sapphiresigner ? depositSend(address, { value: ethers.utils.parseEther(String(amount)) }) : console.log("No metamask detected")
    }

    //function to call the deposit function from the contract. If null signer, do nothing instead
    const { send: depositSend, state: depositState } =
        useContractFunction(contract, "deposit", {
            transactionName: "deposit",
            signer: Sapphiresigner
        })

    const [state, setState] = useState(depositState)

    return { approveAndDeposit, state }
}
