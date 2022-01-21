import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 3rem;
`

const SearchBox = styled.div`
  position: relative;
  height: 3.3rem;
  
  input {
    width: 15rem;
    border: none;
    border-radius: 10rem;
    padding: .6rem 1.5rem;
    font-size: 1.8rem;
    color: ${props => props.theme.greyDark};
    transition: width .2s;

    &:focus {
      outline: none;
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