import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./core/Theme";
import About from "./core/About";
import App from "./App";

const Routes = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Routes;
