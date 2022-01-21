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
  height: 27rem;
  width: 22rem;
  border: 1rem solid ${props => props.theme.white};
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
    transform: scale(1.04);
    box-shadow: 0.5rem 0.7rem 1.3rem ${props => props.theme.blackLight};
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0.2rem 0.2rem 0.8rem ${props => props.theme.blackLight};
  }

  img {
    height: 16.8rem;
    padding: 0 1rem;
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
  border: 1px solid ${props => props.theme.greyDark};
  border-radius: 0.5rem;
  background: ${props => props.theme[props.type]};
  
  color: ${props => props.theme.white};
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.05rem;

  box-shadow: inset .15rem .1rem ${props => props.theme.white}a1;

  &:not(:last-child) {
    margin-bottom: .2rem;
  }
`

const Name = styled.div`
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: .1rem;
  text-transform: uppercase;
  //text-shadow: 0 .05rem .3rem ${props => props.theme.black};
  padding-bottom: 1rem;
`

export {
  Name,
  Number,
  StyledCards,
  StyledCard,
  Type,
  Types
}