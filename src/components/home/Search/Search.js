import React, { useContext, useEffect, useRef } from 'react'
import Filter from './Filter'
import { SearchContext } from '../Home'
import {
  SearchContainer,
  SearchBox
} from './Search.styled'
import { ClearButton } from '../../../sharedStyles/ClearButton'
import { ReactComponent as Pokeball } from '../../../assets/icons/pokeball.svg'

const Search = () => {
  const inputRef = useRef(null)
  const { search, handleSearchChange } = useContext(SearchContext)

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

  return (
    <SearchContainer>
      <SearchBox >
        {search && 
          <ClearButton onClick={onClearButtonClick} onMouseDown={(event) => event.preventDefault()}>
            &#9932;
          </ClearButton>
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
      <Filter />
    </SearchContainer>
  )
}

export default Search