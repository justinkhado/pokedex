import React from 'react'
import {
  StatContainer,
  Stats,
  StatLine,
  Total
} from './StatBlock.styled'
import { SectionHeader } from '../../sharedStyles/SectionHeader'

const StatBlock = ({ stats }) => {
  return(
    <StatContainer>
      <SectionHeader>Stats</SectionHeader>
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