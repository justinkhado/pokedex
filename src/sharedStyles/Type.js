import styled from 'styled-components'
import { device } from './breakpoints'

export const Type = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  aspect-ratio: 3.3 / 1;
  width: 5.2em;
  border: 1px solid ${props => props.theme.greyDark};
  border-radius: 0.3rem;
  background: ${props => props.theme[props.type]};
  
  color: ${props => props.theme.white};
  text-transform: uppercase;
  font-size: .8rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
  box-shadow: inset 1px 1px ${props => props.theme.white}a1;

  span {
    margin-left: 1px;
  }  

  @media only screen and (${device.md}) {    
    border-radius: 0.5rem;
    box-shadow: inset 1.5px 1px ${props => props.theme.white}a1;
  }
`