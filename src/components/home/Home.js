import React, { useState } from 'react'
import Cards from './Cards'
import Search from './Search'
import ScrollToTop from './ScrollToTop'

const Home = ({ pokemons }) => {
  const [search, setSearch] = useState(window.sessionStorage.getItem('search') || '')
  
  return (
    <main>
      <Search search={search} setSearch={setSearch} />
      <Cards pokemons={pokemons} search={search} />
      <ScrollToTop />
    </main>
  )
}

export default Home