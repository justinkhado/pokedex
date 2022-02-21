import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useControllerRef } from '../../hooks/useControllerRef'
import pokemonService from '../../services/pokemon'
import {
  EvolutionContainer,
  BaseStage,
  PokemonLink,
  EvolutionStage,
  EvolutionArrow
} from './EvoChain.styled.js'
import { SectionHeader } from '../../sharedStyles/SectionStyles'

const EvolutionImage = ({ id, name }) => {
  const imageUrl = `https://raw.githubusercontent.com/justinkhado/pokedex-data/master/images/thumbnails/${id}`

  return (
    <picture>
      <source type='image/webp' srcSet={`${imageUrl}.webp`} />
      <source type='image/png' srcSet={`${imageUrl}.png`} />
      <img src={`${imageUrl}.png`} alt={name} />
    </picture>
  )
}

const EvoChain = ({ id }) => {
  const [evoChain, setEvoChain] = useState({})
  const [isEeveelution, setIsEeveelution] = useState(false)
  const [ref, inView] = useInView({
    threshold: .2,
    triggerOnce: true
  })
  const controllerRef = useControllerRef()

  useEffect(() => {
    setIsEeveelution([133, 134, 135, 136, 196, 197, 470, 471, 700].includes(parseInt(id)))
  }, [id])

  useEffect(() => {
    pokemonService
      .getEvoChain(id, controllerRef.current)
      .then(returnedEvoChain => {
        if (!controllerRef.current.signal.aborted) {
          setEvoChain(returnedEvoChain)
        }
      })
  }, [id, controllerRef])

  if (!evoChain.id) {
    return (<></>)
  }

  return (
    <EvolutionContainer ref={ref}>
      <SectionHeader>Evolutions</SectionHeader>
      <BaseStage>
        <PokemonLink to={`/pokemon/${evoChain.id}`} delay={.1} $visible={inView} onClick={(event) => event.currentTarget.blur()}>
          <EvolutionImage id={evoChain.id} name={evoChain.name} />
          <span>{evoChain.name}</span>
        </PokemonLink>
        {evoChain.evolves_to && <EvolutionArrow />}
        <EvolutionStage eevee={isEeveelution}>
          {evoChain.evolves_to && evoChain.evolves_to.map(evo1 =>
            <div key={evo1.id}>              
              <PokemonLink to={`/pokemon/${evo1.id}`} delay={.5} $visible={inView} onClick={(event) => event.currentTarget.blur()}>
                <EvolutionImage id={evo1.id} name={evo1.name} />
                <span>{evo1.name}</span>
              </PokemonLink>
              {evo1.evolves_to && <EvolutionArrow />}
              <EvolutionStage>
                {evo1.evolves_to && evo1.evolves_to.map(evo2 =>
                  <div key={evo2.id}>
                    <PokemonLink to={`/pokemon/${evo2.id}`} delay={.9} $visible={inView} onClick={(event) => event.currentTarget.blur()}>
                      <EvolutionImage id={evo2.id} name={evo2.name} />
                      <span>{evo2.name}</span>
                    </PokemonLink>
                  </div>
                )}
              </EvolutionStage>
            </div>
          )}
        </EvolutionStage>
      </BaseStage>
    </EvolutionContainer>
  )
}

export default EvoChain