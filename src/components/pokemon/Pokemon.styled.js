import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  display: flex;  
  flex-direction: column;
  align-items: center;

  background: ${props => props.theme.grey}50;
  /* width: 90vw;
  border-radius: 1rem; */
  box-shadow: 0 .5rem 1.5rem;

  & > *:last-child {
    margin-bottom: 0;
  }
`