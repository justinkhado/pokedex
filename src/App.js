import React, { useState } from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './GlobalStyles'
import StyledBackground from './Background.styled'
import { theme } from './Theme'

import Header from './components/Header'
import Home from './components/home/Home'

const App = () => {
  const [search, setSearch] = useState('')  

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledBackground>        
        <Header />
        <Routes>
          <Route path='/' element={<Home search={search} setSearch={setSearch} />} />
          <Route path='/pokemon' element={<div>a</div>} />
        </Routes>      
      </StyledBackground>
    </ThemeProvider>
  )
}

export default App
