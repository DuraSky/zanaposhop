// pages/_app.js
import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../components/GlobalStyle";
import { theme } from "../components/Theme";

import { Layout } from "../components/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>{/* <Component {...pageProps} /> */}</Layout>
    </ThemeProvider>
  );
};

export default App;
