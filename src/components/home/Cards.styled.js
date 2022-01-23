import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledCards = styled.div`
  margin: 0 10rem 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
`

const StyledCard = styled(Link)`
  position: relative;
  height: 26rem;
  width: 22rem;
  border-radius: 0.5rem;

  background: ${props => props.theme.grey}a1;
  background-image: linear-gradient(
    to right,
    ${props => props.theme[props.types[0]]}70 0%,
    ${props => props.theme[props.types[0]]}70 50%,
    ${props => props.types.length > 1 ? props.theme[props.types[1]] : props.theme[props.types[0]]}70 50%
  );
  
  text-decoration: none;
  box-shadow: 0.3rem 0.5rem 1rem ${props => props.theme.blackLight};
  transition: all .1s;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  &:link,
  &:visited {
    color: ${props => props.theme.blackLight}
  }

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0.5rem 0.7rem 1.3rem ${props => props.theme.blackLight};
    background: ${props => props.theme.grey};
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

  img {
    height: 18rem;
    z-index: 1;
  }
`

const Number = styled.div`
  position: absolute;
  top: 0rem;
  left: 1rem;
  font-size: 6rem;
  font-weight: 900;
  color: ${props => props.theme.greyLight};
`

const Types = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
`

const Name = styled.div`
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: .1rem;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`

export {
  Name,
  Number,
  StyledCards,
  StyledCard,
  Types
}