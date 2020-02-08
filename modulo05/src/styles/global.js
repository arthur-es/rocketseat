import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    background-color: #7159c1;
    color: white;
  }

  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    outline: 0;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  html,body, #root {
    min-height: 100%;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
