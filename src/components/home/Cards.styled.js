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
  box-shadow: .4rem .6rem .8rem ${props => props.theme.blackLight};
  background-color: ${props => props.theme.grey}a1;
  background-image: linear-gradient(
    to right,
    ${props => props.theme[props.types[0]]}70 0%,
    ${props => props.theme[props.types[0]]}70 50%,
    ${props => props.types.length > 1 ? props.theme[props.types[1]] : props.theme[props.types[0]]}70 50%
  );
  transition:
    transform .2s,
    background-color .2s,
    box-shadow .2s;
    
  &:hover,
  &:focus {
    transform: scale(1.05);
    background-color: ${props => props.theme.grey};
    background-image: linear-gradient(
      to right,
      ${props => props.theme[props.types[0]]}8a 0%,
      ${props => props.theme[props.types[0]]}8a 50%,
      ${props => props.types.length > 1 ? props.theme[props.types[1]] : props.theme[props.types[0]]}8a 50%
    );
    box-shadow: .5rem .7rem 1.3rem ${props => props.theme.blackLight};
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: .2rem .4rem .5rem ${props => props.theme.blackLight};
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
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: .5em;

  @media only screen and (${device.sm}) {
    font-size: 1.7rem;
  }

  @media only screen and (${device.md}) {
    font-size: 2.4rem;
  }

  @media only screen and (${device.lg}) {
    font-size: 2.8rem;
  }
`
