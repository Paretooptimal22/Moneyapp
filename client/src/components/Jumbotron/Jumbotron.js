import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container } from '@material-ui/core'
import piggy from './JumboPic/piggy.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  div: {

    textAlign: 'center',
    padding: 0
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  }

}))

const Jumbotron = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.root} maxWidth="xl">
      <Grid item xs={12}>
        <div className={classes.div}>
          <img className={classes.img} src={piggy} alt="piggy" />
        </div>
      </Grid>
    </Grid>
  )
}

export default Jumbotron