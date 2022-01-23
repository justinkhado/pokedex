import styled from 'styled-components'

export const ScrollButton = styled.button`
  transition: all .4s;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  opacity: ${props => props.visible ? '100%' : 0};

  position: fixed;
  bottom: 5rem;
  right: 5rem;
  height: 7rem;
  width: 7rem;
  border: none;
  border-radius: 50%;
  outline: 2px solid ${props => props.theme.primaryLight};
  outline-offset: -.75rem;
  box-shadow: .2rem .3em .8rem ${props => props.theme.black};
  background-color: ${props => props.theme.greyLight};
  
  img {
    filter: invert(17%) sepia(48%) saturate(4544%) hue-rotate(3deg) brightness(99%) contrast(107%);
    height: 2.6rem;
  }

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.primary};
    outline: 2px solid ${props => props.theme.greyLight};

    img {
      filter: invert(95%);
    }
  }
`