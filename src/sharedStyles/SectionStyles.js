import styled from 'styled-components'
import { device } from './breakpoints'

export const SectionContainer = styled.section`
  margin: 1rem 0;
  width: min(45rem, 100%);

  @media only screen and (${device.sm}) {
    margin: 2.5rem 0;
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
`

export const SectionBody = styled.div`
  background-color: ${props => props.theme.white};
  padding: 2rem 4rem 3.5rem 4rem;
`