import styled from 'styled-components'
import { device } from '../../sharedStyles/breakpoints'

export const Container = styled.div`
  position: relative;
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
    grid-template-columns: repeat(12, minmax(0, 1fr));
    row-gap: 15rem;
    box-shadow: none;
    background: none;
    width: 100%;
    margin-bottom: 10rem;
  }

  & > *:last-child {
    margin-bottom: 5rem;
    
    @media only screen and (${device.lg}) {
      margin-bottom: 0;
    }
  }

  & > img {
    width: min(95%, 45rem);

    @media only screen and (${device.lg}) {
      width: 100%;
      grid-column: span 6;
    }
  }
`