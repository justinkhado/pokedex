import styled from 'styled-components'

export const Container = styled.section`
  margin: 0 auto;
  display: flex;  
  flex-direction: column;

  background: ${props => props.theme.greyLight}f1;
  /* width: 90vw;
  border-radius: 1rem; */
  box-shadow: 0 .5rem 1.5rem;

  & > * {
    //outline: 2px solid black;
    margin: 5rem 1.2rem;
  }
`