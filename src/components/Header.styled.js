import styled from 'styled-components'

const StyledHeader = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white}d7;
  position: fixed;
  width: 100%;
`

export default StyledHeader