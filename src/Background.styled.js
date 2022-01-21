import styled from 'styled-components'

const StyledBackground = styled.div`
  min-height: 100vh;

  background-image: linear-gradient(
    135deg,
    ${props => props.theme.primary}b1 0%,
    ${props => props.theme.primary}50 59%,
    ${props => props.theme.blackLight}70 59%,
    ${props => props.theme.blackLight}70 60%,
    ${props => props.theme.white} 60%,
    ${props => props.theme.greyLight}
  );
  background-attachment: fixed; 

  display: flex;
  flex-direction: column;
  align-items: center;
`

export default StyledBackground