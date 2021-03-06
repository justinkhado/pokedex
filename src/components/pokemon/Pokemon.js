import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Fallback from '../Fallback'
import InfoBlock from './infoblock/InfoBlock'
import StatBlock from './StatBlock'
import TypeChart from './TypeChart'
import EvoChain from './EvoChain'
import Moveset from './moveset/Moveset'
import pokemonService from '../../services/pokemon'
import { useControllerRef } from '../../hooks/useControllerRef'
import { 
  Container,
  PokemonImage,
  FightingAnimation,
  HomeButtom
} from './Pokemon.styled'
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg'

const Pokemon = ({ changeType }) => {
  const location = useLocation()
  const [pokemon, setPokemon] = useState({})
  const [randomPokemon, setRandomPokemon] = useState(6)
  const [imageLoaded, setImageLoaded] = useState(false)
  const controllerRef = useControllerRef()

  useEffect(() => {
    // random pokemon id in range {firstPokemon} to {lastPokemon} (Gen 1 to Gen 7)
    const firstPokemon = 1
    const lastPokemon = 807
    setRandomPokemon(Math.floor(Math.random() * (lastPokemon - firstPokemon) + firstPokemon))
  }, [])

  useEffect(() => {
    const urlParts = location.pathname.split('/')
    if (urlParts[1] === 'pokemon') {      
      pokemonService
        .getPokemon(urlParts[2], controllerRef.current)
        .then(returnedPokemon => {
          if (!controllerRef.current.signal.aborted) {
            setPokemon(returnedPokemon)   
            changeType(returnedPokemon.types[0])
          }
        })
        .then(() => { 
          window.scrollTo({ top: 0 })
        })
    }    
  }, [location, controllerRef, changeType])

  if (!pokemon.id) {
    return <Fallback />
  }

  const imageDirUrl = 'https://raw.githubusercontent.com/justinkhado/pokedex-data/master/images'

  return (
    <Container>
      <HomeButtom to='/'>
        <HomeIcon />
      </HomeButtom>
      <PokemonImage loaded={imageLoaded}>
        <picture onLoad={() => setImageLoaded(true)}>
          <source type='image/webp' srcSet={`${imageDirUrl}/original/${pokemon.id}.webp`} />
          <source type='image/png' srcSet={`${imageDirUrl}/original/${pokemon.id}.png`} />
          <img src={`${imageDirUrl}/original/${pokemon.id}.png`} alt={pokemon.name} />
        </picture>
      </PokemonImage>
      <InfoBlock pokemon={pokemon} />
      <EvoChain id={pokemon.id} />
      <StatBlock stats={pokemon.stats} />
      <FightingAnimation>
        <img src={`${imageDirUrl}/sprites/${pokemon.id}.png`} alt={`pokemon ${pokemon.id}`} loading='lazy' />
        <img src={`${imageDirUrl}/sprites/${randomPokemon}.png`} alt={`pokemon ${randomPokemon}`} loading='lazy' />
      </FightingAnimation>
      <TypeChart typeChart={pokemon.type_chart} />
      <Moveset id={pokemon.id} />
    </Container>
  )
}

export default Pokemon