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
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;    
    margin: 0;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
`
export default GlobalStyles