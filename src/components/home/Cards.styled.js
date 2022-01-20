import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledCards = styled.div`
  margin: 0 3rem 5rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const StyledCard = styled(Link)`
  position: relative;
  height: 25.6rem;
  width: 20.2rem;
  border: 1px solid white;
  border-radius: 0.5rem;
  margin: 2rem;

  //background: ${props => props.theme.white}e1;

  //background: ${props => props.theme[props.type]}70;

  background: white;
  background-image: linear-gradient(
    to right,
    ${props => props.theme[props.type[0]]}70 0%,
    ${props => props.theme[props.type[0]]}70 50%,
    ${props => props.type.length > 1 ? props.theme[props.type[1]] : props.theme[props.type[0]]}70 50%
  );
  /* background-image: linear-gradient(
    to right,
    ${props => props.theme[props.type[0]]}70,
    ${props => props.type.length > 1 ? props.theme[props.type[1]] : props.theme[props.type[0]]}70
  ); */
  
  text-decoration: none;
  box-shadow: 0.3rem 0.5rem 1rem ${props => props.theme.blackLight};
  transition: all .2s;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &:link,
  &:visited {
    color: ${props => props.theme.blackLight}
  }

  &:hover {
    transform: scale(1.06);
    box-shadow: 0.5rem 0.7rem 1.3rem ${props => props.theme.blackLight};
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0.2rem 0.2rem 0.8rem ${props => props.theme.blackLight};
  }

  img {
    height: 18rem;
    padding: 0 1rem;
  }
`

const Number = styled.div`
  position: absolute;
  top: 0rem;
  left: .7rem;
  font-size: 4.2rem;
  font-weight: 900;
  color: white;
  //text-shadow: 0 0 .3rem ${props => props.theme.blackLight};
`

const Types = styled.div`
  align-self: flex-end;
  margin-top: 1rem;
  margin-right: 1rem;
`

const Type = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 1.8rem;
  width: 6rem;
  border-radius: 0.5rem;
  background: ${props => props.theme[props.type]};
  
  color: ${props => props.theme.white};
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.05rem;

  &:not(:last-child) {
    margin-bottom: .2rem;
  }
`

export {
  Number,
  StyledCards,
  StyledCard,
  Type,
  Types
}