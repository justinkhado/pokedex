import styled from 'styled-components'
import { device } from './breakpoints'

export const ClearButton = styled.button`
  flex-shrink: 0;
  margin-right: .5rem;
  aspect-ratio: 1 / 1;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: ${props => props.theme.blackLight};
  font-size: ${props => props.theme.fontSm};
  font-weight: 900;
  cursor: pointer;
  transition: all .2s;

  @media only screen and (${device.md}) {
    font-size: ${props => props.theme.fontXs};
  }

  &:active,
  &:hover {
    background-color: ${props => props.theme.grey};
  }
`