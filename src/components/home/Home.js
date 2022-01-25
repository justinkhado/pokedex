import React from 'react'
import Cards from './Cards'
import Search from './Search'
import ScrollToTop from './ScrollToTop'

const Home = ({ pokemons, search, setSearch }) => { 
  return (
    <main>
      <Search search={search} setSearch={setSearch} />
      <Cards pokemons={pokemons} search={search} />
      <ScrollToTop />
    </main>
  )
}

export default Home