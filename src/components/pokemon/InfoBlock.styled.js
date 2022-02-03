import styled from 'styled-components'

export const InfoContainer = styled.div`

`

export const NameTag = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-image: linear-gradient(
    120deg,
    ${props => props.theme.blackLight} 0,
    ${props => props.theme.blackLight} 35%,
    ${props => props.theme[props.theme.type]} 35%
  );
  box-shadow: ${props => props.theme.shadowSmall} ${props => props.theme.blackLight};

  span {
    color: white;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`

export const Attributes = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 30% 70%;
  padding: 0 1.5rem;
  margin: 1rem 1rem 0;
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  box-shadow: ${props => props.theme.shadowSmall} ${props => props.theme.blackLight};

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
    background-color: ${props => props.theme[`${props.theme.type}Light`]};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 35%;
    background-color: ${props => props.theme[`${props.theme.type}Dark`]};
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
  background: ${props => props.theme[`${props.theme.type}Light`]};
  margin: .5rem 1rem 0;
  box-shadow: ${props => props.theme.shadowSmall} ${props => props.theme.blackLight};

  div:last-child {
    padding: 1rem;
    font-size: 1.4rem;
  }
`

export const AbilitiesHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 1rem;
  background-image: linear-gradient(
    120deg,
    ${props => props.theme[`${props.theme.type}Dark`]} 0,
    ${props => props.theme[`${props.theme.type}Dark`]} 38%,
    ${props => props.theme[props.theme.type]} 38%
  );
  color: ${props => props.theme.white};
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 500;

  select {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: inherit;
    font-weight: inherit;
    text-transform: inherit;
    color: inherit;

    &:focus-visible {
      outline: none;
    }
    
    option {
      background-color: ${props => props.theme[`${props.theme.type}Dark`]};
    }
  }
`