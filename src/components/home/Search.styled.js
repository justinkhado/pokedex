import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 1rem;
  right: 7vw;
  z-index: 999;
  height: 7rem;
  width: 20rem;
  //margin: 0 auto 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  /* transition: all .7s;
  ${props => props.isScrolling && `
    transform: translate(0, 0);
  `} */
`

const SearchBox = styled.div`
  position: relative;
  height: 3.3rem; 
  
  input {
    width: 17.5rem;
    border: none;
    border-radius: 10rem;
    outline: 2px solid ${props => props.theme.blackLight};    
    padding: .6rem 0 .6rem 4rem;
    font-size: 1.8rem;
    color: ${props => props.theme.blackLight};
    transition: all .2s;

    &:hover {
      outline-offset: .4rem;
    }

    &:focus {
      outline: 2px solid ${props => props.theme.primary};
      outline-offset: .4rem;
      width: 20rem;
    }

    &::placeholder {
      color: ${props => props.theme.grey};
    }
  }

  div {
    display: flex;
    align-items: center;
    position: absolute;
    height: inherit;
    top: 50%;
    transform: translateY(-50%);
    left: .5rem;

    img {
      height: 78%;
      transition: rotate 5s;
    }
  }

  input:focus + div img {
    animation: 2.5s spin infinite cubic-bezier(.6,0,.4,1);
  }

  @keyframes spin {
    to { transform: rotate(1080deg); }
  }
`

const Clear = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: .5rem;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: ${props => props.theme.blackLight};
  font-size: 1rem;
  font-weight: 900;
  cursor: pointer;
`

export {
  Clear,
  Container,
  SearchBox
}