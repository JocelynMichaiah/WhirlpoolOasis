import { useEffect, useState } from "react"
import { useEthers, useContractFunction, useSendTransaction } from "@usedapp/core"
import { constants, utils } from "ethers"
import { abi, contractAddress } from "../constants.js"
import { Contract } from "@ethersproject/contracts"
import * as sapphire from '@oasisprotocol/sapphire-paratime';
import { ethers } from 'ethers';

export const useWithdrawFunction = (address: string, amount: number, setOpen: Function) => {

    //to find a contract on the chain, we need its address
    //to communicate with the contract, we need its abi (interface)
    const ContractInterface = new utils.Interface(abi)
    const contract = new Contract(contractAddress, ContractInterface)

    //if no metamask detected give null
    const Sapphiresigner = window.ethereum ? new ethers.providers.Web3Provider(sapphire.wrap(window.ethereum)).getSigner() : null as any

    //function called from the Withdraw button when clicked.
    const approveAndWithdraw = () => {
        return Sapphiresigner ? withdrawSend(address, ethers.utils.parseEther(String(amount))) : console.log("No metamask detected")
    }
    //function called from the Use Relayer button when clicked.
    const WithdrawWithRelayer = () => {
        setOpen(false)
        console.log("attemping to send to relayer")
        fetch('/relayer', {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify({
                address: address,
                amount: amount,
            }),
            headers: {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": 'OPTIONS,POST,GET',
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Handle data
                console.log("data recieved from relayer")
                if (data.response == "recieved") {
                    setOpen(true)
                }
            })
            .catch((err) => {
                console.log("error from relayer")
                console.log(err);
            });
    }
    //function to call the withdraw function from the contract.
    const { send: withdrawSend, state: withdrawState } =
        useContractFunction(contract, "withdraw", {
            transactionName: "withdraw",
            signer: Sapphiresigner
        })

    const [state, setState] = useState(withdrawState)
    return { approveAndWithdraw, WithdrawWithRelayer, state }
}
