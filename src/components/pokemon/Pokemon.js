import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import pokemonService from '../../services/pokemon'

const Pokemon = () => {
  const location = useLocation()
  const [pokemon, setPokemon] = useState({})
  
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
    <div>
      {pokemon.name}
      {pokemon.id}
      <img src={require(`../../assets/images/${pokemon.id}.png`)} alt={`${pokemon.name}`}/>      
    </div>
  )
}

export default Pokemon