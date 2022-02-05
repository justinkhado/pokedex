import React, { useEffect, useState } from 'react'
import pokemonService from '../../services/pokemon'
import {
} from './EvoChain.styled.js'
import { SectionHeader } from '../../sharedStyles/SectionHeader'

const EvoChain = ({ id }) => {
  const [evoChain, setEvoChain] = useState({})

  useEffect(() => {
    pokemonService
      .getEvoChain(id)
      .then(returnedChain => {
        setEvoChain(returnedChain)
      })
  }, [id])

  console.log(evoChain)

  return (
    <div>
      <SectionHeader>Evolutions</SectionHeader>
      <div></div>
    </div>
  )
}

export default EvoChain