import React, { useState, useEffect } from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import NavBar from './components/NavBar'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto'
  }
})

const App = props => {
  return (
    <ThemeProvider theme={theme} >
      <div>
        <NavBar />
        Hello World!
      </div>
    </ThemeProvider>
  )
}

export default App