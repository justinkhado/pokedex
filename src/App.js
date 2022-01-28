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
  await new Promise(resolve => setTimeout(resolve, 1000))
  return import('./components/home/Home')
})
const Pokemon = lazy(() => import('./components/pokemon/Pokemon'))

const App = () => {
  const [pokemons, setPokemons] = useState([])  

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
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path='/' element={<Home pokemons={pokemons} />} />
          <Route path='/pokemon/:id' element={<Pokemon />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
