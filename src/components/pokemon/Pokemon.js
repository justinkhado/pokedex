import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Fallback from '../Fallback'
import pokemonService from '../../services/pokemon'
import InfoBlock from './InfoBlock'
import {
  Container
} from './Pokemon.styled'

const Pokemon = ({ changeType }) => {
  const location = useLocation()
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    //window.scrollTo({ top: 0 })
  }, [])
  
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

  console.log(pokemon)

  return (
    <Container>      
      <img src={require(`../../assets/thumbnails/${pokemon.id}.png`)} alt={`${pokemon.name}`}/>
      <InfoBlock pokemon={pokemon} />
    </Container>
  )
}

export default Pokemon