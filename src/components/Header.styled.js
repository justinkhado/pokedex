import styled from 'styled-components'

const StyledHeader = styled.div`
  background-color: ${props => props.theme.white}c1;
  align-self: center;
  height: 10rem;
  width: 95%;
  margin-bottom: 4rem;
  box-shadow: 0 .5rem 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 1.2rem;
    text-transform: uppercase;

    &::first-letter {
      color: ${props => props.theme.primary}
    }
  }
`

export default StyledHeader