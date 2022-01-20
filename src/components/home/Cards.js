import React, { useState, useEffect } from 'react'
import pokemonService from '../../services/pokemon'

const Card = ({ pokemon }) => {
  return (
    <div>
      <div>{`${pokemon.dexNumber}: ${pokemon.name}`}</div>
      <div>
        {pokemon.type.map((type, index) => 
          <div key={index}>{type}</div>  
        )}
      </div>
      <img src={require(`../../assets/images/${pokemon.url.split('/')[6]}.png`)} alt={`${pokemon.name}`} />
    </div>
  )
}

const Cards = ({ search }) => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    pokemonService
      .getAll()
      .then(returnedPokemon => {
        setPokemons(returnedPokemon.pokemons.slice(0, 20).map((pokemon, index) => (
          { ...pokemon, dexNumber: index + 1 }
        )))
      })
  }, [])

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())  
  )

  return (
    <div>
      {filteredPokemons.map(pokemon =>
        <Card key={pokemon.name} pokemon={pokemon} />
      )}
    </div>
  )
}

export default Cards