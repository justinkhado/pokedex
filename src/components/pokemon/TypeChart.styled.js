import styled from 'styled-components'

export const TypeChartContainer = styled.div`
  & > *:not(:first-child) {
    background-color: ${props => props.theme.sectionBackground};
  }
`

export const TypeEffectiveness = styled.div`
  margin: ${props => props.theme.sectionBodyMargin};
  padding: ${props => props.theme.sectionBodyPadding};
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
  }
`

export const Types = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  background-color: ${props => props.theme[`${props.theme.type}Light`]};
  padding: .5rem;
  border-radius: .5rem;

  div {
    font-size: 1.2rem;
  }
`