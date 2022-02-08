import styled from 'styled-components'

export const SectionHeader = styled.h2`
  padding: 1.8rem 0;
  margin: 0;
  background-color: ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.grey};
  color: ${props => props.theme[`${props.theme.type}`]};
  font-size: 2.2rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
`