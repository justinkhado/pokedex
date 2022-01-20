import React, { useState, useEffect } from 'react'
import pokemonService from '../../services/pokemon'
import { 
  Number,
  StyledCards,
  StyledCard,
  Type,
  Types
} from './Cards.styled'

const Card = ({ pokemon }) => {
  return (
    <StyledCard to='' type={pokemon.type}>
      <Number>{`${pokemon.dexNumber}`}</Number> 
      <Types>
        {pokemon.type.map((type, index) => 
          <Type type={type} key={index}>{type}</Type>  
          )}
      </Types>
      <img src={require(`../../assets/images/${pokemon.url.split('/')[6]}.png`)} alt={`${pokemon.name}`} />
      <div>{`${pokemon.name}`}</div>
    </StyledCard>
  )
}

const Cards = ({ search }) => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    pokemonService
      .getAll()
      .then(returnedPokemon => {
        setPokemons(returnedPokemon.pokemons.slice(0, 30).map((pokemon, index) => (
          { ...pokemon, dexNumber: index + 1 }
        )))
      })
  }, [])

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())  
  )

  return (
    <StyledCards>
      {filteredPokemons.map(pokemon =>
        <Card key={pokemon.name} pokemon={pokemon} />
      )}
    </StyledCards>
  )
}

export default Cards