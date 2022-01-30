import React, { useEffect, useState, Suspense, lazy } from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './sharedStyles/GlobalStyles'
import { theme } from './Theme'

import pokemonService from './services/pokemon'
import Fallback from './components/Fallback'
import Header from './components/Header'

const Home = lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return import('./components/home/Home')
})
const Pokemon = lazy(() => import('./components/pokemon/Pokemon'))

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [typeTheme, setTypeTheme] = useState('')

  useEffect(() => {
    pokemonService
      .getAll()
      .then(returnedPokemon => {
        setPokemons(returnedPokemon.pokemons)
      })
  }, [])

  const handleTypeThemeChange = (type) => {
    setTypeTheme(type)
  }

  console.log(typeTheme)

  return (
    <ThemeProvider theme={{ ...theme, type: theme[typeTheme] }}>
      <GlobalStyles />
      <Header />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path='/' element={<Home pokemons={pokemons} changeType={handleTypeThemeChange} />} />
          <Route path='/home' element={<Home pokemons={pokemons} changeType={handleTypeThemeChange} />} />
          <Route path='/pokemon/:id' element={<Pokemon changeType={handleTypeThemeChange} />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
