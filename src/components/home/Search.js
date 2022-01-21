import React from 'react'
import { Container, SearchBox } from './Search.styled'
import pokeball from '../../assets/icons/pokeball.png'

const Search = (props) => {
  const handleSearchChange = (event) => {
    props.setSearch(event.target.value)
  }
  return (
    <Container>      
      <SearchBox>
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