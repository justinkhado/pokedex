import styled from 'styled-components'

export const StatContainer = styled.div`
  
`

export const StatHeader = styled.div`
  background-color: ${props => props.theme[`${props.theme.type}`]};
  color: ${props => props.theme.white};
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  padding: 1rem;
  box-shadow: ${props => props.theme.shadowSmall} ${props => props.theme.blackLight};
`

export const Stats = styled.div`
  background-color: ${props => props.theme[`${props.theme.type}Light`]};
  margin: 1rem 1rem 0;
  padding: 2rem 1.5rem;
  box-shadow: ${props => props.theme.shadowSmall} ${props => props.theme.blackLight};

  div:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const StatLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  
  span {
    font-weight: 500;
  }

  div {
    position: relative;
    background-color: ${props => props.theme.white}70;
    width: 100%;
    padding: 2px .5rem;
    border-radius: .5rem;
    color: ${props => props.theme.white};
    z-index: 1;

    &::after {
      content: '';
      position: absolute;
      height: 100%;
      width: clamp(3rem, calc(${props => props.statValue / 180} * 100%), 100%);
      top: 0;
      left: 0;
      border-radius: .5rem;
      background-color: ${props => props.theme[`${props.theme.type}Dark`]};
      z-index: -1;
      animation: grow 1.5s ease-in-out;
      transform-origin: 0% 50%;
    }
  }

  @keyframes grow {
    0% {
      transform: scaleX(0);
    }

    100% {
      transform: scaleX(1);
    }
  }
`

export const Total = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding-top: 1rem;

  span:first-child {
    font-weight: 500;
  }

  span:last-child {
    margin-left: .5rem;
  }
`