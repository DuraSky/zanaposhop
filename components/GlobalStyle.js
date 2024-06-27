import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Nunito", sans-serif;
    font-size: 15px;
    line-height: 24px;

  }
`;

export default GlobalStyle;
