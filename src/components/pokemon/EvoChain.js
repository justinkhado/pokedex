import React, { useEffect, useState } from 'react'
import pokemonService from '../../services/pokemon'
import {
  EvolutionContainer,
  BaseStage,
  PokemonLink,
  EvolutionStage,
  EvolutionArrow
} from './EvoChain.styled.js'
import { SectionHeader } from '../../sharedStyles/SectionStyles'

const EvoChain = ({ id }) => {
  const [evoChain, setEvoChain] = useState({})

  useEffect(() => {
    pokemonService
      .getEvoChain(id)
      .then(returnedChain => {
        setEvoChain(returnedChain)
      })
  }, [id])

  if (!evoChain.id) {
    return (<></>)
  }

  return (
    <EvolutionContainer>
      <SectionHeader>Evolutions</SectionHeader>
      <BaseStage>
        <PokemonLink to={`/pokemon/${evoChain.id}`} onClick={(event) => event.currentTarget.blur()}>
          <img src={require(`../../assets/thumbnails/${evoChain.id}.png`)} alt={`${evoChain.name}`} />
          <span>{evoChain.name}</span>
        </PokemonLink>
        {evoChain.evolves_to && <EvolutionArrow />}
        <EvolutionStage>
          {evoChain.evolves_to && evoChain.evolves_to.map(evo1 => 
            <div key={evo1.id}>              
              <PokemonLink to={`/pokemon/${evo1.id}`} onClick={(event) => event.currentTarget.blur()}>
                <img src={require(`../../assets/thumbnails/${evo1.id}.png`)} alt={`${evo1.name}`} />
                <span>{evo1.name}</span>
              </PokemonLink>
              {evo1.evolves_to && <EvolutionArrow />}
              <EvolutionStage>
                {evo1.evolves_to && evo1.evolves_to.map(evo2 =>
                  <div key={evo2.id}>
                    <PokemonLink to={`/pokemon/${evo2.id}`} onClick={(event) => event.currentTarget.blur()}>
                      <img src={require(`../../assets/thumbnails/${evo2.id}.png`)} alt={`${evo2.name}`} />
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