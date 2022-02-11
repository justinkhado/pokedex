import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Fallback from '../Fallback'
import InfoBlock from './InfoBlock'
import StatBlock from './StatBlock'
import TypeChart from './TypeChart'
import EvoChain from './EvoChain'
import Moveset from './Moveset'
import { Container } from './Pokemon.styled'

const Pokemon = ({ pokemon, type }) => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location])

  if (!pokemon.id) {
    return (<Fallback />)
  }

  if (!type) {
    return (<Fallback />)
  }

  return (
    <Container>
      <img src={`https://raw.githubusercontent.com/justinkhado/pokedex-data/master/images/original/${pokemon.id}.png`} alt={pokemon.name} />
      <InfoBlock pokemon={pokemon} />
      <TypeChart typeChart={pokemon.type_chart} />
      <StatBlock stats={pokemon.stats} />
      <EvoChain id={pokemon.id} />
      <Moveset id={pokemon.id} />
    </Container>
  )
}

export default Pokemon