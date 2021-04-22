import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import NavBar from './components/NavBar'
import Home from './pages/Home'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto'
  }
})

const App = props => {
  return (
    <ThemeProvider theme={theme} >
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      
    </ThemeProvider>
  )
}

export default App