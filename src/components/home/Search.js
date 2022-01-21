import React, { useEffect, useState} from 'react'
import { Container, SearchBox } from './Search.styled'
import pokeball from '../../assets/icons/pokeball.png'

const Search = (props) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSearchChange = (event) => {
    props.setSearch(event.target.value)
  }

  return (
    <Container isScrolling={offset > 40}>
      <SearchBox >
        <input
          value={props.search}
          onChange={handleSearchChange}
          placeholder='Search'
        />
        <div>
          <img src={pokeball} alt='pokeball' />
        </div>          
      </SearchBox>      
      <div>
        
      </div>
    </Container>
  )
}

export default Search