import React, { useEffect, useRef } from 'react'
import { Container, Clear, SearchBox } from './Search.styled'
import { ReactComponent as Pokeball } from '../../assets/icons/pokeball.svg'

const Search = ({ search, handleSearchChange }) => {
  const inputRef = useRef(null)

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
    <Container>
      <SearchBox >
        {search && 
          <Clear 
            onClick={onClearButtonClick}
            onMouseDown={(event) => event.preventDefault()}
          >
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
        <div>
          <Pokeball />
        </div>
      </SearchBox>
    </Container>
  )
}

export default Search