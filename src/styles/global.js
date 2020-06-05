import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #f9f9f9;
    font-family: 'Noto Sans SC', sans-serif;
    color: #fff;
    font-weight: 400;
    font-size: 1.6rem;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
