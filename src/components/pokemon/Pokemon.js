import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import pokemonService from '../../services/pokemon'
import {
  Container
} from './Pokemon.styled'

const Pokemon = () => {
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

  if (!pokemon.id) {
    return (<div></div>)
  }

  console.log(pokemon)

  return (
    <Container>
      {pokemon.name}
      {pokemon.id}
      <img src={require(`../../assets/thumbnails/${pokemon.id}.png`)} alt={`${pokemon.name}`}/>
    </Container>
  )
}

export default Pokemon