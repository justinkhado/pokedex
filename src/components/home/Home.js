import React, { createContext, useEffect, useState } from 'react'
import Cards from './Cards'
import Search from './Search/Search'
import ScrollToTop from './ScrollToTop'

export const SearchContext = createContext({})

const Home = ({ pokemons, changeType }) => { 
  useEffect(() => {
    changeType('')
  }, [changeType])

  const [search, setSearch] = useState(window.sessionStorage.getItem('search') || '')
  const [filter, setFilter] = useState(
    JSON.parse(window.sessionStorage.getItem('filter')) || { generations: [], types: [] }
  )

  const handleSearchChange = (input) => {
    setSearch(input)
    window.sessionStorage.setItem('search', input)
  }

  const handleFilterChange = (input) => {
    setFilter(input)
    window.sessionStorage.setItem('filter', JSON.stringify(input))
  }
  
  return (
    <main>
      <SearchContext.Provider value={{ search, handleSearchChange, filter, handleFilterChange }}>
        <Search />
        <Cards pokemons={pokemons} />
      </SearchContext.Provider>
      <ScrollToTop />
    </main>
  )
}

export default Home