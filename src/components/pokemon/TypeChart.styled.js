import styled from 'styled-components'
import { SectionBody } from '../../sharedStyles/SectionStyles'
import { device } from '../../sharedStyles/breakpoints'

export const TypeEffectiveness = styled(SectionBody)`
  color: ${props => props.theme[`${props.theme.type}Dark`]};
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

  div {
    font-size: ${props => props.theme.fontXs};

    @media only screen and (${device.lg}) {
      font-size: ${props => props.theme.fontSm}; 
    }
  }
`