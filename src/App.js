import React, { useEffect, useState, Suspense, lazy } from 'react'
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import pokemonService from './services/pokemon'
import GlobalStyles from './sharedStyles/GlobalStyles'
import { theme } from './Theme'
import Fallback from './components/Fallback'
import Header from './components/Header'
const Home = lazy(() => import ('./components/home/Home'))
const Pokemon = lazy(() => import('./components/pokemon/Pokemon'))

const App = () => {
  const location = useLocation()
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

  return (
    <ThemeProvider theme={{ ...theme, type: typeTheme }}>
      <GlobalStyles />
      <Header />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path='/' element={<Home pokemons={pokemons} changeType={handleTypeThemeChange} />} />
          <Route path='/pokemon/:id' element={
            <Pokemon changeType={handleTypeThemeChange} key={location.pathname} />
          } />
        </Routes>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
