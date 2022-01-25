import styled from 'styled-components'
import { device } from '../sharedStyles/breakpoints'

const StyledHeader = styled.div`
  display: flex;
  align-items: center;

  position: sticky;
  top: 0;
  z-index: 99;
  background-color: ${props => props.theme.white}e1;
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
    font-size: 4rem;
    font-weight: 300;
    text-transform: uppercase;

    @media only screen and (${device.sm}) { 
      letter-spacing: .8rem;
      font-size: 5rem;
    }

    @media only screen and (${device.md}) { 
      font-size: 6rem;
      font-weight: 400;
      letter-spacing: 1.5rem;
    }

    @media only screen and (${device.lg}) { 
      margin-left: 0;
    }

    &::first-letter {
      color: ${props => props.theme.primary}
    }
  }
`

export default StyledHeader