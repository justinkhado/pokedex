import styled from 'styled-components'

export const Type = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 1.8rem;
  width: 6rem;
  border: 1px solid ${props => props.theme.greyDark};
  border-radius: 0.5rem;
  background: ${props => props.theme[props.type]};
  
  color: ${props => props.theme.white};
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.05rem;

  box-shadow: inset .15rem .1rem ${props => props.theme.white}a1;

  &:not(:last-child) {
    margin-bottom: .2rem;
  }
`