import styled from 'styled-components'

export const MovelistFilter = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2.5rem;

  select {
    color: ${props => props.theme[`${props.theme.type}Dark`]};
    border: none;
    border-bottom: 1px solid ${props => props.theme[`${props.theme.type}Dark`]};
    padding: .5em .5em .3em 0;
    font-size: 1.5rem;
    text-transform: uppercase;
    cursor: pointer;
  }

  option {
    font-size: 1.3rem;
  }

`

export const Movelist = styled.div`
  display: flex;
  justify-content: center;
`

export const MovelistTable = styled.table`
  min-width: 95%;
  background-color: ${props => props.theme[`${props.theme.type}Light`]}50;
  text-align: right;
  border-collapse: collapse;
`

export const MovelistHeaders = styled.tr`
  position: sticky;
  top: 0;
  background-color: ${props => props.theme[`${props.theme.type}Dark`]};
  color: ${props => props.theme.white};
  font-size: 1.5rem;

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
  font-size: 1.2rem;

  div {
    font-size: 1rem;
    margin: 0 auto;
  }
`

export const MovelistRow = styled.tr`
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
    width: 90%;
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
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2rem;
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

   & > div:first-of-type {
    display: flex;
    justify-content: space-around;

    & > div {
      font-size: 1.4rem;
    }
  }
`

export const MoveValues = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  font-size: 1.6rem;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    span:first-of-type {
      font-size: 1.8rem;
      font-weight: 700;
      color: ${props => props.theme[`${props.type}Dark`]};
      margin-bottom: .2em;
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