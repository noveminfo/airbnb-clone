import React from 'react'
import { makeStyles, Grid, Typography, Button } from '@material-ui/core'
import EventCards from './EventCards'

const useStyles = makeStyles({
  root: {
    paddingTop: '4%',
    paddingBottom: '6%',
    backgroundColor: 'black',
    color: 'white'
  },
  button: {
    
  }
})

function EventCardsContainer() {
  const classes = useStyles()
  const cardsDetail = [
    {
      imageUrl: 'https://a0.muscache.com/im/pictures/38aeacb5-7e77-4bf6-a813-754605020922.jpg?im_w=1680',
      title: 'ラスベガスのダンサーの1日を知ろう'
    },
    {
      imageUrl: 'https://a0.muscache.com/im/pictures/e77da774-9e72-46d6-a7fd-7d159f823046.jpg?im_w=720',
      title: '愛と光、Aisha Jacksonと過ごす癒しの夜',
    },
    {
      imageUrl: 'https://a0.muscache.com/im/pictures/7f607dbc-c51c-482e-8b67-55ded3e7f864.jpg?im_w=720',
      title: 'マジックと読心術の夜',
    },
    {
      imageUrl: 'https://a0.muscache.com/im/pictures/d88db0e7-ef5b-49c6-ae07-af3525ac252f.jpg?im_w=1680',
      title: 'ライブミュージカルに参加してみよう'
    }
  ]

  return (
    <Grid container justify='space-around' className={classes.root}>
      <Grid item xs={1} />
      <Grid item xs={10} >
        <Grid container justify='space-around' spacing={1}>
          <Grid item xs={6}>
            <Typography variant='h4' align='left' style={{fontWeight: 600}}>
            ブロードウェイのオンライン体験
            </Typography>
            <Typography variant='body1' align='left' style={{maxWidth: 450}}>
            ブロードウェイやほかの分野で活躍する人々と交流できる、ライブパフォーマンスや会話に参加しましょう。お家にいながら楽しめます。
            </Typography>
          </Grid>
          <Grid item xs={6} style={{textAlign: 'right'}}>
            <Button
              variant='outlined'
              color='inherit'
            >
              すべて見る
            </Button>
          </Grid>
          <Grid item xs={12} style={{paddingBottom: 20}} />
          <Grid item container xs={9} sm={6} md={6}>
            <Grid item xs={12}>
            <EventCards
              imageUrl={cardsDetail[0].imageUrl}
              title={cardsDetail[0].title}
              big
            />
            </Grid>
          </Grid>
          <Grid item container xs={3} sm={6} md={6} justify='space-around' spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
            <EventCards
              imageUrl={cardsDetail[1].imageUrl}
              title={cardsDetail[1].title}
            />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
            <EventCards
              imageUrl={cardsDetail[2].imageUrl}
              title={cardsDetail[2].title}
            />
            </Grid>
            <Grid item xs={12} sm={12}>
            <EventCards
              imageUrl={cardsDetail[3].imageUrl}
              title={cardsDetail[3].title}
            />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  )
}

export default EventCardsContainer
