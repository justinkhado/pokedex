import styled from 'styled-components'
import {
  SectionContainer,
  SectionHeader,
  SectionBody
} from '../../sharedStyles/SectionStyles'
import { device } from '../../sharedStyles/breakpoints'

export const TypeChartContainer = styled(SectionContainer)`
  @media only screen and (${device.lg}) {
    grid-column: 8 / span 5;
    justify-self: center;
    align-self: start;
    margin: 10rem 0;
    width: min(60rem, 90%);
  }
`

export const TypeChartHeader = styled(SectionHeader)`
  @media only screen and (${device.lg}) {
    padding: 0;
    padding-left: 2vw;
    background-color: transparent;
    color: ${props => props.theme.white};
    font-size: 3.6rem;
    font-weight: 400;
    letter-spacing: .5rem;
    white-space: nowrap;
    box-shadow: none;
  }
`

export const TypeEffectiveness = styled(SectionBody)`
  color: ${props => props.theme[`${props.theme.type}Dark`]};

  @media only screen and (${device.lg}) {
    background-color: transparent;
    color: ${props => props.theme.white};
    padding: 4rem 0 0 5rem;
    margin: 0;
    box-shadow: none;
  }
`

export const ChartLine = styled.div`
  display: grid;
  grid-template-columns: 4rem 5fr;
  align-items: center;
  gap: 2rem;

  &:not(:last-child) {
    margin-bottom: 2rem;

    @media only screen and (${device.lg}) {
      margin-bottom: 2.5rem;
    }
  }

  span {
    font-weight: 500;
    justify-self: end;

    @media only screen and (${device.md}) {
      font-size: ${props => props.theme.fontLg};
    }
  }
`

export const Types = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  background-color: ${props => props.theme[`${props.theme.type}Light`]};
  padding: 1rem .5rem;
  border-radius: .5rem;

  @media only screen and (${device.lg}) {
    max-width: 90%;
    padding: 1.3rem 1rem;
  }

  div {
    font-size: ${props => props.theme.fontXs};

    @media only screen and (${device.md}) {
      font-size: ${props => props.theme.fontSm}; 
    }
  }
`