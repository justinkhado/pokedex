import React, { useContext, useEffect, useRef, useState } from 'react'
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
  const filterRef = useRef({})
  const { filter, handleFilterChange } = useContext(SearchContext)
  const [filterOpen, setFilterOpen] = useState(false)  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterRef.current.dropdown && !filterRef.current.dropdown.contains(event.target) && 
        filterRef.current.button && !filterRef.current.button.contains(event.target)
      ) {
        setFilterOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    
    return (() => document.removeEventListener('mousedown', handleClickOutside))
  }, [])

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