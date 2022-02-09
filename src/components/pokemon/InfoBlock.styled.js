import styled from 'styled-components'
import { SectionBody } from '../../sharedStyles/SectionStyles'

export const NameTag = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3.5rem;
  background-image: linear-gradient(
    120deg,
    ${props => props.theme.blackLight} 0,
    ${props => props.theme.blackLight} 35%,
    ${props => props.theme[props.theme.type]} 35%
  );

  span, h1 {
    color: white;
    font-size: 2.2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  span {
    font-weight: 400;
  }

  h1 {
    margin: 0;
    font-weight: 700;
  }
`

export const Attributes = styled(SectionBody)`
  display: grid;
  grid-template-columns: 30% 70%;
  
  padding: 1rem 3rem;
  color: ${props => props.theme[`${props.theme.type}Dark`]};
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  background-image: linear-gradient(
    to right,
    ${props => props.theme[`${props.theme.type}Light`]} 35%,
    transparent 35%,
    transparent
  );

  .attr {
    color: ${props => props.theme.black};
    margin-right: .5rem;
  }

  p {
    z-index: 1;
    text-align: right;
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

export const Abilities = styled(SectionBody)`
  color: ${props => props.theme[`${props.theme.type}Dark`]};
  padding: 0;

  div:last-child {
    padding: 1.5rem 3rem;
    font-size: 1.4rem;
  }
`

export const AbilitiesHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 1rem 3.5rem;
  background-image: linear-gradient(
    120deg,
    ${props => props.theme[`${props.theme.type}Dark`]} 0,
    ${props => props.theme[`${props.theme.type}Dark`]} 38%,
    ${props => props.theme[`${props.theme.type}Light`]} 38%
  );
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 500;

  span:first-child {
    color: ${props => props.theme.white};
  }

  select {
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    font-size: inherit;
    font-weight: 500;
    letter-spacing: 1px;
    color: ${props => props.theme.black};
    
    option {
      background-color: ${props => props.theme[`${props.theme.type}Light`]};
    }
  }
`