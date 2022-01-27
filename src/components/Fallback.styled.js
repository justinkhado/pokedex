import styled from 'styled-components'

export const StyledFallback = styled.div`
  display: flex;
  gap: 5rem;
  margin: 0 auto;
  aspect-ratio: 1 / 1;
  width: 50%;

  & > svg {
    animation: 1.5s blink infinite linear;
    opacity: 0;
  }

  & > svg:first-child {
    animation-delay: 0s;
  }

  & > svg:nth-child(2) {
    animation-delay: .2s;
  }

  & > svg:nth-child(3) {
    animation-delay: .4s;
  }

  @keyframes blink {
    from { opacity: 0; }
    20% { opacity: 1; }
    to { opacity: 0; }
  }
`