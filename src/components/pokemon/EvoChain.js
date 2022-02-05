import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import pokemonService from '../../services/pokemon'
import {
  EvolutionContainer,
  BaseStage,
  EvolutionStage,
  EvolutionArrow
} from './EvoChain.styled.js'
import { SectionHeader } from '../../sharedStyles/SectionHeader'

const EvoChain = ({ id }) => {
  const [evoChain, setEvoChain] = useState({})

  useEffect(() => {
    pokemonService
      .getEvoChain(id)
      .then(returnedChain => {
        setEvoChain(returnedChain)
      })
  }, [id])

  console.log(evoChain)

  if (!evoChain.id) {
    return (<></>)
  }

  return (
    <EvolutionContainer>
      <SectionHeader>Evolutions</SectionHeader>
      <BaseStage>
        <Link to={`/pokemon/${evoChain.id}`}>
          <img src={require(`../../assets/thumbnails/${evoChain.id}.png`)} alt={`${evoChain.name}`} />
        </Link>
        <span>{evoChain.name}</span>
        {evoChain.evolves_to && <EvolutionArrow />}
        <EvolutionStage>
          {evoChain.evolves_to && evoChain.evolves_to.map(evo1 => 
            <div key={evo1.id}>              
              <Link to={`/pokemon/${evo1.id}`}>
                <img src={require(`../../assets/thumbnails/${evo1.id}.png`)} alt={`${evo1.name}`} />
              </Link>
              <span>{evo1.name}</span>
              {evo1.evolves_to && <EvolutionArrow />}
              <EvolutionStage>
                {evo1.evolves_to && evo1.evolves_to.map(evo2 =>
                  <div key={evo2.id}>
                    <Link to={`/pokemon/${evo2.id}`}>
                      <img src={require(`../../assets/thumbnails/${evo2.id}.png`)} alt={`${evo2.name}`} />
                    </Link>
                    <span>{evo2.name}</span>
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