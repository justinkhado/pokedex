import styled from 'styled-components'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import { device } from '../../sharedStyles/breakpoints'

export const StyledCards = styled(InfiniteScroll)`
  display: grid;
  grid-template-columns: repeat(auto-fill, min(28%, 22rem));
  justify-content: space-around;
  padding-bottom: 10rem;
  margin: 0 1rem;
  gap: 1.5rem 1rem;

  @media only screen and (${device.sm}) {
    gap: 2rem;
  }

  @media only screen and (${device.md}) {
    margin: 0 3rem;
    gap: 3rem;
  }

  @media only screen and (${device.lg}) {
    margin: 0 10rem;
  }
`

export const StyledCard = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  position: relative;
  width: min(100%, 22rem);
  aspect-ratio: 11 / 13;
  border-radius: .5rem;
  font-size: min(2vw, 1.6rem);
  text-decoration: none;
  box-shadow: .3rem .5rem 1rem ${props => props.theme.blackLight};
  transition: 
    transform .1s,
    box-shadow .1s,
    background-color .1s,
    background-image .1s;

  background: ${props => props.theme.grey}a1;
  background-image: linear-gradient(
    to right,
    ${props => props.theme[props.types[0]]}70 0%,
    ${props => props.theme[props.types[0]]}70 50%,
    ${props => props.types.length > 1 ? props.theme[props.types[1]] : props.theme[props.types[0]]}70 50%
  );  

  &:link,
  &:visited {
    color: ${props => props.theme.blackLight}
  }

  &:hover,
  &:focus {    
    transform: scale(1.05);
    box-shadow: 0.5rem 0.7rem 1.3rem ${props => props.theme.blackLight};
    background-color: ${props => props.theme.grey};
    background-image: linear-gradient(
      to right,
      ${props => props.theme[props.types[0]]}90 0%,
      ${props => props.theme[props.types[0]]}90 50%,
      ${props => props.types.length > 1 ? props.theme[props.types[1]] : props.theme[props.types[0]]}90 50%
    );
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0.2rem 0.2rem 0.8rem ${props => props.theme.blackLight};
  }

  & > img {
    z-index: 1;
    width: 75%;

    @media only screen and (${device.lg}) {
      width: 80%;
    }
  }
`

export const Number = styled.div`
  position: absolute;
  top: .1em;
  left: .3em;
  font-size: 3em;
  font-weight: 700;
  color: ${props => props.theme.greyLight};

  @media only screen and (${device.sm}) {
    top: 0;
    font-size: 3.8em;
    font-weight: 900;
  }
`

export const Types = styled.div`
  position: absolute;
  top: .5rem;
  right: .5rem;

  @media only screen and (${device.md}) {
    top: 1.6rem;
    right: 1.2rem;
  }

  div {
    &:not(:last-child) {
      margin-bottom: 1px;
    }

    @media only screen and (${device.sm}) {
      &:not(:last-child) {
        margin-bottom: .2rem;
      }
    }  
  }
`

export const Name = styled.div`
  color: white;
  font-size: 1.7em;
  font-weight: 700;
  letter-spacing: .05em;
  text-transform: uppercase;
  margin-bottom: .5em;
`
