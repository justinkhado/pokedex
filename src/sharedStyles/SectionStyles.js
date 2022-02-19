import styled from 'styled-components'
import { device } from './breakpoints'

export const SectionContainer = styled.section`
  width: min(55rem, 100%);

  @media only screen and (${device.sm}) {
    box-shadow: .5rem 1rem 1rem ${props => props.theme.blackLight};
    align-self: center;    
  }

  @media only screen and (${device.md}) {
    box-shadow: none;
  }

  @media only screen and (${device.lg}) {
    width: min(50rem, 90%);
  }
`

export const SectionHeader = styled.h2`
  position: relative;
  z-index: 1;
  padding: .7em 0;
  margin: 0;
  border-bottom: 1px solid ${props => props.theme.grey};
  background-color: ${props => props.theme[`${props.theme.type}`]};   
  color: ${props => props.theme.white};
  font-size: 2.2rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;

  @media only screen and (${device.md}) {
    font-size: 2.7rem;
    border-bottom: none;
    box-shadow: .3rem .6rem .7rem ${props => props.theme.blackLight};
  }

  @media only screen and (${device.lg}) {    
    padding: .9em 0;
    font-size: 3.2rem;
    background-color: ${props => props.theme[`${props.theme.type}`]};   
    color: ${props => props.theme.white};
    letter-spacing: .6rem;
  }
`

export const SectionBody = styled.div`
  background-color: ${props => props.theme.white};
  padding: 2rem 4rem 3.5rem 4rem;

  @media only screen and (${device.md}) {
    margin: 0 1.1rem;
    padding: 3rem 4rem 4rem;
    box-shadow: .3rem .6rem 1rem ${props => props.theme.blackLight};
  }

  @media only screen and (${device.lg}) {
    padding: 4rem 5rem 5rem;
  }
`