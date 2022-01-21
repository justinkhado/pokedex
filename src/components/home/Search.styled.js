import styled from 'styled-components'

const Container = styled.div`
  position: sticky;
  top: 3.3rem;
  z-index: 999;
  height: 7rem;
  width: 30rem;
  margin: 0 auto 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all .7s;
  ${props => props.isScrolling && `
    transform: translate(30vw, -2.5vh);
  `}
`

const SearchBox = styled.div`
  position: relative;
  height: 3.3rem; 
  
  input {
    width: 15rem;
    //box-shadow: .5rem .6rem .6rem ${props => props.theme.blackLight};
    border: none;
    border-radius: 10rem;
    outline: 2px solid ${props => props.theme.primaryLight};
    outline-offset: .4rem;
    padding: .6rem 1.5rem;
    font-size: 1.8rem;
    color: ${props => props.theme.greyDark};
    transition: all .2s;

    &:focus {
      outline: 2px solid ${props => props.theme.primary};
      width: 20rem;
    }

    &::placeholder {
      color: ${props => props.theme.grey}
    }
  }

  div {
    display: flex;
    align-items: center;
    position: absolute;
    height: inherit;
    top: 50%;
    transform: translateY(-50%);
    right: .3rem;

    img {
      height: 80%;
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

export {
  Container,
  SearchBox
}