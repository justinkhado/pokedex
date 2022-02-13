import React from 'react'
import { useInView } from 'react-intersection-observer'
import {
  TypeChartContainer,
  TypeChartHeader,
  TypeEffectiveness,
  ChartLine,
  Types
} from './TypeChart.styled'
import { Type } from '../../sharedStyles/Type.styled'

const TypeChart = ({ typeChart }) => {
  const [ref, inView] = useInView({
    threshold: .3,
    triggerOnce: true
  })

  return (
    <TypeChartContainer ref={ref}>
      <TypeChartHeader>Type Effectiveness</TypeChartHeader>
      <TypeEffectiveness>
        {['4', '2', '1', '1/2', '1/4', '0'].map(effectiveness =>
          <ChartLine key={effectiveness}>
            <span>{effectiveness}x</span>
            <Types visible={inView}>
              {typeChart[effectiveness].map(type =>
                <Type key={type} type={type}>{type}</Type>
              )}
            </Types>
          </ChartLine> 
        )}
      </TypeEffectiveness>
    </TypeChartContainer>
  )
}

export default TypeChart