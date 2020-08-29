import React from 'react'
import LangDialog from './LangDialog'
import { Box, makeStyles, IconButton } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import LanguageIcon from '@material-ui/icons/Language'

const useStyles = makeStyles({
  root: {
    '& > * + *': {
      paddingLeft: 40,
    },
  },
  icon: {
    height: 24,
    width: 24,
    color: 'black',
    marginTop: -10,
  },
  
})

function DialogContainer() {
  const classes = useStyles()
  return (
    <Box display='flex' justifyContent='flex-end' className={classes.root}>
      <Box display='flex'>
      <LangDialog icon={<LanguageIcon />} text={'日本語(JP)'}/>
      <LangDialog icon={'¥'} text={'JPY'}/>
      </Box>
      <Box >
        <IconButton disableRipple={true} style={{backgroundColor: 'transparent'}}>
          <FacebookIcon className={classes.icon} />
        </IconButton>
        <IconButton disableRipple={true} style={{backgroundColor: 'transparent'}}>
        <TwitterIcon className={classes.icon} />
        </IconButton>
        <IconButton disableRipple={true} style={{backgroundColor: 'transparent'}}>
        <InstagramIcon className={classes.icon} />
        </IconButton>

      </Box>
    </Box>
  )
}

export default DialogContainer
