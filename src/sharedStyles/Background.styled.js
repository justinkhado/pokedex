import styled from 'styled-components'

const StyledBackground = styled.div`
  min-height: 100vh;

  background-image: linear-gradient(
    135deg,
    ${props => props.theme.primary}c5 0%,
    ${props => props.theme.primary}70 59%,
    ${props => props.theme.blackLight}b1 59%,
    ${props => props.theme.blackLight}b1 60%,
    ${props => props.theme.white} 60%,
    ${props => props.theme.grey}b1
  );
  background-attachment: fixed;
`

export default StyledBackground