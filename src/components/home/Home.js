import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import Search from './Search'
import ScrollToTop from './ScrollToTop'

const Home = ({ pokemons, changeType }) => { 
  useEffect(() => {
    changeType('')
  }, [changeType])

  const [search, setSearch] = useState(window.sessionStorage.getItem('search') || '')

  const handleSearchChange = (input) => {
    setSearch(input)
    window.sessionStorage.setItem('search', input)
  }
  
  return (
    <main>
      <Search search={search} handleSearchChange={handleSearchChange} />
      <Cards pokemons={pokemons} search={search} />
      <ScrollToTop />
    </main>
  )
}

export default Home