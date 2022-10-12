import "./App.css";
import { Routes as Switch, Route, useLocation } from "react-router-dom";
import {
  ChainId,
  DAppProvider,
  Localhost,
  DEFAULT_SUPPORTED_CHAINS,
} from "@usedapp/core";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./core/Theme";
import { Sapphire } from "./customChains";

import Header from "./core/Header";
import Operation from "./core/Operation";
import About from "./core/About";

const config = {
  readOnlyChainId: Sapphire.chainId,
  readOnlyUrls: {
    [Localhost.chainId]: "https://127.0.0.1:8545",
    [Sapphire.chainId]: "https://testnet.sapphire.oasis.dev",
  },
  multicallAddresses: {
    Sapphire: "0x51Cac80DE446358D2452A5D8f8409f8583288673", // from deployMulticall.ts
  },
  notifications: {
    expirationPeriod: 1000,
    checkInterval: 1000,
  },
  networks: [...DEFAULT_SUPPORTED_CHAINS, Sapphire],
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DAppProvider config={config}>
        <div className="App">
          <div id="inner-background">
            <header className={`app-header ${useLocation().pathname == "/about" ? "app-header-small" : ""}`}>
              <h2 id="title">Whirlpool <br /> Oasis</h2>
              <Switch>
                <Route path="/" element={<Operation />} />
                <Route path="/about" element={<About />} />
              </Switch>
              <Header />
            </header>
          </div>
        </div>
      </DAppProvider>
    </ThemeProvider>
  );
}

export default App;
