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
    background: ${props => props.theme.grey}60;
    box-shadow: 0 .5rem 1.5rem;
    padding-bottom: 5rem;
  }
  
  @media only screen and (${device.lg}) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    row-gap: 15rem;
    box-shadow: none;
    //background: none;
    border-radius: 0;
    width: 100%;
    padding-bottom: 10rem;
  }

  & > *:last-child {
    margin-bottom: 5rem;
    
    @media only screen and (${device.lg}) {
      margin-bottom: 0;
    }
  }

  & > img {
    width: min(95%, 45rem);
    z-index: 1;

    @media only screen and (${device.lg}) {
      width: 80%;
      grid-column: span 6;
      align-self: end;
    }
  }

  &::after {
    @media only screen and (${device.lg}) {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      grid-row: 2 / 3;
      grid-column: 1 / 13;
      align-self: center;
      width: 100%;
      height: 100%;
      background: ${props => props.theme[`${props.theme.type}Dark`]};
      box-shadow: .4rem .6rem 1rem ${props => props.theme.black};
      z-index: 0;
    }
  }
`