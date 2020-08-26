import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    height: '100%',
    borderRadius: 16,
    textAlign: 'left',
    backgroundColor: 'gray'
  },
  media: {
    height: (props) => props.big ? 600 : 260,

  },
  text: {
    height: 60,
    paddingTop: 5,
    color: 'white'
  }
});

function EventCards(props) {
  const classes = useStyles(props)

  return (
    <Card className={classes.root} elevation={4}>
      <CardActionArea
        disableRipple={true}
      >
        <CardMedia
          className={classes.media}
          image={props.imageUrl}
          title={props.title}
        />
        <CardContent className={classes.text}>
          <Typography gutterBottom variant="body1">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default EventCards
