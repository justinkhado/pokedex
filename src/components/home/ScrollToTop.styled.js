import styled from 'styled-components'
import { device } from '../../sharedStyles/breakpoints'

export const ScrollButton = styled.button`
  transition: all .4s;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  opacity: ${props => props.visible ? '100%' : 0};

  position: fixed;
  z-index: 99;
  bottom: 2rem;
  right: 3rem;
  aspect-ratio: 1 / 1;
  width: 7rem;
  border: none;
  border-radius: 50%;
  outline: 2px solid ${props => props.theme.primaryLight};
  outline-offset: -.75rem;
  box-shadow: .2rem .3em .8rem ${props => props.theme.black};
  background-color: ${props => props.theme.greyLight};

  @media only screen and (${device.lg}) {    
    bottom: 5rem;
    right: 7rem;
  }
  
  img {
    filter: invert(17%) sepia(48%) saturate(4544%) hue-rotate(3deg) brightness(99%) contrast(107%);
    height: 2.6rem;
  }

  &:active {
    background-color: ${props => props.theme.primary};
    outline: 2px solid ${props => props.theme.greyLight};

    img {
      filter: invert(95%);
    }
  }

  @media only screen and (${device.sm}) {
    &:hover {
      cursor: pointer;
      background-color: ${props => props.theme.primary};
      outline: 2px solid ${props => props.theme.greyLight};

      img {
        filter: invert(95%);
      }
    }
  }
`

export const ScrollCheck = styled.div`
  position: absolute;
  top: 50vh;
`