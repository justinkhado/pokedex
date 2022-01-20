import React, { useState } from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './GlobalStyles'
import StyledBackground from './Background.styled'

import Header from './components/Header'
import Home from './components/home/Home'

const theme = {
  colors: {
    primary: '#AB1E00',
    primaryLight: '#b65741',
    white: '#FFFFFF',
    grey: '#F0F0F0',
    black: '#000000',
    blackLight: '#1d1d1d'
  }
}

const App = () => {
  const [search, setSearch] = useState('')  

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledBackground>        
        <Header />
        <Routes>
          <Route path='/' element={<Home search={search} setSearch={setSearch} />} />
          <Route path='/pokemon/:id' element={<div></div>} />
        </Routes>      
      </StyledBackground>
    </ThemeProvider>
  )
}

export default App
