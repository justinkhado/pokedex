import styled from 'styled-components'
import { SectionContainer, SectionBody } from '../../sharedStyles/SectionStyles'
import { device } from '../../sharedStyles/breakpoints'

export const MoveContainer = styled(SectionContainer)`
  @media only screen and (${device.lg}) {
    width: 60%;
    grid-column: span 12;
  }
`

export const Movelist = styled(SectionBody)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
  padding-right: 0;
`

export const MovelistFilter = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 2.5rem;

  @media only screen and (${device.lg}) {
    justify-content: flex-end;
    gap: 3rem;
    margin-right: 40%;
  }

  select {
    color: ${props => props.theme[`${props.theme.type}Dark`]};
    border: none;
    border-bottom: 1px solid ${props => props.theme[`${props.theme.type}Dark`]};
    padding: .5em .5em .3em 0;
    font-size: ${props => props.theme.fontSm};
    text-transform: uppercase;
    cursor: pointer;

    @media only screen and (${device.lg}) {
      font-size: ${props => props.theme.fontMd};
      font-weight: 700;
    }
  }

  option {
    font-size: ${props => props.theme.fontXs};

    @media only screen and (${device.lg}) {
      font-size: ${props => props.theme.fontSm};
    }
  }

`

export const MovelistTable = styled.table`
  width: 95%;
  background-color: ${props => props.theme[`${props.theme.type}Light`]}50;
  text-align: right;
  border-collapse: collapse;

  @media only screen and (${device.sm}) {
    width: 90%;
  }

  @media only screen and (${device.lg}) {
    max-width: 70%;
    box-shadow: .3rem .3rem 1rem ${props => props.theme.blackLight};
  }
`

export const MovelistHeaders = styled.tr`
  position: sticky;
  top: 0;
  background-color: ${props => props.theme[`${props.theme.type}Dark`]};
  color: ${props => props.theme.white};
  font-size: ${props => props.theme.fontSm};

  @media only screen and (${device.lg}) {
    font-size: ${props => props.theme.fontLg};
  }

  th {
    padding: 1em .5em;
  }

  th:first-child {
    padding-right: 1em;
  }

  th:nth-child(2) {
    text-align: start;
  }

  th:nth-child(3),
  th:last-child {
    text-align: center;
  }

  th:last-child {
    padding-right: 1em;
  }
`

export const MovelistBody = styled.tbody`
  font-size: ${props => props.theme.fontXs};

  // selects type
  div {
    font-size: 1rem;
    margin: 0 auto;

    @media only screen and (${device.lg}) {
      font-size: 1.2rem;
    }
  }
`

export const MovelistRow = styled.tr`
  font-size: ${props => props.theme.fontXs};

  @media only screen and (${device.lg}) {
    font-size: ${props => props.theme.fontMd};
  }

  &:hover {
    background-color: ${props => props.theme[`${props.theme.type}Light`]};
    cursor: pointer;
  }

  td {
    padding: 1em .5em;
  }

  td:first-child {
    padding-right: 1em;
    text-transform: uppercase;
  }

  td:nth-child(2) {    
    text-transform: capitalize;
    text-align: start;
    font-weight: 500;
  }

  td:last-child {
    padding-right: 1em;
  }
`

export const DamageClass = styled.div`
  display: flex;
  justify-content: center;
  
  img {
    width: 3.5rem;

    @media only screen and (${device.lg}) {
      width: 4.5rem;
    }
  }
`

export const EmptyMovelist = styled.tr`
  text-align: center;
  font-size: 1.5rem;

  &:hover {
    background-color: transparent;
    cursor: default;
  }

  td {
    text-transform: none;
    padding: 3rem;
  }
`

export const MoveModal = styled.div`  
  position: fixed;
  width: 30rem;
  top: 50%;
  left: 50%;
  background-color: ${props => props.theme.greyLight};
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