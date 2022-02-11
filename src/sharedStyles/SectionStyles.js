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
  padding: 1.8rem 0;
  margin: 0;
  background-color: ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.grey};
  color: ${props => props.theme[`${props.theme.type}`]};
  font-size: 2.2rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;

  @media only screen and (${device.md}) {
    border-bottom: none;
    box-shadow: .5rem .8rem .8rem ${props => props.theme.blackLight};
  }

  @media only screen and (${device.lg}) {
    box-shadow: .3rem .6rem 1rem ${props => props.theme.blackLight};
    background-color: ${props => props.theme[`${props.theme.type}`]};   
    color: ${props => props.theme.white};
    font-size: 2.6rem;
    font-weight: 700;
    letter-spacing: 3px;
  }
`

export const SectionBody = styled.div`
  background-color: ${props => props.theme.white};
  padding: 2rem 4rem 3.5rem 4rem;

  @media only screen and (${device.md}) {
    margin: .5rem 2rem 0 2rem;
    box-shadow: .3rem .6rem 1rem ${props => props.theme.blackLight};
  }

  @media only screen and (${device.lg}) {
    padding: 4rem 5rem 5rem;
    margin: 0 1px;
  }
`