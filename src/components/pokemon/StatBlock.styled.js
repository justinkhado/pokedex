import styled from 'styled-components'
import {
  SectionContainer,
  SectionHeader,
  SectionBody
} from '../../sharedStyles/SectionStyles'
import { device } from '../../sharedStyles/breakpoints'

export const StatContainer = styled(SectionContainer)`
  @media only screen and (${device.lg}) {
    grid-column: 1 / span 5;
    justify-self: end;
    align-self: center;
    border-radius: 2.5rem;
    box-shadow: .3rem .6rem 1rem ${props => props.theme.blackLight};
  }
`

export const StatHeader = styled(SectionHeader)`
  @media only screen and (${device.lg}) {
    padding: .8em 0;
    background-color: ${props => props.theme.white};
    color: ${props => props.theme[`${props.theme.type}`]};
    border-radius: 2.5rem 2.5rem 0 0;
    box-shadow: none;
  }
`

export const Stats = styled(SectionBody)`
  color: ${props => props.theme[`${props.theme.type}Dark`]};

  @media only screen and (${device.lg}) {
    background-color: ${props => props.theme[`${props.theme.type}Light`]};
    color: ${props => props.theme.black};
    margin: 0;
    border-radius: 0 0 2.5rem 2.5rem;
    box-shadow: none;
  }

  div:not(:last-child) {
    margin-bottom: 1rem;

    @media only screen and (${device.lg}) {
      margin-bottom: 2rem;
    }
  }
`

export const StatLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
  gap: 2rem;
  
  span {
    font-size: ${props => props.theme.fontMd};
    font-weight: 500;
    justify-self: end;

    @media only screen and (${device.md}) {
      font-size: ${props => props.theme.fontLg}
    }
  }

  div {
    position: relative;
    background-color: ${props => props.theme[`${props.theme.type}Light`]};
    width: 100%;
    padding: 2px .5rem;
    border-radius: .5rem;
    color: ${props => props.theme.white};
    font-size: ${props => props.theme.fontSm};
    z-index: 0;

    @media only screen and (${device.md}) {
      font-size: ${props => props.theme.fontMd};
    }

    @media only screen and (${device.lg}) {
      background-color: ${props => props.theme.white};
      padding: .5rem .8rem;
    }

    &::after {
      content: '';
      position: absolute;
      height: 100%;
      width: clamp(3rem, calc(${props => props.statValue / 180} * 100%), 100%);
      top: 0;
      left: 0;
      border-radius: .5rem;
      background-color: ${props => props.theme[`${props.theme.type}Dark`]};
      z-index: -1;
      transform: scaleX(0);
      ${props => props.visible && 
        `animation: grow 1.2s ease-out forwards;`
      }
      transform-origin: 0% 50%;
    }
  }

  @keyframes grow {
    to { transform: scaleX(1); }
  }
`

export const Total = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
  padding-top: 1rem;
  gap: 2rem;
  color: ${props => props.theme.black};

  @media only screen and (${device.lg}) {
    display: flex;
    justify-content: space-between;
    padding: 1.3rem 3.5rem;
    margin: 3rem auto 0;
    width: 23rem;
    background-image: linear-gradient(
      120deg,
      ${props => props.theme[`${props.theme.type}`]} 52%,
      ${props => props.theme.white} 52%,
      ${props => props.theme.white}
    );
    border-radius: 3rem;
  }

  span:first-child {
    text-transform: uppercase;
    font-weight: 500;
    justify-self: end;

    @media only screen and (${device.md}) {
      font-size: ${props => props.theme.fontLg};
    }

    @media only screen and (${device.lg}) {      
      color: ${props => props.theme.white};
      letter-spacing: 1px;
    }
  }

  span:last-child {
    color: ${props => props.theme.blackLight};
    margin-left: .5rem;
    
    @media only screen and (${device.md}) {
      font-size: ${props => props.theme.fontLg};
    }
    
    @media only screen and (${device.lg}) {
      font-weight: 500;
      letter-spacing: 1px;
    }
  }
`