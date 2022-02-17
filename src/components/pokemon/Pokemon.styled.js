import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Pokeball from '../../assets/icons/pokeball.svg'
import fightingBackground from '../../assets/misc/fighting-background.png'
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
    background: ${props => props.theme.greyLight}a1;
    box-shadow: .3rem .5rem 1.5rem;
    padding-bottom: 4rem;
    margin-bottom: 3rem;
  }
  
  @media only screen and (${device.lg}) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    row-gap: 15rem;
    background: none;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    padding-bottom: 10rem;
    margin-bottom: 0;
  }

  & > *:last-child {
    margin-bottom: 5rem;
    
    @media only screen and (${device.lg}) {
      margin-bottom: 0;
    }
  } 

  &::after {
    @media only screen and (${device.lg}) {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      grid-row: 3 / span 1;
      grid-column: 1 / 13;
      align-self: center;
      width: 100%;
      height: 100%;
      background-color: ${props => props.theme[`${props.theme.type}Dark`]}f1;
      z-index: -1;
    }
  }
`

export const PokemonImage = styled.div`
  --wobbleDuration: 1.5s;
  position: relative;
  aspect-ratio: 1 / 1;
  width: min(95%, 45rem);  
  z-index: 1;

  @media only screen and (${device.lg}) {    
    width: 75%;
    grid-column: span 6;
    align-self: end;    
  }

  img {
    width: 100%;
    opacity: 0;
    filter: contrast(0) brightness(2);
    transform: scale(0);
    animation: fadeInPokemon .7s var(--wobbleDuration) ease-in-out forwards;
  }

  &::after {
    position: absolute;
    content: url(${Pokeball});
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    aspect-ratio: 1 / 1;
    width: 30%;
    animation: 
      wobble var(--wobbleDuration) .3s cubic-bezier(0.72, 0, 0.28, 1) forwards,
      fadeOut .5s var(--wobbleDuration) forwards;
  }

  @keyframes wobble {
    0% { transform: translate(-50%, -50%) rotate(0); }
    20% { transform: translate(-70%, -50%) rotate(-50deg); }
    60% { transform: translate(-30%, -50%) rotate(50deg); }
    80% { transform: translate(-50%, -50%) rotate(0); }
  }

  @keyframes fadeOut {
    to { 
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes fadeInPokemon {
    75% {
      transform: scale(1);
      filter: 
        contrast(0) 
        brightness(2) 
        drop-shadow(.6rem .8rem .3rem ${props => props.theme.black}); 
    }

    100% {
      transform: scale(1);
      opacity: 1;
      filter:
        contrast(100%)
        brightness(100%)
        drop-shadow(1rem 1.2rem .6rem ${props => props.theme.black});
    }
  }
`

export const FightingAnimation = styled.div`
  width: min(100%, 23.5rem);
  height: 10.6rem;  
  justify-self: center;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: url(${fightingBackground});
  background-size: cover;
  border-radius: 1rem;
  z-index: 1;

  @media only screen and (${device.lg}) {
    position: absolute;  
    grid-row: 3 / span 1;
    grid-column: 6 / span 2;
  }

  img:first-of-type {
    transform: scaleX(-1);
    animation: leftSideTackle 5s infinite;
    z-index: 2;
  }

  img:last-of-type {
    animation: rightSideTackle 5s infinite;
  }

  @keyframes leftSideTackle {
    // double hop
    0% { transform: translateY(0) scaleX(-1); }
    3% { transform: translateY(-1rem) scaleX(-1); }
    6% { transform: translateY(0rem) scaleX(-1); }
    9% { transform: translateY(-1rem) scaleX(-1); }
    12% { transform: translateY(0rem) scaleX(-1); }
    // lunge
    23% { transform: translateX(0) scaleX(-1); }
    26% { transform: translateX(7rem) scaleX(-1); }
    29% { transform: translateX(0) scaleX(-1); }
    // knockback
    76% { transform: translateX(0) scaleX(-1); }
    78% { transform: translateX(-1.5rem) rotate(-15deg) scaleX(-1); }
    83% { transform: translateX(-1.5rem) rotate(-15deg) scaleX(-1); }
    88% { transform: translateX(-1.5rem) scaleX(-1); }
    91% { transform: translateX(0) scaleX(-1); }
  }

  @keyframes rightSideTackle {    
    // knockback
    27% { transform: translateX(0); }
    29% { transform: translateX(1.5rem) rotate(15deg); }
    34% { transform: translateX(1.5rem) rotate(15deg); }
    39% { transform: translateX(1.5rem); }
    42% { transform: translateX(0); }
    // double hop
    49% { transform: translateY(0); }
    52% { transform: translateY(-1rem); }
    55% { transform: translateY(0rem); }
    58% { transform: translateY(-1rem); }
    61% { transform: translateY(0rem); }
    // lunge
    72% { transform: translateX(0); }
    75% { transform: translateX(-7rem); }
    78% { transform: translateX(0); }
  }
`

export const HomeButtom = styled(Link)`
  position: fixed;  
  z-index: 999;
  top: 1.3rem;
  right: 5vw;
  aspect-ratio: 1 / 1;
  width: 4.3rem;
  padding: .8rem;
  border: none;
  border-radius: 50%;
  background-color: ${props => props.theme.white};
  cursor: pointer;

  @media only screen and (${device.sm}) {
    top: 2rem;
    right: 8vw;
    width: 5.5rem;
    padding: 1rem;
    background-color: transparent;
  }

  &:hover {
    background-color: ${props => props.theme.white};
    box-shadow: 0 0 .8rem 1px ${props => props.theme.blackLight};
  }

  svg path {
    fill: ${props => props.theme[`${props.theme.type}`]};
  }
`