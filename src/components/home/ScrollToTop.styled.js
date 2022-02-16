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
  
  svg {
    height: 2.6rem;

    path {
      fill: ${props => props.theme.primary};
    }
  }

  &:active,
  &:hover {
    background-color: ${props => props.theme.primary};
    outline: 2px solid ${props => props.theme.greyLight};
    cursor: pointer;

    svg path {
      fill: ${props => props.theme.white};
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