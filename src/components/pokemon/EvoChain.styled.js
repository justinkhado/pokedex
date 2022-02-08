import styled from 'styled-components'
import { ReactComponent as Arrow } from '../../assets/icons/down-arrow.svg'

export const EvolutionContainer = styled.section`
  & > *:not(:first-child) {
    background-color: ${props => props.theme.sectionBackground};
    padding: 3rem 1rem;
  }
`

export const BaseStage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 10rem;
  }

  span {
    padding: .5rem;
    border-radius: .5rem;
    text-transform: uppercase;
    background-color: ${props => props.theme[`${props.theme.type}Light`]};
    color: ${props => props.theme.black};
    font-weight: 500;
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
`

export const EvolutionStage = styled.div`
  display: flex;  
  flex-wrap: wrap;
  justify-content: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 .5rem;
  }
`

export const EvolutionArrow = styled(Arrow)`
  width: 5rem;
  margin: 2rem;

  path {
    fill: ${props => props.theme[`${props.theme.type}Dark`]};
  }
`