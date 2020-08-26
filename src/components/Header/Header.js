import React from 'react'
import { makeStyles, Typography, Button, Box, Grid, createMuiTheme, ThemeProvider } from '@material-ui/core'
import logo from '../../img/pngwave.png'
import image from '../../img/header-img.jpg'
import HeaderTabs from './HeaderTabs'
import SelectLanButton from '../Buttons/SelectLanButton'
import UserMenuButton from '../Buttons/UserMenuButton'

const theme = createMuiTheme()

theme.typography.h1 = {
  fontSize: '2.5rem',
}

const useStyles = makeStyles({
  root: {
    color: 'white',
    // backgroundImage: 'url(https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    height: 650
  },
  text: {
    paddingTop: 200,
    width: 300,
    textAlign: 'left',
  },
  logo: {
    height: '120%',
  },
  tooltar: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 80,
  },
  button: {
    borderRadius: 10,
    backgroundColor: 'white'
  }
})

function Header() {
  const classes = useStyles()

  return (
    <Grid
      container
      justify="center"
      className={classes.root}
    >
      <Grid item xs={1} />
      <Grid item xs={10} >
        <Box py={2}
          className={classes.tooltar}
        >
          <img src={logo} alt='airbnb-logo' className={classes.logo} />
          <HeaderTabs />
          <div >
            <SelectLanButton color='white' />
            <UserMenuButton />
          </div>
        </Box>
        <Box
          className={classes.text}
        >
          <ThemeProvider theme={theme}>
            <Typography variant='h1' gutterBottom>
              好奇心くすぐる旅に出かけよう
            </Typography>
          </ThemeProvider>
          <Typography variant='body2' gutterBottom>
            いつもとはひと味ちがう休暇をプランして、旅先の隠れた魅力を見つけに行こう。
          </Typography>
          <Button
            disableRipple={true}
            variant='contained'
            disableElevation={true}
            className={classes.button}
          >
            宿泊先を探す
          </Button>
        </Box>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  )
}

export default Header
