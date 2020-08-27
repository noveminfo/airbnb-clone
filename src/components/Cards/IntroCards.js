import React from 'react';
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
    textAlign: 'left'
  },
  media: {
    height: 250
  },
  text: {
    height: 90,
    paddingTop: 8,
  }
});

function IntroCards({ imageUrl, title, description}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={4}>
      <CardActionArea
        disableRipple={true}
      >
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={title}
        />
        <CardContent className={classes.text}>
          <Typography variant="h6" style={{fontWeight: 'bold'}}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default IntroCards
