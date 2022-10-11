import { useState } from "react";
import { Button } from "@mui/material";
import "../App.css";
import { useWithdrawFunction } from "../hooks/useWithdrawFunction"
import AddressAmountInput from "./AddressAmountInput";

function Withdraw() {

  const [amount, setAmount] = useState(0.1);
  const [address, setAddress] = useState("");

  const addressChange = (event: any): void => {
    setAddress(event.target.value);
  }
  const getAmount = (newValue: number): void => {
    setAmount(newValue);
  }

  const { approveAndWithdraw, state: approveAndWithdrawState } = useWithdrawFunction(address, amount)
  const handleWithdrawSubmit = () => {
    return approveAndWithdraw()
  }

  return (
    <div className="Withdraw">
      <AddressAmountInput getAmount={getAmount} addressChange={addressChange} />
      <Button variant="contained" disabled>Use Relayer - COMING SOON</Button>
      <Button onClick={handleWithdrawSubmit} variant="contained">Submit</Button>
    </div>
  );
}

export default Withdraw;
