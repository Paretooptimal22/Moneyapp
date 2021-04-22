import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
  },
  grid: {
    maxWidth: '100%',
    backgroundColor: '#424242',
    margin: 'auto',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center'
  },
  cards: {
    margin: 'auto',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
  },
  title: {
    paddingTop: '25px',
    color: '#18ffff'
  },
  body: {
    color: 'white'
  },
  title2: {
    marginTop: '50px',
    color: '#18ffff'
  },


}))

const Home = () => {
  
  const classes = makeStyles()

  return (
    <div className={classes.root}>
      <Grid container className={classes.grid}>
        
      </Grid>

    </div>
  )
}

export default Home