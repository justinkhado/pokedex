import styled from 'styled-components'
import { device } from '../../../sharedStyles/breakpoints'

export const TableContainer = styled.div`
  width: 95%;
  height: 50rem;
  background-color: ${props => props.theme[`${props.theme.type}Light`]}50;
  overflow-y: overlay;

  &::-webkit-scrollbar {
    width: .5rem;

    @media only screen and (${device.sm}) {
      width: .8rem;
    }

    @media only screen and (${device.lg}) {
      width: 1rem;
    }
  }

  &::-webkit-scrollbar-track {
    margin-top: 4.5rem;

    @media only screen and (${device.md}) {
      margin-top: 5.1rem;
    }

    @media only screen and (${device.lg}) {
      margin-top: 5.8rem;
    }
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme[`${props.theme.type}`]};
    border-radius: .5rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme[`${props.theme.type}`]};
  }

  @media only screen and (${device.sm}) {
    width: 90%;
  }

  @media only screen and (${device.lg}) {
    width: 60rem;
    height: 70rem;
    margin-bottom: 3rem;
    box-shadow: .3rem .3rem 1rem ${props => props.theme.blackLight};
  }

  table {    
    text-align: right;
    border-collapse: collapse;
    width: 100%;
  }
`

export const MovelistHeaders = styled.tr`
  position: sticky;
  top: 0;
  background-color: ${props => props.theme[`${props.theme.type}Dark`]};
  color: ${props => props.theme.white};
  font-size: ${props => props.theme.fontSm};

  @media only screen and (${device.md}) {
    font-size: ${props => props.theme.fontMd};
  }

  @media only screen and (${device.lg}) {
    font-size: ${props => props.theme.fontLg};
  }

  th {
    padding: 1em .1em;

    @media only screen and (${device.md}) {
      padding: 1em .5em;
    }
  }

  th:first-child {
    padding-right: 1em;
    width: 4em;
  }

  th:nth-child(2) {
    text-align: start;
  }

  th:nth-child(3),
  th:last-child {
    text-align: center;
  }

  th:nth-child(4),
  th:nth-child(5) {
    width: 3.5em;
  }

  th:last-child {
    padding-right: 1em;
  }
`

export const MovelistBody = styled.tbody`
  font-size: ${props => props.theme.fontXs};

  // selects type "icons"
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

  @media only screen and (${device.md}) {
    font-size: ${props => props.theme.fontSm};
  }

  @media only screen and (${device.lg}) {
    font-size: ${props => props.theme.fontMd};
  }

  &:hover {
    background-color: ${props => props.theme[`${props.theme.type}Light`]};
    cursor: pointer;
  }

  td {
    padding: 1em .1em;

    @media only screen and (${device.md}) {
      padding: 1em .5em;
    }    
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

export const EmptyMovelist = styled.tr`
  text-align: center;
  font-size: ${props => props.theme.fontSm};

  @media only screen and (${device.md}) {
    font-size: ${props => props.theme.fontMd};
  }

  @media only screen and (${device.lg}) {
    font-size: ${props => props.theme.fontLg};
  }

  &:hover {
    background-color: transparent;
    cursor: default;
  }

  td {
    text-transform: none;
    padding: 3rem;
  }
`