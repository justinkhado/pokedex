import React, { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import pokemonService from '../../services/pokemon'
import Fallback from '../Fallback'
import InfoBlock from './InfoBlock'
import StatBlock from './StatBlock'
import TypeChart from './TypeChart'
import EvoChain from './EvoChain'
import Moveset from './Moveset'
import { 
  Container,
  PokemonImage,
  FightingAnimation
} from './Pokemon.styled'

const Pokemon = ({ changeType }) => {
  const isMounted = useRef(true)
  const location = useLocation()
  const [pokemon, setPokemon] = useState({})
  const [randomPokemon, setRandomPokemon] = useState(6)

  useEffect(() => {
    // random pokemon id in range {firstPokemon} to {lastPokemon} (Gen 1 to Gen 7)
    const firstPokemon = 1
    const lastPokemon = 807
    setRandomPokemon(Math.floor(Math.random() * (lastPokemon - firstPokemon) + firstPokemon))
    
    return () => { isMounted.current = false }
  }, [])

  useEffect(() => {
    const urlParts = location.pathname.split('/')
    if (urlParts[1] === 'pokemon') {
      pokemonService
        .getPokemon(urlParts[2])
        .then(returnedPokemon => {
          if (isMounted.current) {
            setPokemon(returnedPokemon)   
            changeType(returnedPokemon.types[0])
          }
        })
        .then(() => { 
          window.scrollTo({ top: 0 })
        })
    }    
  }, [location, changeType])

  if (!pokemon.id) {
    return <Fallback />
  }

  return (
    <Container>
      <PokemonImage>
        <img src={`https://raw.githubusercontent.com/justinkhado/pokedex-data/master/images/original/${pokemon.id}.png`} alt={pokemon.name} />
      </PokemonImage>
      <InfoBlock pokemon={pokemon} />
      <EvoChain id={pokemon.id} />
      <StatBlock stats={pokemon.stats} />
      <FightingAnimation>
        <img src={`https://raw.githubusercontent.com/justinkhado/pokedex-data/master/images/sprites/${pokemon.id}.png`} alt={`pokemon ${pokemon.id}`} />
        <img src={`https://raw.githubusercontent.com/justinkhado/pokedex-data/master/images/sprites/${randomPokemon}.png`} alt={`pokemon ${randomPokemon}`} />
      </FightingAnimation>
      <TypeChart typeChart={pokemon.type_chart} />
      <Moveset id={pokemon.id} />
    </Container>
  )
}

export default Pokemon