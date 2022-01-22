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

    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: .8em;
    }

    ::-webkit-scrollbar-track {
      background: ${props => props.theme.white};
      border-radius: 100vw;
      margin-top: .5rem;
    }

    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.grey};
      border-radius: 100vw;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.greyDark};
    }
  }
`
export default GlobalStyles