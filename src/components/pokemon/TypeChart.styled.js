import styled from 'styled-components'
import {
  SectionContainer,
  SectionHeader,
  SectionBody
} from '../../sharedStyles/SectionStyles'
import { device } from '../../sharedStyles/breakpoints'

export const TypeChartContainer = styled(SectionContainer)`
  @media only screen and (${device.lg}) {
    grid-column: 1 / span 5;
    justify-self: end;
    align-self: center;
    margin: 13rem 0;
    z-index: 1;
  }
`

export const TypeChartHeader = styled(SectionHeader)`
  @media only screen and (${device.lg}) {
    padding: .8em 0;
    z-index: -1;
    background-color: ${props => props.theme.white};
    color: ${props => props.theme[`${props.theme.type}`]};
    border-radius: 2.5rem 2.5rem 0 0;
    box-shadow: .3rem .6rem 1rem ${props => props.theme.blackLight};
  }
`

export const TypeEffectiveness = styled(SectionBody)`
  color: ${props => props.theme[`${props.theme.type}Dark`]};

  @media only screen and (${device.lg}) {
    background-color: ${props => props.theme[`${props.theme.type}Light`]};
    color: ${props => props.theme.black};
    margin: 0;
    border-radius: 0 0 2.5rem 2.5rem;
  }
`

export const ChartLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;
  gap: 2rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  span {
    font-weight: 500;
    justify-self: end;
    margin-right: 1rem;

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
    background-color: ${props => props.theme.white};
  }

  div {
    font-size: ${props => props.theme.fontXs};

    @media only screen and (${device.md}) {
      font-size: ${props => props.theme.fontSm}; 
    }
  }
`