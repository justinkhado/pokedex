import React from 'react'
import Abilities from './Abilities'
import {
  InfoContainer,
  NameTag,
  Attributes,
  Types
} from './InfoBlock.styled'
import { Type } from '../../../sharedStyles/Type.styled'

const InfoBlock = ({ pokemon }) => {
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
      <Abilities abilities={pokemon.abilities} />
    </InfoContainer>
  )
}

export default InfoBlock