import React from 'react'
import Cards from './Cards'
import Search from './Search'

const Home = ({ search, setSearch }) => {
  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <Cards search={search} />
    </div>
  )
}

export default Home