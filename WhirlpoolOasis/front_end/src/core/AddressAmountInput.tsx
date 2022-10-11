import React, { useState, ChangeEvent } from "react";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import { Button, TextField, Box, Tab } from "@mui/material";
import AmountSlider from "./AmountSlider";

function AddressAmountInput(props: { getAmount: Function, addressChange: Function }) {
    const [value, setValue] = useState("1");
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
        props.getAmount(0.1);
    }
    return (
        <div className="AddressAmountInput">
            <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                required={true}
                onChange={(event: ChangeEvent) => props.addressChange(event)}
            />
            <div id="amount-group">
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList onChange={handleChange}>
                            <Tab label="Default" value="1" />
                            <Tab label="Custom" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <AmountSlider callback={(val: number) => props.getAmount(val)} />
                    </TabPanel>
                    <TabPanel value="2">
                        <TextField
                            id="outlined-basic"
                            label="Amount"
                            variant="standard"
                            defaultValue={0.1}
                            required={true}
                            type="number"
                            onChange={event => props.getAmount(Number(event.target.value))}
                        />
                    </TabPanel>
                </TabContext>
            </div>
        </div>
    )
}

export default AddressAmountInput;