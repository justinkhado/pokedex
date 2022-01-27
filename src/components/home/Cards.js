import React, { useEffect, useState } from 'react'
import {
  Name,
  Number,
  StyledCards,
  StyledCard,
  Types
} from './Cards.styled'
import { Type } from '../../sharedStyles/Type.styled'

const Card = ({ pokemon }) => {
  return (
    <StyledCard to={`/pokemon/${pokemon.id}`} types={pokemon.types}>
      <Number>{`${pokemon.id}`}</Number>      
      <Types>
          <Type type={pokemon.types[0]}><span>{pokemon.types[0]}</span></Type>
          {pokemon.types[1] && 
            <Type type={pokemon.types[1]}><span>{pokemon.types[1]}</span></Type>
          }
      </Types>
      <img src={require(`../../assets/thumbnails/${pokemon.id}.png`)} alt={`${pokemon.name}`} loading='lazy' />
      <Name>{`${pokemon.name}`}</Name>
    </StyledCard>
  )
}

const Cards = ({ pokemons, search }) => {  
  const [filteredPokemons, setFilteredPokemons] = useState([])  
  const [pokemonChunk, setPokemonChunk] = useState({
    items: [],
    hasMore: true
  })  

  useEffect(() => {
    setFilteredPokemons(pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())  
    ))
  }, [pokemons])
  
  useEffect(() => {
    setPokemonChunk({
      ...pokemonChunk,
      items: filteredPokemons.slice(0, 18)
    })
  }, [filteredPokemons])

  useEffect(() => {
    setFilteredPokemons(pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())  
    ))
  }, [search])

  if (!pokemons.length) {
    return (<div></div>)
  }

  const fetchMoreData = () => {
    if (filteredPokemons.length !== 0 && pokemonChunk.items.length >= filteredPokemons.length) {
      setPokemonChunk({ ...pokemonChunk, hasMore: false })
      return
    }
    
    setPokemonChunk({
      ...pokemonChunk,
      items: pokemonChunk.items.concat(
        filteredPokemons.slice(pokemonChunk.items.length, pokemonChunk.items.length + 12)
      )
    })
  }

  return (
    <StyledCards
      dataLength={pokemonChunk.items.length}
      next={fetchMoreData}
      hasMore={pokemonChunk.hasMore}
      scrollThreshold={.9}
      style={{ height: 'initial', overflow: 'initial' }}
    >
      {pokemonChunk.items.map(pokemon =>
        <Card key={pokemon.id} pokemon={pokemon} />  
      )}
    </StyledCards>
  )
}

export default Cards