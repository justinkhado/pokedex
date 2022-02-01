import React from 'react'
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
  return (
    <InfoContainer>
      <NameTag type={pokemon.types[0]}>
        <span>{pokemon.id}</span>
        <span>{pokemon.name}</span>
      </NameTag>
      <Attributes type={pokemon.types[0]}>
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
      <Abilities type={pokemon.types[0]}>
        <AbilitiesHeader type={pokemon.types[0]}>
          <div>Abilities</div>
          <div>{pokemon.abilities[0].name}</div>
        </AbilitiesHeader>
        <div>
          {pokemon.abilities[0].effect}
        </div>
      </Abilities>
    </InfoContainer>
  )
}

export default InfoBlock