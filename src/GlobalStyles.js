import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

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