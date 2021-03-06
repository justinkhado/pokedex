import React from 'react'
import {
  TypeChartContainer,
  TypeChartHeader,
  TypeEffectiveness,
  ChartLine,
  Types
} from './TypeChart.styled'
import { Type } from '../../sharedStyles/Type'

const TypeChart = ({ typeChart }) => {
  return (
    <TypeChartContainer>
      <TypeChartHeader>Type Weaknesses</TypeChartHeader>
      <TypeEffectiveness>
        {['4', '2', '1', '1/2', '1/4', '0'].map(effectiveness =>
          <ChartLine key={effectiveness}>
            <span>{effectiveness}x</span>
            <Types>
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