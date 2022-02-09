import styled from 'styled-components'
import { device } from '../../sharedStyles/breakpoints'

export const Container = styled.div`  
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  row-gap: 2rem;
  margin: 0 auto;

  @media only screen and (${device.sm}) {
    padding-top: 2rem;
    row-gap: 5rem;
  }

  @media only screen and (${device.md}) {
    width: 90vw;
    border-radius: 1rem;
    background: ${props => props.theme.white}a1;
    box-shadow: 0 .5rem 1.5rem;
    margin-bottom: 5rem;
  }
  
  @media only screen and (${device.lg}) {
    padding: 1rem 5rem 3rem 5rem;
    grid-template-columns: 1fr 1fr;
    row-gap: 7rem;
  }

  & > *:last-child {
    margin-bottom: 5rem;
  }

  & > img {
    width: min(95%, 45rem);

    @media only screen and (${device.lg}) {
      padding: 3rem;
      width: 80%;
    }
  }
`