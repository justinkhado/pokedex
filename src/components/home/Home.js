import React from 'react'
import Cards from './Cards'
import Search from './Search'
import ScrollToTop from '../ScrollToTop'

const Home = ({ search, setSearch }) => {
  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <Cards search={search} />
      <ScrollToTop />
    </div>
  )
}

export default Home