import React, { useContext, useRef, useState } from 'react'
import { useCloseDropdown } from '../../../hooks/useCloseDropdown'
import { SearchContext } from '../Home'
import {
  FilterContainer,
  FilterButton,
  FilterDropdown,
  FilterHeader,
  FilterTitle,
  FilterClear,
  GenerationFilter,
  TypeList
} from './Filter.styled'
import { Type } from '../../../sharedStyles/Type'
import { ReactComponent as FilterIcon } from '../../../assets/icons/filter.svg'

const Filter = () => {  
  const filterRef = useRef({})
  const { filter, handleFilterChange } = useContext(SearchContext)
  const [filterOpen, setFilterOpen] = useState(false)  

  useCloseDropdown(filterRef, () => { setFilterOpen(false) })

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

  const handleFilterClick = () => {
    if (filterOpen) {
      filterRef.current.button.blur()
    }    
    setFilterOpen(isFiltering => !isFiltering)
  }

  const handleFilterClear = (event) => {
    if (event.target.value === 'generations') {
      handleFilterChange({
        ...filter,
        generations: []
      })
    }
    else if (event.target.value === 'types') {
      handleFilterChange({
        ...filter,
        types: []
      })
    }
  }

  const generations = { 1: 'i', 2: 'ii', 3: 'iii', 4: 'iv', 5: 'v', 6: 'vi', 7: 'vii' }
  const types = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water']

  return (
    <FilterContainer>
      <FilterButton
        ref={element => filterRef.current.button = element}
        filtering={filter.generations.length + filter.types.length > 0}
        onClick={handleFilterClick}
      >
        <FilterIcon />
      </FilterButton>

      {filterOpen &&
        <FilterDropdown ref={element => filterRef.current.dropdown = element}>
          <div>
            <FilterHeader>
              <FilterTitle>Generations</FilterTitle>
              {filter.generations.length > 0 &&
                <FilterClear value='generations' onClick={handleFilterClear}>&#9932;</FilterClear>
              }
            </FilterHeader>
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
            <FilterHeader>
              <FilterTitle>Types</FilterTitle>
              {filter.types.length > 0 &&
                <FilterClear value='types' onClick={handleFilterClear}>&#9932;</FilterClear>
              }
            </FilterHeader>
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