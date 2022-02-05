import styled from 'styled-components'

export const StatContainer = styled.div`
  & > *:not(:first-child) {
    background-color: ${props => props.theme.sectionBackground};
  }
`

export const Stats = styled.div`
  margin: ${props => props.theme.sectionBodyMargin};
  padding: ${props => props.theme.sectionBodyPadding};
  box-shadow: ${props => props.theme.shadowSmall} ${props => props.theme.blackLight};
  color: ${props => props.theme[`${props.theme.type}Dark`]};

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
    background-color: ${props => props.theme[`${props.theme.type}Light`]};
    width: 100%;
    padding: 2px .5rem;
    border-radius: .5rem;
    color: ${props => props.theme.white};
    font-size: 1.4rem;
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
  align-items: center;
  padding-top: 1rem;
  color: ${props => props.theme.black};

  span:first-child {
    text-transform: uppercase;
    font-weight: 500;
  }

  span:last-child {
    margin-left: .5rem;
  }
`