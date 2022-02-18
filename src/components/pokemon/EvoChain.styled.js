import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SectionContainer, SectionBody } from '../../sharedStyles/SectionStyles'
import { ReactComponent as Arrow } from '../../assets/icons/down-arrow.svg'
import { device } from '../../sharedStyles/breakpoints'

export const EvolutionContainer = styled(SectionContainer)`
  @media only screen and (${device.lg}) {
    width: fit-content;
    max-width: 120rem;
    grid-column: span 12;
  }
`
export const PokemonLink = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  margin: .5rem;
  opacity: 0;
  ${props => props.$visible && `animation: fadeInEvolution .3s ${props.delay}s forwards;`}
  transition: transform .2s;

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus {    
    transform: scale(1.05);

    &::after {
      opacity: 1;
    }
  }

  &:active {    
    transform: scale(.98);

    &::before {
      opacity: 1;
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity .2s;
  }

  &::after {
    box-shadow: .2rem .4rem .5rem ${props => props.theme.black};
  }

  &::before {
    box-shadow: .1rem .2rem .3rem ${props => props.theme.black};
  }

  img {
    max-width: 10rem;

    @media only screen and (${device.md}) {
      max-width: 15rem;
    }

    @media only screen and (${device.lg}) {
      max-width: 18rem;
    }
  }

  span {    
    padding: .5rem;
    border-radius: .5rem;
    text-transform: uppercase;
    background-color: ${props => props.theme[`${props.theme.type}Light`]};
    color: ${props => props.theme.black};
    font-weight: 500;
    font-size: ${props => props.theme.fontXs};
    letter-spacing: 1px;

    @media only screen and (${device.md}) {
      font-size: ${props => props.theme.fontSm};
    }
  }

  @keyframes fadeInEvolution {
    to { opacity: 1; }
  }
`

export const BaseStage = styled(SectionBody)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (${device.lg}) {
    flex-direction: row;
    justify-content: center;
    padding: 7rem;
  }
`

export const EvolutionStage = styled.div`
  display: flex;  
  flex-wrap: wrap;
  justify-content: center;
  
  @media only screen and (${device.lg}) {
    ${props => props.eevee ? `flex-direction: row` : `flex-direction: column`};
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (${device.lg}) {
      flex-direction: row;
    }
  }
`

export const EvolutionArrow = styled(Arrow)`
  flex-shrink: 0;
  width: 5rem;
  margin: 2rem;

  @media only screen and (${device.lg}) {
    transform: rotate(-90deg);
  }

  path {
    fill: ${props => props.theme[`${props.theme.type}Dark`]};
  }
`