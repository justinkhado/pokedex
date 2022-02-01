import styled from 'styled-components'

export const InfoContainer = styled.div`
  //background-color: ${props => props.theme.white};
  //box-shadow: .3rem .4rem .8rem ${props => props.theme.blackLight};
`

export const NameTag = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-image: linear-gradient(
    120deg,
    ${props => props.theme.blackLight} 0,
    ${props => props.theme.blackLight} 35%,
    ${props => props.theme.type} 35%
  );

  span {
    color: white;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`
//${props => props.theme[`${props.type}Light`]}
export const Attributes = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 30% 70%;
  padding: 0 1.5rem;
  margin: .5rem 1rem 0;
  font-size: 1.4rem;
  text-transform: uppercase;

  .attr {
    color: white;
    margin-right: .5rem;
  }

  p {
    z-index: 1;
    text-align: right;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 65%;
    background-color: ${props => props.theme[`${props.type}Light`]};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 35%;
    background-color: ${props => props.theme[`${props.type}Dark`]};
  }
`

export const Types = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  z-index: 1;

  div {    
    font-size: 1.2rem;

    &:first-child {
      margin-right: 2px;
    }
  }
`

export const Abilities = styled.div`
  background: ${props => props.theme[`${props.type}Light`]};
  margin: .5rem 1rem 0;

  div:last-child {
    padding: 1rem;
    font-size: 1.4rem;
  }
`

export const AbilitiesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .8rem 1rem;
  background-image: linear-gradient(
    120deg,
    ${props => props.theme[`${props.type}Dark`]} 0,
    ${props => props.theme[`${props.type}Dark`]} 45%,
    ${props => props.theme.type} 45%
  );
  color: ${props => props.theme.white};
  text-transform: uppercase;
  font-size: 1.4rem;

  div:last-child {
    padding: .5rem;
    border-bottom: 1px solid white;

    &:hover {
      cursor: pointer;
    }
  }
`