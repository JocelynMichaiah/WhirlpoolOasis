import { useState } from "react";
import { Button, Snackbar } from "@mui/material";
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

  const [open, setOpen] = useState(false);
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const { approveAndWithdraw, state: approveAndWithdrawState } = useWithdrawFunction(address, amount, setOpen)
  const handleWithdrawSubmit = () => {
    return approveAndWithdraw()
  }

  const { WithdrawWithRelayer, state: WithdrawWithRelayerState } = useWithdrawFunction(address, amount, setOpen)
  const handleRelayerWithdraw = () => {
    WithdrawWithRelayer()
    return
  }



  return (
    <div className="Withdraw">
      <AddressAmountInput getAmount={getAmount} addressChange={addressChange} />
      <Button variant="contained" onClick={handleRelayerWithdraw}>Use Relayer</Button>
      <Button onClick={handleWithdrawSubmit} variant="contained">Submit</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message="Relayer recieved request" />
    </div>
  );
}

export default Withdraw;
