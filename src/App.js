import React, { useEffect, useState, Suspense, lazy } from 'react'
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './sharedStyles/GlobalStyles'
import { theme } from './Theme'

import pokemonService from './services/pokemon'
import Fallback from './components/Fallback'
import Header from './components/Header'

const Home = lazy(() => import ('./components/home/Home'))
const Pokemon = lazy(() => import('./components/pokemon/Pokemon'))

const App = () => {
  const location = useLocation()
  const [pokemon, setPokemon] = useState({})
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
    setTypeTheme(`${type}`)
  }

  useEffect(() => {
    const urlParts = location.pathname.split('/')
    if (urlParts[1] === 'pokemon') {
      pokemonService
        .getPokemon(urlParts[2])
        .then(returnedPokemon => {
          setPokemon(returnedPokemon)
          handleTypeThemeChange(returnedPokemon.types[0])
        })
    }
  }, [location])

  return (
    <ThemeProvider theme={{ ...theme, type: typeTheme }}>
      <GlobalStyles />
      <Header />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path='/' element={<Home pokemons={pokemons} changeType={handleTypeThemeChange} />} />
          <Route path='/pokemon/:id' element={<Pokemon pokemon={pokemon} type={typeTheme} />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
