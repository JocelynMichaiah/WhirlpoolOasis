import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

// these tests are built with localtest network in mind and the public-version of the contract
describe("Whirlpool_tests", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployWhirlpoolAndDepositFixture() {

        // Contracts are deployed using the first signer/account by default
        const provider = ethers.provider;
        const [old_address, new_address] = await ethers.getSigners();
        const deposit_amount = ethers.utils.parseEther("1");
        const Whirlpool = await ethers.getContractFactory("Whirlpool_tests");
        const whirlpool = await Whirlpool.deploy();
        const old_address_funds = await provider.getBalance(old_address.address);
        const tx = await whirlpool.deposit(
            old_address.address,
            { value: deposit_amount }
        );
        await tx.wait();

        return { provider, whirlpool, deposit_amount, old_address, old_address_funds, new_address };
    }

    describe("Deposits", function () {
        it("Should take one ether from the old_address and give it to the contract", async function () {
            const { provider, whirlpool, deposit_amount, old_address, old_address_funds } = await loadFixture(deployWhirlpoolAndDepositFixture);

            const updated_old_address_funds = await provider.getBalance(old_address.address);
            expect(updated_old_address_funds == old_address_funds.sub(deposit_amount));
            const whirlpool_funds = await provider.getBalance(whirlpool.address);
            expect(whirlpool_funds == deposit_amount);
        });

        it("Should set the right owner to the new funds", async function () {
            const { whirlpool, deposit_amount, old_address, new_address } = await loadFixture(deployWhirlpoolAndDepositFixture);

            await expect((await whirlpool.balances(new_address.address)).eq(deposit_amount));
            await expect((await whirlpool.balances(old_address.address)).eq(0));
        });
    });

    describe("Withdrawals", function () {
        it("Should allow withdrawals for any address", async function () {
            const { provider, whirlpool, deposit_amount, new_address } = await loadFixture(
                deployWhirlpoolAndDepositFixture
            );
            const pre_withdaw_bal = await provider.getBalance(new_address.address)
            // we ask to withdraw more than we have and check that we dont get anything "for free"
            const more_than_deposit = deposit_amount.mul(2);
            const tx = await whirlpool.withdraw(
                new_address.address,
                more_than_deposit
            );
            await tx.wait();

            await expect(pre_withdaw_bal.add(deposit_amount) == await provider.getBalance(new_address.address));
            await expect((await whirlpool.balances(new_address.address)).eq(0));

        });
    });
});
