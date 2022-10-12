import { useLocation, Link } from "react-router-dom";
import { Button } from "@mui/material";

const About = () => {
  return (
    <div className={`About ${useLocation().pathname == "/about" ? "About-small" : ""}`}>
      <div className="mobile-top-bar"><div className="mobile-top-bar" id="mobile-top-bar-inner"></div></div>
      <Link to="/">
        <Button id="back-button" color="primary" variant="outlined">
          Back
        </Button>
      </Link>
      <h3>Warnings</h3>
      <p className="indent">
        This website serves as a UI to make it easier for the users to interact with the whirlpool contract. However unlike
        the contract on the blockchain, this website is NOT immutable and can be changed at any time.
        Someone may hack the website, and put their own malicious contract for you to interact with.
        They may put a fake donation address at the bottom, they may start storing your ip's, and more.
        For maximum security, we recommend accessing this site over a vpn or tor, and to ensure that the
        contract you are interacting with has not changed.
      </p>
      <h3>Important Info</h3>
      <p className="indent">
        The contract address is 0xA27317526967237642F562D4f6dd8Af92C5a5B43. You can check out the contract on here: https://github.com/JocelynMichaiah/WhirlpoolOasis. We encourage verifying the contract (via bytecode).
      </p>
      <p className="indent">
        Do not withdraw your funds to your new address by calling the function from your old address. This will break all anonymity. Use a
        relayer (coming soon), or a faucet to get some funds.
      </p>
      <h3>Usage</h3>
      <p className="indent">
        The contract has two functions, Deposit and Withdraw. For depositing, you are to give two inputs, an address and an amount.
        The amount is how much you will send to the contract, and the address is the new owner of the amount. Your old address will
        no longer have access to those funds (unless it is the same as the new address you give). Due to this, you must ENSURE you do not
        lose or forget your new address. You can deposit any amount, but we recommend
        one of the default values provided. After you insert your address and amount, click submit, and metamask should pop up asking you to
        confirm the transaction (ensure you are connected to the Sapphire network).
      </p>
      <p className="indent">
        For withdrawing, the inputs are the same as for depositing. The address field is the address you wish to withdraw funds for. For example,
        lets say you deposit 1 ROSE with address 0x123. To withdraw, you insert 0x123 as the address, and any amount you wish. The full amount will go to 0x123 if 0x123
        called the withdraw function, and the full amount-0.1 ROSE if some other address called the withdraw function (with the 0.1 going to the other address to reinburse the gas fee).
      </p>
      <p className="indent">
        You can call the withdraw function from any address for any address. This is to allow the possibility of 'relayers'. A common problem with this type of service is how can
        users get funds to their new address to pay for gas fees, without sending it from their old address (this would break any anonymity). The solution is a relayer, someone
        who can call the withdraw function on your behalf with your parameters, in return for the very small fee subtracted from your withdraw amount (to pay for gas). You can also
        use a faucet for some funds.
      </p>
      <h4>About</h4>
      <p className="indent">
        The purpose of the contract is to helps users regain their privacy. Whenever a user makes
        a transaction on the blockchain, the info of from, to, and how much is stored on the explorer
        and visible for everyone to see. This means that anyone can tell if you interacted with 'x' contract
        or recieved 'y' funds from someone. By using this service, you can obfuscate this info by transfering
        all your funds to the contract, and confidentially telling the contract the new address you want the funds to belong too.
        Wait for other users to interact with the contract (preferably 1-2 weeks),
        then withdraw to your new address, with no clear connection between your new address and old one.
      </p>
      <p className="indent">
        This is possible by using structured deposits and withdrawals. A very simple example is if you have 3
        people: Alice, Bob, and John. Suppose Alice, Bob, and John all deposit 10 ROSE into the contract. Then
        a day later, some new person 'Anon' comes along and withdraws 10 ROSE from the contract. From an outsider perspective,
        one can assume that Anon is either Alice, Bob, or John, but they don't know which one exactly. Now imagine this example with 100 people,
        and you can see how privacy is restored for the users, by removing all ties their old address might have had with their new one.
      </p>
      <h4>Contact Us</h4>
      <p className="indent">
        Email: jocelyn@whirlpooloasis.com
      </p>
    </div>
  );
};

export default About;
