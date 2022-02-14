import styled from 'styled-components'
import Pokeball from '../../assets/icons/pokeball.svg'
import { device } from '../../sharedStyles/breakpoints'

export const PokemonImage = styled.div`
  --wobbleDuration: 1.5s;
  position: relative;
  width: min(95%, 45rem);
  z-index: 1;

  @media only screen and (${device.lg}) {
    aspect-ratio: 1 / 1;
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