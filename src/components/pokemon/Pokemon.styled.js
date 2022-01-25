import styled from 'styled-components'

const Container = styled.div`
  display: flex;

  width: 85vw;
  background: ${props => props.theme.greyLight}f1;
  border-radius: 1rem;
  box-shadow: 0 .5rem 1.5rem;
`

export {
  Container
}