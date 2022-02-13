import React from 'react'
import { useInView } from 'react-intersection-observer'
import {
  StatContainer,
  StatHeader,
  Stats,
  StatLine,
  Total
} from './StatBlock.styled'

const StatBlock = ({ stats }) => {
  const [ref, inView] = useInView({
    threshold: .3,
    triggerOnce: true
  })

  return(
    <StatContainer ref={ref}>
      <StatHeader>Stats</StatHeader>
      <Stats>
        {[['hp', 'HP'], ['attack', 'Atk'], ['defense', 'Def'], ['sp. attack', 'SpAtk'], ['sp. defense', 'SpDef'], ['speed', 'Speed']].map(stat =>
          <StatLine 
            key={stat[0]} 
            statValue={stats[stat[0]]}
            visible={inView}
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