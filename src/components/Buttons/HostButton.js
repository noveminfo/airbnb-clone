import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  button: {
    borderRadius: 24,
    height: 42,
    color: 'white',
    fontWeight: 'bold',
  }
})

function HostButton() {
  const classes = useStyles()

  return (
    <Button 
      disableRipple={true}
      className={classes.button}
    >
      ホストになる
    </Button>
  )
}

export default HostButton
