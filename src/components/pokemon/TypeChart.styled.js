import styled from 'styled-components'

export const TypeChartHeader = styled.div`
  background-color: ${props => props.theme[`${props.theme.type}`]};
  color: ${props => props.theme.white};
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  padding: 1rem;
  box-shadow: ${props => props.theme.shadowSmall} ${props => props.theme.blackLight};
`

export const TypeEffectiveness = styled.div`
  margin: 1rem 1rem 0;
  padding: 2rem 1.5rem;
  box-shadow: ${props => props.theme.shadowSmall} ${props => props.theme.blackLight};
  color: ${props => props.theme[`${props.theme.type}Dark`]};
`

export const ChartLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  span {
    font-weight: 500;
    text-align: center;
  }
`

export const Types = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: ${props => props.theme[`${props.theme.type}Light`]};
  padding: .5rem;
  border-radius: .5rem;

  div {
    font-size: 1.2rem;
  }
`