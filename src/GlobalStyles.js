import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
      box-sizing: inherit;
  }

  html {
      box-sizing: border-box;
      font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    padding: 3rem;   
  }
`
export default GlobalStyles