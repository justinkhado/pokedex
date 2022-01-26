import React, { useEffect, useState } from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './sharedStyles/GlobalStyles'
import { theme } from './Theme'

import Header from './components/Header'
import Home from './components/home/Home'
import Pokemon from './components/pokemon/Pokemon'
import pokemonService from './services/pokemon'

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    pokemonService
      .getAll()
      .then(returnedPokemon => {
        setPokemons(returnedPokemon.pokemons)
      })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path='/' element={<Home pokemons={pokemons} search={search} setSearch={setSearch} />} />
        <Route path='/pokemon/:id' element={<Pokemon />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
