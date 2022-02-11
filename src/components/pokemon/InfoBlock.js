import React, { useState } from 'react'
import {
  InfoContainer,
  NameTag,
  Attributes,
  Types,
  Abilities,
  AbilitiesHeader
} from './InfoBlock.styled'
import { Type } from '../../sharedStyles/Type.styled'
const InfoBlock = ({ pokemon }) => {
  const [ability, setAbility] = useState(0)

  const handleAbilityChange = (event) => {
    setAbility(event.target.value)
    event.currentTarget.blur()
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
          <select onChange={handleAbilityChange} >
            {pokemon.abilities.map((ability, index) =>
              <option key={index} value={index}>
                {ability.name.replace('-', ' ')}
              </option>
            )}
          </select>
          
        </AbilitiesHeader>
        <div>
          {pokemon.abilities[ability].effect}
        </div>
      </Abilities>
    </InfoContainer>
  )
}

export default InfoBlock