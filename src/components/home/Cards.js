import React, { useEffect, useRef, useState } from 'react'
import {
  Name,
  Number,
  StyledCards,
  StyledCard,
  Types
} from './Cards.styled'
import { Type } from '../../sharedStyles/Type.styled'

const Card = ({ pokemon }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    const handleEscPress = (event) => {
      if (event.key === 'Escape') {
        cardRef.current.blur()
      }
    }    
    window.addEventListener('keydown', handleEscPress)
    return () => window.removeEventListener('keydown', handleEscPress)
  }, [])

  return (
    <StyledCard to={`/pokemon/${pokemon.id}`} types={pokemon.types} ref={cardRef}>
      <Number>{`${pokemon.id}`}</Number>      
      <Types>
          <Type type={pokemon.types[0]}><span>{pokemon.types[0]}</span></Type>
          {pokemon.types[1] && 
            <Type type={pokemon.types[1]}><span>{pokemon.types[1]}</span></Type>
          }
      </Types>
      <img src={require(`../../assets/thumbnails/${pokemon.id}.png`)} alt={`${pokemon.name}`} />
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

  const pokemonChunkRef = useRef(null)
  pokemonChunkRef.current = pokemonChunk

  const initialRender = useRef(true)

  useEffect(() => {    
    const scrollPosition = parseInt(window.sessionStorage.getItem('homeScrollPosition')) || 0
    setTimeout(() => {window.scrollTo({ top: scrollPosition, behavior: 'smooth' })}, 2)

    const onUnload = (event) => {
      event.preventDefault()
      window.sessionStorage.setItem('homeScrollPosition', 0)
    }
    window.addEventListener('beforeunload', onUnload)

    return () => {
      window.removeEventListener('beforeunload', onUnload)
      window.sessionStorage.setItem('pokemonChunk', JSON.stringify(pokemonChunkRef.current))
    }
  }, [])

  useEffect(() => {
    setFilteredPokemons(pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())  
    ))
  }, [pokemons, search])

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
    }
    else {
      const storedChunk = JSON.parse(window.sessionStorage.getItem('pokemonChunk'))
      if (storedChunk) {
        setPokemonChunk({ ...storedChunk })
        window.sessionStorage.removeItem('pokemonChunk')
      }
      else {
        setPokemonChunk({
          items: filteredPokemons.slice(0, 24),
          hasMore: filteredPokemons.length > 18
        })
      }
      window.scrollTo({ top: 0 })
    }
  }, [filteredPokemons])

  const fetchMoreData = () => {
    if (filteredPokemons.length && pokemonChunk.items.length >= filteredPokemons.length) {
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

  const handleScrollEvent = () => {
    window.sessionStorage.setItem('homeScrollPosition', window.scrollY)
  }

  return (
    <StyledCards
      dataLength={pokemonChunk.items.length}
      next={fetchMoreData}
      hasMore={pokemonChunk.hasMore}
      scrollThreshold={.9}
      onScroll={handleScrollEvent}
      style={{ height: 'initial', overflow: 'initial' }}
    >
      {pokemonChunk.items.map(pokemon =>
        <Card key={pokemon.id} pokemon={pokemon} />  
      )}
    </StyledCards>
  )
}

export default Cards