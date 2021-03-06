import styled from 'styled-components'
import { ClearButton } from '../../../sharedStyles/ClearButton'
import { device } from '../../../sharedStyles/breakpoints'

export const FilterContainer = styled.div`
  align-self: center;
`

export const FilterButton = styled.button.attrs({
  type: 'button',
  'aria-label': 'filter'
})`
  height: 2.8rem;
  width: 2.8rem;
  padding: .6rem;
  background: transparent;
  border: none;
  border-radius: 50%;
  outline: 1px solid ${props => props.filtering ? props.theme.primary : props.theme.greyDark};
  cursor: pointer;
  transition: outline-offset .1s;
  
  @media (hover: hover) {
    &:hover {    
      filter: brightness(${props => props.filtering ? .8 : .4});
      outline-offset: .2rem;
    }
  }

  &:focus-within {
    outline-offset: .2rem;
  }

  svg path {
    fill: ${props => props.filtering ? props.theme.primary : props.theme.greyDark};
  }
`

export const FilterDropdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: absolute;
  right: 0;
  background-color: ${props => props.theme.white}c1;
  backdrop-filter: blur(3px);
  border: .3rem solid ${props => props.theme.primary};
  border-radius: 2rem 0 2rem 2rem;
  padding: 2rem 1.5rem;
  margin-top: 1rem;
  opacity: 0;
  animation: fadeInFilter .3s forwards;

  @media only screen and (${device.sm}) {
    margin-right: 1.8rem;
  }

  @keyframes fadeInFilter {
    to { opacity: 1; }
  }
`

export const FilterHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 1.8rem;
`

export const FilterTitle = styled.span`
  margin-top: 0;
  font-size: ${props => props.theme.fontLg};
  font-weight: 500;
  text-align: center;
  color: ${props => props.theme.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
`

export const FilterClear = styled(ClearButton)`
  position: absolute;
  top: 50%;
  right: 4rem;
  transform: translateY(-50%);
  font-size: ${props => props.theme.fontSm};
  opacity: 0;
  animation: fadeInFilterClear .2s forwards;

  @media only screen and (${device.md}) {
    font-size: ${props => props.theme.fontXs};
  }

  @keyframes fadeInFilterClear {
    to { opacity: 1; }
  }
`

export const GenerationFilter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 7rem);
  justify-content: center;
  gap: 1rem;
  font-size: ${props => props.theme.fontSm};

  label {
    display: block;
    background: ${props => props.theme.white};
    padding: .5em .8em;
    border: 1px solid ${props => props.theme.grey};
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

  @media only screen and (${device.md}) {
    gap: 1.5rem 1rem;
  }

  label {
    display: block;    
    cursor: pointer;

    div {
      font-size: 1.1rem;

      @media only screen and (${device.md}) {
        font-size: 1.3rem;
      }
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