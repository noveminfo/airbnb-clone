import React from 'react'
import logo from '../../img/pngwave.png'
import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  Box,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import SelectLanButton from '../Buttons/SelectLanButton'
import UserMenuButton from '../Buttons/UserMenuButton'

const useStyles = makeStyles(theme => ({
  root: {
    
  },
  appbar: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 80,
    background: 'white',
  },
  logo: {
    height: '80%',
    paddingLeft: 80
  },
  searchButton: {
    height: 48,
    width: 300,
    borderRadius: 24,
    display: 'flex',
    justifyContent: 'space-between',
  },
  icon: {
    color: 'white',
    background: 'red',
    borderRadius: '50%',
    width: 32,
    height: 32,
  }
}))

function Navbar() {
  const classes = useStyles()

  return (
    <Box >
        <AppBar
          position='static'

        >
          <Toolbar className={classes.appbar} disableGutters={true} >
            <img src={logo} alt='airbnb-logo' className={classes.logo} />
            <Button
              variant='outlined'
              endIcon={<SearchIcon className={classes.icon} />}
              className={classes.searchButton}
            >
              検索をはじめる
            </Button>
            <div style={{marginRight: 80}}>
            <SelectLanButton />
            <UserMenuButton />
            </div>
          </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Navbar
