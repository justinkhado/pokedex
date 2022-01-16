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
    //background: ${({ theme }) => theme.colors.primary}
  }
`
export default GlobalStyles