import React, { useState } from 'react'
import Cards from './Cards'
import Search from './Search'
import ScrollToTop from '../ScrollToTop'

const Home = ({ pokemons }) => {
  const [search, setSearch] = useState('')

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <Cards pokemons={pokemons} search={search} />
      <ScrollToTop />
    </div>
  )
}

export default Home