import React from 'react'
import { StyledFallback } from './Fallback.styled'
import { ReactComponent as Pokeball } from '../assets/icons/pokeball.svg'

const Fallback = () => {
  return (
    <StyledFallback>
      <Pokeball />
      <Pokeball />
      <Pokeball />
    </StyledFallback>
  )
}

export default Fallback