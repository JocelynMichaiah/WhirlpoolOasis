// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

contract Whirlpool {
    // for all users
    mapping(address => uint) private balances;

    // for relayer-using users
    uint fee = 100000000000000000; // 0.1 ROSE

    // users can deposit funds, and they assign new owners of the funds as an encrypted parameter
    function deposit(address new_address) public payable {
        balances[new_address] += msg.value;
    }

    // the new owners of those funds can then withdraw their assets. If they do not have ROSE to pay for the gas fee,
    // they can ask a relayer to call the function with their address as a parameter. The relayer gets a fee of 0.1 ROSE.
    function withdraw(address withdraw_address, uint value) public {
        // if value is more than or equal to balance, the entire balance is withdrawn
        uint amount = balances[withdraw_address];
        if (value >= balances[withdraw_address]) {
            balances[withdraw_address] = 0;
        }
        // if value is less than balance, remaining balance is saved
        else {
            amount = value;
            balances[withdraw_address] -= value;
        }
        // if the withdraw_address is the same as the relayer, we ignore the fee portion
        if (withdraw_address == msg.sender) {
            payable(withdraw_address).transfer(amount);
        } else {
            // give the relayer the fixed fee
            if (fee <= amount) {
                amount -= fee;
                payable(msg.sender).transfer(fee);
                payable(withdraw_address).transfer(amount);
            } else {
                // there was not enough balance to pay for the fee,
                // so we give the relayer what was left. This scenario can be avoided if the relayer uses deposit notes (off-chain feature)
                payable(msg.sender).transfer(amount);
            }
        }
    }
}
