import styled from 'styled-components'
import { device } from '../../../sharedStyles/breakpoints'

export const ModalContainer = styled.div`  
  position: fixed;
  width: 30rem;
  top: 50%;
  left: 50%;
  z-index: 99;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.white};
  border-radius: 1rem;
  box-shadow: .3rem .8rem 1rem ${props => props.theme.black};
  animation: growIntoView .4s forwards ease-out;

  @media only screen and (${device.lg}) {
    width: 40rem;
  }

  h3 {
    background-color: ${props => props.theme[`${props.type}Dark`]};
    border-radius: 1rem 1rem 0 0;
    margin: 0;
    padding: 2rem;
    color: ${props => props.theme.white};
    text-align: center;
    text-transform: uppercase;
    font-size: 2.2rem;
    letter-spacing: .3rem;
  }

  p {
    background-color: ${props => props.theme[`${props.type}Light`]};
    border-radius: 1rem;
    margin: 2rem 0 0 0;
    padding: 2rem;
    font-size: ${props => props.theme.fontSm};
    font-weight: 500;
    line-height: 2rem;

    @media only screen and (${device.lg}) {
      font-size: ${props => props.theme.fontMd};
      line-height: 2.2rem; 
    }
  }

  @keyframes growIntoView {
    0% {
      transform: translate(-50%, -50%) scale(0);
    }

    75% {
      transform: translate(-50%, -50%) scale(1.1);
    }

    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`

export const MoveInfo = styled.div`
  padding: 2.5rem 3rem;

  @media only screen and (${device.lg}) {
    padding: 3rem 3rem;
  }

   & > div:first-of-type {
    display: flex;
    justify-content: space-around;

    & > div {
      font-size: ${props => props.theme.fontSm};

      @media only screen and (${device.lg}) {
        font-size: ${props => props.theme.fontMd};
      }
    }
  }
`

export const MoveValues = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  font-size: ${props => props.theme.fontMd};

  @media only screen and (${device.lg}) {
    padding: 2rem 0;
    font-size: ${props => props.theme.fontLg};
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    span:first-of-type {
      font-size: ${props => props.theme.lg};
      font-weight: 700;
      color: ${props => props.theme[`${props.type}Dark`]};
      margin-bottom: .2em;

      @media only screen and (${device.lg}) {
        font-size: ${props => props.theme.fontXl};
      }
    }
  }
`

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1rem;
  right: 1rem;
  height: 1.8rem;
  width: 1.8rem;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  font-weight: 800;
  color: ${props => props.theme.white};
  transition: scale .2s;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`