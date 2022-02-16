import styled from 'styled-components'
import { device } from '../../sharedStyles/breakpoints'

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  
  position: fixed;
  width: 15rem;
  height: 3.3rem;
  top: 1.9rem;
  right: 1rem;
  z-index: 999;
  border-radius: 10rem;
  outline: 2px solid ${props => props.theme.blackLight};
  transition: all .2s;
  
  @media only screen and (${device.sm}) {
    top: 3.1rem;
    right: 3rem;
  }
  
  @media only screen and (${device.md}) {
    right: 5rem;    
    width: 17.5rem;
  }
  
  @media only screen and (${device.lg}) {
    right: 10rem;
  }

  &:focus-within {
    outline: 2px solid ${props => props.theme.primary};
    background-color: ${props => props.theme.white};
    
    @media only screen and (${device.md}) {
      outline-offset: .4rem;
      width: 20rem;
    }
  }

  &:hover {
    @media only screen and (${device.md}) {
      outline-offset: .4rem;
    }
  }
  
  input {
    background: transparent;
    border: none;
    width: 100%;
    font-size: ${props => props.theme.fontMd};
    color: ${props => props.theme.blackLight};
    margin-left: .3rem;

    @media only screen and (${device.md}) {      
      font-size: ${props => props.theme.fontLg};
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${props => props.theme.greyDark};
    }
  }

  svg {
    flex-shrink: 0;
    aspect-ratio: 1 / 1;
    height: 80%;
    margin-left: .5rem;
  }

  input:focus + svg {
    animation: 2.5s spin infinite cubic-bezier(.6,0,.4,1);
  }

  @keyframes spin {
    to { transform: rotate(1080deg); }
  }
`

export const Clear = styled.button`
  flex-shrink: 0;
  margin-right: .5rem;
  aspect-ratio: 1 / 1;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: ${props => props.theme.blackLight};
  font-size: ${props => props.theme.fontSm};
  font-weight: 900;
  cursor: pointer;
  transition: all .2s;

  @media only screen and (${device.md}) {
    font-size: ${props => props.theme.fontXs};
  }

  &:active,
  &:hover {
    background-color: ${props => props.theme.grey};
  }
`