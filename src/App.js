import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './GlobalStyles'

import Header from './components/home/Header'
import Search from './components/home/Search'
import Cards from './components/home/Cards'

const theme = {
  colors: {
    primary: '#AB1E00',
    secondary: '#F0F0F0'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Header />
        <Search />
        <Cards />
      </div>
    </ThemeProvider>
  )
}

export default App
