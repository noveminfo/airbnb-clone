import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Button, Popover, Paper, MenuList, MenuItem, makeStyles, Typography, Divider } from '@material-ui/core'

const useStyles = makeStyles({
  button: {
    borderRadius: 24,
    width: 77,
    height: 42,
    margin: 5,
    justifyContent: 'space-evenly',
    backgroundColor: 'white'
  },
  popover: {
    marginTop: 10,
  },
  paper: {
    width: 220,
  },
  icon: {
    width: 18,
    height: 18,
  },
  accoutIcon: {
    width: 30,
    height: 30,
  }
})

function UserMenuButton() {
  const classes = useStyles()
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
        variant='outlined'
        startIcon={<MenuIcon className={classes.icon} />}
        endIcon={<AccountCircleIcon className={classes.accoutIcon} />}
        className={classes.button}
      >
        
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
              <Typography

              >
                登録
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography

              >
                ログイン
              </Typography>
            </MenuItem>
            <Divider />
            {['宿泊をホストする', '体験をホストする', 'ヘルプ'].map(item => (
              <MenuItem key={item} onClick={handleClose}>
                <Typography>
                  {item}
                </Typography>
              </MenuItem>
            ))}
          </MenuList>
        </Paper>
      </Popover>
    </>
  )
}

export default UserMenuButton
