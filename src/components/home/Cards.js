import React, { useState, useEffect } from 'react'
import pokemonService from '../../services/pokemon'
import { 
  Name,
  Number,
  StyledCards,
  StyledCard,
  Type,
  Types
} from './Cards.styled'

const Card = ({ pokemon }) => {
  return (
    <StyledCard to='' types={pokemon.types}>
      <Number>{`${pokemon.id}`}</Number> 
      <Types>
        {pokemon.types.map((type, index) => 
          <Type type={type} key={index}>{type}</Type>  
          )}
      </Types>
      <img src={require(`../../assets/images/${pokemon.id}.png`)} alt={`${pokemon.name}`} />
      <Name>{`${pokemon.name}`}</Name>
    </StyledCard>
  )
}

const Cards = ({ search }) => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    pokemonService
      .getAll()
      .then(returnedPokemon => {
        setPokemons(returnedPokemon.pokemons.slice(386, 493))
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