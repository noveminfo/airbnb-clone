import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    minHeight: 58,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  text: {
    color: 'black',
    textDecoration: 'underline',
    fontWeight: 'bold',
  }
})
function InfoHeader() {
  const classes = useStyles()

  return (
    <AppBar position='static'>
      <Toolbar className={classes.root}>
      <Typography variant='body2' className={classes.text}>
        Airbnbの新型コロナウイルスに対する取り組みの最新情報をご案内
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default InfoHeader
