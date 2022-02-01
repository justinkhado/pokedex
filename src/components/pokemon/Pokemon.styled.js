import styled from 'styled-components'

export const Container = styled.section`
  margin: 0 auto;
  display: flex;  
  flex-direction: column;

  width: 85vw;
  background: ${props => props.theme.greyLight}f1;
  border-radius: 1rem;
  box-shadow: 0 .5rem 1.5rem;

  & > * {
    //outline: 2px solid black;
    margin: 3rem;
  }
`