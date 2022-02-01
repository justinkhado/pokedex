import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { device } from '../sharedStyles/breakpoints'

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  position: sticky;
  top: 0;
  z-index: 99;
  ${props => props.theme.type ? `
    background-color: ${props.theme.white};    
    background-image: linear-gradient(${props.theme.type} 0 0);` : `
    background-color: ${props.theme.white}e1;
    `
  }
  height: 7rem;
  margin: 0 auto 3rem;
  box-shadow: 0 .5rem 2rem;

  @media only screen and (${device.sm}) { 
    height: 9.5rem;
  }

  @media only screen and (${device.lg}) {
    justify-content: center;
    margin-bottom: 7rem;
    width: 95%;
  }

  h1 {
    margin-left: 1rem;
    font-size: 3.7rem;
    font-weight: 300;
    text-transform: uppercase;

    @media only screen and (${device.sm}) { 
      font-size: 5rem;
      letter-spacing: .5rem;
    }

    @media only screen and (${device.md}) { 
      font-size: 6rem;
      letter-spacing: 1.5rem;
    }

    @media only screen and (${device.lg}) { 
      margin-left: 0;
    }

    &::first-letter {
      ${props => props.theme.type ? `
      color: ${props.theme.white};` : `
      color: ${props.theme.primary};
      `}
    }
  }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;  

  &:link,
  &:visited {
    ${props => props.theme.type ? `
    color: ${props.theme.white};
    text-shadow: 1px 1px .3rem ${props.theme.black}` : `
    color: ${props.theme.black};
    `}
  }
`