import React, { useEffect, useState } from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './GlobalStyles'
import { theme } from './Theme'

import StyledBackground from './sharedStyles/Background.styled'
import Header from './components/Header'
import Home from './components/home/Home'
import Pokemon from './components/pokemon/Pokemon'

import pokemonService from './services/pokemon'

const App = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    pokemonService
      .getAll()
      .then(returnedPokemon => {
        setPokemons(returnedPokemon.pokemons)//.slice(386, 493))
      })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledBackground>        
        <Header />
        <Routes>
          <Route path='/' element={<Home pokemons={pokemons} />} />
          <Route path='/pokemon/:id' element={<Pokemon />} />
        </Routes>      
      </StyledBackground>
    </ThemeProvider>
  )
}

export default App
