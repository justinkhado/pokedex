import styled from 'styled-components'
import { device } from '../../sharedStyles/breakpoints'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 1.9rem;
  right: .3rem;
  z-index: 999;
  width: 20rem;

  @media only screen and (${device.sm}) {
    top: 3.1rem;
    right: 1rem;
  }

  @media only screen and (${device.md}) {
    right: 7vw;
  }
`

const SearchBox = styled.div`
  position: relative;
  height: 3.3rem; 
  
  input {
    width: 17.5rem;
    border: none;
    border-radius: 10rem;
    outline: 2px solid ${props => props.theme.blackLight};    
    padding: .6rem 0 .6rem 4rem;
    font-size: 1.8rem;
    color: ${props => props.theme.blackLight};
    transition: all .2s;

    &:hover {
      outline-offset: .4rem;
    }

    &:focus {
      outline: 2px solid ${props => props.theme.primary};
      outline-offset: .4rem;
      
      @media only screen and (${device.md}) {
        width: 20rem;
      }
    }

    &::placeholder {
      color: ${props => props.theme.grey};
    }
  }

  div {
    display: flex;
    align-items: center;
    position: absolute;
    height: inherit;
    top: 50%;
    transform: translateY(-50%);
    left: .5rem;

    & > svg {
      height: 80%;
      transition: rotate 5s;
    }
  }

  input:focus + div svg {
    animation: 2.5s spin infinite cubic-bezier(.6,0,.4,1);
  }

  @keyframes spin {
    to { transform: rotate(1080deg); }
  }
`

const Clear = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: .5rem;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: ${props => props.theme.blackLight};
  font-size: 2rem;
  font-weight: 900;
  cursor: pointer;
  transition: all .2s;

  @media only screen and (${device.md}) {
    font-size: 1.2rem;
  }

  &:active,
  &:hover {
    background-color: ${props => props.theme.grey};
  }

  &:hover + input {
    outline-offset: .4rem;
  }

`

export {
  Clear,
  Container,
  SearchBox
}