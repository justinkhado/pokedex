import React, { useContext, useEffect, useRef, useState } from 'react'
import { SearchContext } from './Home'
import {
  Name,
  Number,
  StyledCards,
  StyledCard,
  Types
} from './Cards.styled'
import { Type } from '../../sharedStyles/Type'

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

  const imageUrl = `https://raw.githubusercontent.com/justinkhado/pokedex-data/master/images/thumbnails/${pokemon.id}`

  return (
    <StyledCard to={`/pokemon/${pokemon.id}`} types={pokemon.types} ref={cardRef}>
      <Number>{`${pokemon.id}`}</Number>
      <Types>
          <Type type={pokemon.types[0]}><span>{pokemon.types[0]}</span></Type>
          {pokemon.types[1] && 
            <Type type={pokemon.types[1]}><span>{pokemon.types[1]}</span></Type>
          }
      </Types>
      <picture>
        <source type='image/webp' srcSet={`${imageUrl}.webp`} />
        <source type='image/png' srcSet={`${imageUrl}.png`} />
        <img src={`${imageUrl}.png`} alt={pokemon.name} loading='lazy' />
      </picture>
      <Name>{`${pokemon.name}`}</Name>
    </StyledCard>
  )
}

const Cards = ({ pokemons }) => {
  const { search, filter } = useContext(SearchContext)
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
    setTimeout(() => { window.scrollTo({ top: scrollPosition }) }, 2)

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
    setFilteredPokemons(pokemons.filter(pokemon => {
      const containsLetters = pokemon.name.toLowerCase().includes(search.toLowerCase())
      const inGenerations = filter.generations.length > 0 
        ? filter.generations.includes(pokemon.gen)
        : true
      const inTypes = filter.types.length > 0
        ? filter.types.every(type => pokemon.types.includes(type))
        : true
      return containsLetters && inGenerations && inTypes
    }))
  }, [pokemons, search, filter])

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
          items: filteredPokemons.slice(0, 36),
          hasMore: filteredPokemons.length > 60
        })
      }
      window.scrollTo({ top: 0 })
    }
  }, [filteredPokemons])

  const fetchMoreData = () => {
    if (filteredPokemons.length && pokemonChunk.items.length >= filteredPokemons.length) {
      setPokemonChunk({ ...pokemonChunk, hasMore: false })
    }
    else {
      setPokemonChunk({
        ...pokemonChunk,
        items: pokemonChunk.items.concat(
          filteredPokemons.slice(pokemonChunk.items.length, pokemonChunk.items.length + 60)
        )
      })
    }
  }

  const handleScrollEvent = () => {
    window.sessionStorage.setItem('homeScrollPosition', window.scrollY)
  }

  return (
    <StyledCards
      dataLength={pokemonChunk.items.length}
      next={fetchMoreData}
      hasMore={pokemonChunk.hasMore}
      scrollThreshold={.85}
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