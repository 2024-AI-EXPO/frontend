import React from "react";
import { Router } from "./router/router";
import { GlobalStyle } from "./styles/globalStyle";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};
