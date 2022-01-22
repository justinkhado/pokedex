import React from 'react'
import LazyLoad from 'react-lazyload'
import { 
  Name,
  Number,
  StyledCards,
  StyledCard,
  Types
} from './Cards.styled'
import { Type } from '../../sharedStyles/Type.styled'

const Card = ({ pokemon }) => {
  return (
    <LazyLoad height={260} offset={100}>
      <StyledCard to={`/pokemon/${pokemon.id}`} types={pokemon.types}>
        <Number>{`${pokemon.id}`}</Number> 
        <Types>
          {pokemon.types.map((type, index) => 
            <Type type={type} key={index}>{type}</Type>  
            )}
        </Types>
          <img src={require(`../../assets/images/${pokemon.id}.png`)} alt={`${pokemon.name}`}/>
        <Name>{`${pokemon.name}`}</Name>
      </StyledCard>
    </LazyLoad>
  )
}

const Cards = ({ pokemons, search }) => { 
  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())  
  )

  return (
    <StyledCards>
      {filteredPokemons.map(pokemon =>
        <Card key={pokemon.name} pokemon={pokemon} />
      )}
    </StyledCards>
  )
}

export default Cards