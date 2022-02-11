import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Fallback from '../Fallback'
import pokemonService from '../../services/pokemon'
import InfoBlock from './InfoBlock'
import StatBlock from './StatBlock'
import TypeChart from './TypeChart'
import EvoChain from './EvoChain'
import Moveset from './Moveset'
import { Container } from './Pokemon.styled'

const Pokemon = ({ changeType }) => {
  const location = useLocation()
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location])
  
  useEffect(() => {
    pokemonService
      .getPokemon(location.pathname.substring(9))
      .then(returnedPokemon => {
        setPokemon(returnedPokemon)
      })
  }, [location])

  useEffect(() => {
    if (pokemon.id) {
      changeType(pokemon.types[0])

    }
  }, [pokemon, changeType])

  if (!pokemon.id) {
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