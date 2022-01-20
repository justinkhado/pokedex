import styled from 'styled-components'

const StyledBackground = styled.div`
  background-image: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primaryLight} 0%,
    ${({ theme }) => theme.colors.primaryLight} 59%,
    ${({ theme }) => theme.colors.blackLight} 59%,
    ${({ theme }) => theme.colors.blackLight} 60%,
    ${({ theme }) => theme.colors.grey} 60%
  );
  background-attachment: fixed; 
`

export default StyledBackground