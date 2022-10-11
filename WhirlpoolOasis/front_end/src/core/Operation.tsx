import React, { useState } from "react";
import { Box, Tab, IconButton } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import About from "./About";

function Operation() {
  const types = ["withdraw", "deposit"];
  const [value, setValue] = useState("1");
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <div className="Operation">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab label="Deposit" value="1" />
            <Tab label="Withdraw" value="2" />
            <Tab
              value="3"
              component={() => {
                return (
                  <div id="info-button">
                    <IconButton aria-label="info" component={Link} to="/about">
                      <InfoIcon id="info-button-icon" color="secondary" />
                    </IconButton>
                  </div>
                );
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Deposit />
        </TabPanel>
        <TabPanel value="2">
          <Withdraw />
        </TabPanel>
        <TabPanel value="3">
          <About />
        </TabPanel>
      </TabContext>
    </div>
  );
}

export default Operation;
