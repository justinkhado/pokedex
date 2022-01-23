import React, { useEffect, useRef } from 'react'
import { Container, Clear, SearchBox } from './Search.styled'
import pokeball from '../../assets/icons/pokeball.png'

const Search = ({ search, setSearch }) => {
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

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const onClearButtonClick = () => {
    setSearch('')
  }

  return (
    <Container>
      <SearchBox >
        <input
          ref={inputRef}
          value={search}
          onChange={handleSearchChange}
          maxLength={15}
          placeholder='Search'
        />
        <div>
          <img src={pokeball} alt='pokeball' />
        </div>
        {search && 
          <Clear 
            onClick={onClearButtonClick}
            onMouseDown={(event) => event.preventDefault()}
          >
            &#9932;
          </Clear>
        }
      </SearchBox>
    </Container>
  )
}

export default Search