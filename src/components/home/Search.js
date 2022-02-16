import React, { useEffect, useState, useRef } from 'react'
import {
  SearchContainer,
  SearchBox,
  Clear,
  Filter,
  FilterButton,
  FilterDropdown,
  FilterTitle,
  GenerationFilter,
  TypeList
} from './Search.styled'
import { Type } from '../../sharedStyles/Type.styled'
import { ReactComponent as Pokeball } from '../../assets/icons/pokeball.svg'
import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg'

const Search = ({ search, handleSearchChange, filter, handleFilterChange }) => {
  const inputRef = useRef(null)
  const [filtering, setFiltering] = useState(false)

  useEffect(() => {
    const handleEscPress = (event) => {
      if (event.key === 'Escape') {
        inputRef.current.blur()
      }
    }    
    window.addEventListener('keydown', handleEscPress)
    return () => window.removeEventListener('keydown', handleEscPress)
  }, [])

  const handleSearchInput = (event) => {
    handleSearchChange(event.target.value)
  }

  const onClearButtonClick = () => {
    handleSearchChange('')
  }

  const generations = { 1: 'i', 2: 'ii', 3: 'iii', 4: 'iv', 5: 'v', 6: 'vi', 7: 'vii' }
  const types = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water']

  return (
    <SearchContainer>
      <SearchBox >
        {search && 
          <Clear onClick={onClearButtonClick} onMouseDown={(event) => event.preventDefault()}>
            &#9932;
          </Clear>
        }
        <input
          ref={inputRef}
          value={search}
          onChange={handleSearchInput}
          maxLength={15}
          placeholder='Search'
        />
        <Pokeball />
      </SearchBox>
      <Filter>
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
                    <input id={gen} type='checkbox' />
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
                    <input id={type} type='checkbox' />
                    <label htmlFor={type}>
                      <Type type={type}>{type}</Type>
                    </label>
                  </React.Fragment>
                )}
              </TypeList>
            </div>
          </FilterDropdown>
        }
      </Filter>
    </SearchContainer>
  )
}

export default Search