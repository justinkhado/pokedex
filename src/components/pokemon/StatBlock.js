import React from 'react'
import {
  StatContainer,
  StatHeader,
  Stats,
  StatLine,
  Total
} from './StatBlock.styled'

const StatBlock = ({ stats }) => {
  return(
    <StatContainer>
      <StatHeader>Stats</StatHeader>
      <Stats>
        {[['hp', 'HP'], ['attack', 'Atk'], ['defense', 'Def'], ['sp. attack', 'SpAtk'], ['sp. defense', 'SpDef'], ['speed', 'Speed']].map(stat =>
          <StatLine 
            key={stat[0]} 
            statValue={stats[stat[0]]}
          >
            <span>{stat[1]}</span>
            <div>{stats[stat[0]]}</div>
          </StatLine>
        )}
        <Total>
          <span>Total</span>
          <span>{stats.total}</span>
        </Total>
      </Stats>
    </StatContainer>
  )
}

export default StatBlock