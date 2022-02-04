import React from 'react'
import {
  TypeChartHeader,
  TypeEffectiveness,
  ChartLine,
  Types,
} from './TypeChart.styled'
import { Type } from '../../sharedStyles/Type.styled'

const TypeChart = ({ typeChart }) => {
  return (
    <div>
      <TypeChartHeader>Type Effectiveness</TypeChartHeader>
      <TypeEffectiveness>
        {['4', '2', '1', '1/2', '1/4'].map(effectiveness =>
          <ChartLine key={effectiveness}>
            <span>{effectiveness}</span>
            <Types>
              {typeChart[effectiveness].map(type =>
                <Type key={type} type={type}>{type}</Type>
              )}
            </Types>
          </ChartLine> 
        )}
      </TypeEffectiveness>
    </div>
  )
}

export default TypeChart