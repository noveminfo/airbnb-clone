import React from 'react'
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { IconButton, Typography, Box, makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const usestyles = makeStyles({
  button: {
    '& > *': {
      margin: 5
    }
  },
})

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function LangDialog({icon, text}) {
  const [open, setOpen] = React.useState(false);
  const classes = usestyles()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        color='inherit'
        onClick={handleClickOpen}
        disableRipple={true}
        style={{backgroundColor: 'transparent'}}
        className={classes.button}
      >
        <Typography>
        {icon}
        </Typography>
        <Typography variant='body2' style={{fontWeight: 600, textDecoration: 'underline'}}>
          {text}
        </Typography>
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        scroll="paper"
        keepMounted
        fullWidth={true}
        maxWidth="md"
        onClose={handleClose}
      >
        <DialogTitle>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.Let

            <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default LangDialog
