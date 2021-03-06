import { createGlobalStyle } from 'styled-components'
import { device } from './breakpoints'

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
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    margin: 0;
    background-image: linear-gradient(
      135deg,
      ${props => props.theme.primary}a1 0%,
      ${props => props.theme.primary}90 59%,
      ${props => props.theme.blackLight}b1 59%,
      ${props => props.theme.blackLight}b1 60%,
      ${props => props.theme.greyLight} 60%,
      ${props => props.theme.greyLight}
    );
    background-attachment: fixed;
    min-height: 100vh;
    overflow-y: scroll;

    @media only screen and (${device.md}) {
      background-image: linear-gradient(
        135deg,
        ${props => props.theme.primary}c1 0%,
        ${props => props.theme.primary}50 59%,
        ${props => props.theme.blackLight}b1 59%,
        ${props => props.theme.blackLight}b1 60%,
        ${props => props.theme.white} 60%,
        ${props => props.theme.grey}b1
      );
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;      
      z-index: -9;

      @media only screen and (${device.md}) {
        backdrop-filter: blur(3px);
      }
    }

    &::-webkit-scrollbar {
      width: .8em;
    }

    &::-webkit-scrollbar-track {
      background: ${props => props.theme.white};      
      margin-top: .5rem;
    }

    &::-webkit-scrollbar-thumb {
      background: ${props => props.theme.primary}c5;
      border-radius: .5rem;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.primary};
    }
  }
`
export default GlobalStyles