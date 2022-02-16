import styled from 'styled-components'
import { device } from '../../sharedStyles/breakpoints'

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;
  position: fixed;
  top: 1.9rem;
  right: 1rem;
  z-index: 999;

  @media only screen and (${device.sm}) {
    top: 3.1rem;
    right: 3rem;
  }
  
  @media only screen and (${device.md}) {
    right: 5rem;
  }
  
  @media only screen and (${device.lg}) {
    right: 12rem;
  }
`

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  
  width: 13rem;
  height: 3.3rem;
  border-radius: 10rem;
  outline: 2px solid ${props => props.theme.blackLight};
  transition: all .2s;

  @media only screen and (${device.sm}) {
    width: 15.5rem;
  }
  
  @media only screen and (${device.md}) {
    width: 17.5rem;
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
      margin-left: .5rem;
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
    height: 75%;
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

export const Filter = styled.div`
  align-self: flex-end;
  width: 1.8rem;
`

export const FilterButton = styled.button`
  width: 100%;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    svg path {
      filter: brightness(${props => props.filtering ? .7 : .4});
    }
  }

  svg {
    aspect-ratio: 1 / 1;
    height: 100%;

    path {
      fill: ${props => props.filtering ? props.theme.primary : props.theme.greyDark};
    }
  }
`

export const FilterDropdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: absolute;
  right: 0;
  background-color: ${props => props.theme.white}f1;
  border: .3rem solid ${props => props.theme.primary};
  border-radius: 2rem 0 2rem 2rem;
  padding: 2rem 1.5rem;
  margin-top: 1rem;
  opacity: 0;
  animation: fadeInFilter .5s forwards;

  @keyframes fadeInFilter {
    to { opacity: 1; }
  }
`

export const FilterTitle = styled.p`
  margin-top: 0;
  font-size: ${props => props.theme.fontMd};
  font-weight: 500;
  text-align: center;
  color: ${props => props.theme.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
`

export const GenerationFilter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 7rem);
  justify-content: center;
  gap: 1rem;
  font-size: ${props => props.theme.fontSm};

  label {
    display: block;
    background: ${props => props.theme.steelLight};
    padding: .5em .8em;
    border-radius: 1.5rem;
    text-align: center;
    cursor: pointer;
  }

  input {
    position: absolute;
    left: -100vw;
  }

  input:checked + label {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.white};
  }
`

export const TypeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 7rem);
  justify-content: center;
  justify-items: center;
  gap: 1.5rem .7rem;

  label {
    display: block;    
    cursor: pointer;

    div {
      font-size: 1.1rem;
    }
  }

  input {
    position: absolute;
    left: -100vw;
  }

  input:checked + label {
    outline: .2rem solid ${props => props.theme.primary};
    outline-offset: .2rem;
  }
`