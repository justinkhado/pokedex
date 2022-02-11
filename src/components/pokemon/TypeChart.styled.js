import styled from 'styled-components'
import {
  SectionContainer,
  SectionHeader,
  SectionBody
} from '../../sharedStyles/SectionStyles'
import { device } from '../../sharedStyles/breakpoints'

export const TypeChartContainer = styled(SectionContainer)`
  @media only screen and (${device.lg}) {
    grid-column: span 6;
    align-self: center;
    margin: 15rem 0;
    z-index: 1;
  }
`

export const TypeChartHeader = styled(SectionHeader)`
  @media only screen and (${device.lg}) {
    background-color: ${props => props.theme.white};
    color: ${props => props.theme[`${props.theme.type}`]};
    border-radius: 3rem 3rem 0 0;
  }
`

export const TypeEffectiveness = styled(SectionBody)`
  color: ${props => props.theme[`${props.theme.type}Dark`]};

  @media only screen and (${device.lg}) {
    background-color: ${props => props.theme[`${props.theme.type}Light`]};
    color: ${props => props.theme.black};
    margin: 0;
    border-radius: 0 0 3rem 3rem;
  }
`

export const ChartLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  span {
    font-weight: 500;

    @media only screen and (${device.lg}) {
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

    @media only screen and (${device.lg}) {
      font-size: ${props => props.theme.fontSm}; 
    }
  }
`