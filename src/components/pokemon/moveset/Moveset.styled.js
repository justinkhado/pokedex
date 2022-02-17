import styled from 'styled-components'
import { SectionContainer, SectionBody } from '../../../sharedStyles/SectionStyles'
import { device } from '../../../sharedStyles/breakpoints'

export const MoveContainer = styled(SectionContainer)`
  @media only screen and (${device.lg}) {
    width: 90rem;
    grid-column: span 12;
    align-self: start;
  }
`

export const Movelist = styled(SectionBody)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
  padding-right: 0;
`

export const MovelistFilter = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 0 2rem 2.5rem auto;

  @media only screen and (${device.sm}) {
    margin: 0 5rem 2.5rem auto;
  }

  @media only screen and (${device.lg}) {
    gap: 3rem;
    margin: 0 16rem 2.5rem auto;
  }

  select {
    color: ${props => props.theme[`${props.theme.type}Dark`]};
    border: none;
    border-bottom: 1px solid ${props => props.theme[`${props.theme.type}Dark`]};
    padding: .5em .5em .3em 0;
    font-size: ${props => props.theme.fontSm};
    text-transform: uppercase;
    cursor: pointer;

    @media only screen and (${device.md}) {
      font-size: ${props => props.theme.fontMd};
      font-weight: 700;
    }
  }

  option {
    font-size: ${props => props.theme.fontXs};

    @media only screen and (${device.md}) {
      font-size: ${props => props.theme.fontSm};
    }
  }
`

export const DamageClass = styled.div`
  display: flex;
  justify-content: center;
  
  img {
    width: 3.5rem;

    @media only screen and (${device.lg}) {
      width: 4.5rem;
    }
  }
`
