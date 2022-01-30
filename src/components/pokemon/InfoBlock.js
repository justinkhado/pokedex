import React from 'react'
import { 
  InfoContainer,
  NameTag,
  Attributes,
  Abilities
} from './InfoBlock.styled'

const InfoBlock = ({ pokemon }) => {
  return (
    <InfoContainer>
      <NameTag>
        <span>{pokemon.id}</span>
        <span>{pokemon.name}</span>
      </NameTag>
      <Attributes>
        {pokemon.types}
        {pokemon.height}
        {pokemon.weight}
      </Attributes>
      <Abilities>
        {pokemon.abilities.map(ability => 
          <div key={ability.name}>{ability.name}</div>
        )}
      </Abilities>
    </InfoContainer>
  )
}

export default InfoBlock