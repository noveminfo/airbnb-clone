import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LanguageIcon from '@material-ui/icons/Language'
import { Button, Popover, Paper, MenuList, MenuItem, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  button: {
    borderRadius: 24,
    width: 61,
    height: 42,
    margin: 5,
    color: (props) => props.color === 'white' ? 'white' : 'black'
  },
  popover: {
    marginTop: 10,
  },
  paper: {
    width: 180,
  },
  icon: {
    width: 18,
    height: 18,
  }
})

function SelectLanButton(props) {
  const classes = useStyles(props)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <>
      <Button
        onClick={handleClick}
        disableRipple={true}
        className={classes.button}
      >
        <LanguageIcon className={classes.icon} />
        <ExpandMoreIcon className={classes.icon} />
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        className={classes.popover}
      >
        <Paper className={classes.paper} >
          <MenuList autoFocusItem={open}>
            <MenuItem onClick={handleClose} >
              <LanguageIcon className={classes.icon} />
              <Typography
                style={{paddingLeft: 10}}
              >
                日本語(JP)
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              ￥
              <Typography
                style={{paddingLeft: 10}}
              >
                JPY
              </Typography>
            </MenuItem>
          </MenuList>
        </Paper>
      </Popover>
    </>
  )
}

export default SelectLanButton
