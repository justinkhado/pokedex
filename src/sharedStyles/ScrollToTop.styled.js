import styled from 'styled-components'

export const ScrollButton = styled.button`
  display: ${props => props.visible ? 'inline' : 'none'};

  position: fixed;
  bottom: 5rem;
  right: 5rem;
`