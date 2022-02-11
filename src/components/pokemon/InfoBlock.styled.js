import styled from 'styled-components'
import { SectionContainer, SectionBody } from '../../sharedStyles/SectionStyles'
import { device } from '../../sharedStyles/breakpoints'

export const InfoContainer = styled(SectionContainer)`
  @media only screen and (${device.lg}) {
    grid-column: span 5;
    align-self: start;
    margin-top: 25rem;
    order: -1;
  }
`

export const NameTag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3.5rem;
  background-image: linear-gradient(
    120deg,
    ${props => props.theme.black} 0,
    ${props => props.theme.black} 35%,
    ${props => props.theme[props.theme.type]} 35%
  );

  @media only screen and (${device.md}) {
    box-shadow: .5rem .8rem .8rem ${props => props.theme.blackLight};
  }

  @media only screen and (${device.lg}) {
    position: absolute;
    top: 0;
    left: 0;
    height: 23rem;
    width: 100%;
    flex-direction: row-reverse;
    padding: 0 5rem;
    background-image: linear-gradient(
      135deg,
      ${props => props.theme[props.theme.type]} 0,
      ${props => props.theme[props.theme.type]} 70%,
      ${props => props.theme.black} 70%
    );
  }
  
  span, h1 {    
    font-size: 2.2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    
    @media only screen and (${device.lg}) {
      font-size: 5vw;
      font-weight: 800;
    }
  }

  h1 {
    position: relative;
    color: ${props => props.theme.white};
    margin: 0;
    font-weight: 700;
    max-width: fit-content;

    @media only screen and (${device.lg}) {     
      font-family: monospace;
      font-size: 8vw;
      letter-spacing: .6rem;      
      
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
        background: ${props => props.theme[`${props.theme.type}`]};
        animation: typing 1.8s .3s forwards steps(${props => props.nameLength}, end);
      }
    }
  }

  span {
    color: ${props => props.theme.greyLight};
  }

  @keyframes typing {
    from { width: 100%; }
    to { width: 0%; }
  }
`

export const Attributes = styled(SectionBody)`
  display: grid;
  grid-template-columns: 30% 70%;
  
  padding: 1rem 3rem;
  color: ${props => props.theme[`${props.theme.type}Dark`]};
  font-size: ${props => props.theme.fontSm};
  font-weight: 500;
  text-transform: uppercase;
  background-image: linear-gradient(
    to right,
    ${props => props.theme[`${props.theme.type}Light`]} 35%,
    transparent 35%,
    transparent
  );

  @media only screen and (${device.lg}) {
    font-size: ${props => props.theme.fontLg};
  }

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
    font-size: ${props => props.theme.fontXs};

    @media only screen and (${device.lg}) {
      font-size: ${props => props.theme.fontMd};
    }

    &:first-child {
      margin-right: 2px;
    }
  }
`

export const Abilities = styled(SectionBody)`
  color: ${props => props.theme[`${props.theme.type}Dark`]};
  padding: 0;

  @media only screen and (${device.lg}) {
    margin-top: 2rem;
  }

  div:last-child {
    padding: 1.5rem 3rem;
    font-size: ${props => props.theme.fontSm};

    @media only screen and (${device.lg}) {
      color: ${props => props.theme.blackLight};
      padding: 2.5rem 4rem;
      font-size: ${props => props.theme.fontLg};
      line-height: 2.3rem;
    }
  }
`

export const AbilitiesHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 1rem 3rem;
  background-image: linear-gradient(
    120deg,
    ${props => props.theme[`${props.theme.type}Dark`]} 0,
    ${props => props.theme[`${props.theme.type}Dark`]} 38%,
    ${props => props.theme[`${props.theme.type}Light`]} 38%
  );
  text-transform: uppercase;
  font-size: ${props => props.theme.fontMd};
  font-weight: 500;

  @media only screen and (${device.lg}) {
    padding: 2rem 2rem 2rem 3rem;
    font-size: ${props => props.theme.fontLg};
  }

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

      @media only screen and (${device.lg}) {
        font-size: ${props => props.theme.fontMd};
      }
    }
  }
`