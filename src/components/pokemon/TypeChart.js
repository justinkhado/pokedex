import React from 'react'
import {
  TypeChartContainer,
  TypeEffectiveness,
  ChartLine,
  Types
} from './TypeChart.styled'
import { Type } from '../../sharedStyles/Type.styled'
import { SectionHeader } from '../../sharedStyles/SectionHeader'

const TypeChart = ({ typeChart }) => {
  return (
    <TypeChartContainer>
      <SectionHeader>Type Effectiveness</SectionHeader>
      <TypeEffectiveness>
        {['4', '2', '1', '1/2', '1/4'].map(effectiveness =>
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