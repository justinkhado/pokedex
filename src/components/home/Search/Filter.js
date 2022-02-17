import React, { useContext, useState } from 'react'
import { SearchContext } from '../Home'
import {
  FilterContainer,
  FilterButton,
  FilterDropdown,
  FilterTitle,
  GenerationFilter,
  TypeList
} from './Filter.styled'
import { Type } from '../../../sharedStyles/Type.styled'
import { ReactComponent as FilterIcon } from '../../../assets/icons/filter.svg'

const Filter = () => {
  const { filter, handleFilterChange } = useContext(SearchContext)
  const [filtering, setFiltering] = useState(false)

  const handleGenerationCheck = (event) => {
    if (event.target.checked) {
      handleFilterChange({
        ...filter,
        generations: [...filter.generations, parseInt(event.target.value)]
      })
    }
    else {
      handleFilterChange({
        ...filter,
        generations: filter.generations.filter(gen => gen !== parseInt(event.target.value))
      })
    }
  }

  const handleTypeCheck = (event) => {
    if (event.target.checked) {
      handleFilterChange({
        ...filter,
        types: [...filter.types, event.target.value]
      })
    }
    else {
      handleFilterChange({
        ...filter,
        types: filter.types.filter(type => type !== event.target.value)
      })
    }
  } 

  const generations = { 1: 'i', 2: 'ii', 3: 'iii', 4: 'iv', 5: 'v', 6: 'vi', 7: 'vii' }
  const types = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water']

  return (
    <FilterContainer>
      <FilterButton filtering={filtering} onClick={() => setFiltering(isFiltering => !isFiltering)}>
        <FilterIcon />
      </FilterButton>

      {filtering &&
        <FilterDropdown>
          <div>
            <FilterTitle>Generations</FilterTitle>
            <GenerationFilter>
              {Object.entries(generations).map(([num, gen]) =>
                <React.Fragment key={gen}>
                  <input id={gen} type='checkbox' value={num} 
                    onChange={handleGenerationCheck}
                    checked={filter.generations.includes(parseInt(num))}
                  />
                  <label htmlFor={gen}>{`Gen ${gen.toUpperCase()}`}</label>
                </React.Fragment>  
              )}
            </GenerationFilter>
          </div>

          <div>
            <FilterTitle>Types</FilterTitle>
            <TypeList>
              {types.map(type =>
                <React.Fragment key={type}>
                  <input id={type} type='checkbox' value={type}
                    onChange={handleTypeCheck}
                    checked={filter.types.includes(type)}
                  />
                  <label htmlFor={type}>
                    <Type type={type}>{type}</Type>
                  </label>
                </React.Fragment>
              )}
            </TypeList>
          </div>
        </FilterDropdown>
      }      
    </FilterContainer>
  )
}

export default Filter