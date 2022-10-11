import { useState } from "react";
import AddressAmountInput from "./AddressAmountInput";
import { useDepositTokens } from "../hooks/useDepositTokens";
import { Button } from "@mui/material";

function Deposit() {

  const [amount, setAmount] = useState<number>(0.1);
  const [address, setAddress] = useState<string>("");

  const getAmount = (newValue: number): void => {
    setAmount(newValue);
  }
  const { approveAndDeposit, state: approveAndDepositState } = useDepositTokens(
    address,
    amount
  );
  const handleDepositSubmit = () => {
    return approveAndDeposit();
  };
  const addressChange = (event: any): void => {
    setAddress(event.target.value);
  }
  return (
    <div className="Deposit">
      <AddressAmountInput getAmount={getAmount} addressChange={addressChange} />
      <Button onClick={handleDepositSubmit} color="primary" variant="contained">
        Submit
      </Button>
    </div>
  );
}

export default Deposit;
