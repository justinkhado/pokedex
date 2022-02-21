import styled from 'styled-components'
import { device } from '../../sharedStyles/breakpoints'

export const ScrollButton = styled.button.attrs({
  type: 'button',
  'aria-label': 'scroll to top'
})`
  transition: 
    background-color .3s,
    outline .3s,
    opacity .3s;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  opacity: ${props => props.visible ? '1' : '0'};
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

  &:focus {
    background-color: ${props => props.theme.primary};
    outline: 2px solid ${props => props.theme.greyLight};
    cursor: pointer;

    svg path {
      fill: ${props => props.theme.white};
    }
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${props => props.theme.primary};
      outline: 2px solid ${props => props.theme.greyLight};
      cursor: pointer;

      svg path {
        fill: ${props => props.theme.white};
      } 
    }
  }
`

export const ScrollCheck = styled.div`
  position: absolute;
  top: 50vh;
`