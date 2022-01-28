import React, { useEffect, useRef } from 'react'
import { Container, Clear, SearchBox } from './Search.styled'
import { ReactComponent as Pokeball } from '../../assets/icons/pokeball.svg'

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
    window.sessionStorage.setItem('search', event.target.value)
  }

  const onClearButtonClick = () => {
    setSearch('')
    window.sessionStorage.setItem('search', '')
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
          onChange={handleSearchChange}
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