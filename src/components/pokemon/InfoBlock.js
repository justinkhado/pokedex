import React, { useState } from 'react'
import {
  InfoContainer,
  NameTag,
  Attributes,
  Types,
  Abilities,
  AbilitiesHeader,
  AbilitySelect,
  AbilityOptions,
  AbilityOption
} from './InfoBlock.styled'
import { Type } from '../../sharedStyles/Type.styled'

const InfoBlock = ({ pokemon }) => {
  const [ability, setAbility] = useState(0)
  const [selectingAbility, setSelectingAbility] = useState(false)

  const handleAbilityChange = (event) => {
    setAbility(parseInt(event.target.value))
    setSelectingAbility(selected => !selected)
  }

  return (
    <InfoContainer>
      <NameTag nameLength={pokemon.name.length}>
        <span>#{pokemon.id}</span>
        <h1>{pokemon.name}</h1>
      </NameTag>
      <Attributes>
        <p className='attr'>Type</p>
        <Types>
          <Type type={pokemon.types[0]}><span>{pokemon.types[0]}</span></Type>
          {pokemon.types[1] && 
            <Type type={pokemon.types[1]}><span>{pokemon.types[1]}</span></Type>
          }
        </Types>
        <p className='attr'>Height</p>
        <p>{pokemon.height}</p>
        <p className='attr'>Weight</p>
        <p>{pokemon.weight}</p>
      </Attributes>
      <Abilities>
        <AbilitiesHeader>
          <span>Abilities</span>
          <AbilitySelect>
            <button onClick={() => setSelectingAbility(selected => !selected)}>
              {pokemon.abilities[ability].name.replace('-', ' ')}
            </button>
            {selectingAbility && 
              <AbilityOptions>
                {pokemon.abilities.map((abilityOption, index) =>
                  <AbilityOption
                    key={abilityOption.name}
                    value={index}
                    onClick={handleAbilityChange}
                    isCurrent={index === ability}
                  >
                    {abilityOption.name.replace('-', ' ')}
                  </AbilityOption>
                )}
              </AbilityOptions>
            }
          </AbilitySelect>
        </AbilitiesHeader>
        <div>
          <p>{pokemon.abilities[ability].effect}</p>
        </div>
      </Abilities>
    </InfoContainer>
  )
}

export default InfoBlock