import styled from 'styled-components'

export const SectionHeader = styled.div`
  background-color: ${props => props.theme[`${props.theme.type}`]};
  color: ${props => props.theme.white};
  font-size: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  padding: 1rem;
  box-shadow: ${props => props.theme.shadowMed} ${props => props.theme.blackLight};
`