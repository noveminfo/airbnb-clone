import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import IntroCards from './IntroCards'

const useStyles = makeStyles({
  root: {
    paddingTop: '2%',
    paddingBottom: '4%',
    backgroundColor: 'white'
  },
  secondArea: {
    backgroundColor: 'black'
  }
})

function CardsContainer() {
  const classes = useStyles()
  const cardsDetail = [
    {
      imageUrl: 'https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=1200',
      title: 'オンライン体験',
      description: '世界各地のホストがご案内。みんなで一緒に参加する、ここでしかできない体験。'
    },
    {
      imageUrl: 'https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=1200',
      title: 'ユニークなリスティング',
      description: '寝るだけではもったいないお部屋。'
    },
    {
      imageUrl: 'https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=1200',
      title: 'まるまる貸切',
      description: '家族や友人と、ゆったり快適に過ごせるプライベート空間。'
    }
  ]

  return (
    <Grid container className={classes.root}>
      <Grid item xs={1} />
      <Grid item xs={10} >
        <Grid container justify='space-around' spacing={2}>
          
          {cardsDetail.map((card, index) => (
          <Grid key={index} item xs={12} sm={4}>
          <IntroCards
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          />
          </Grid>
        ))}
          
        </Grid>

      </Grid>
      <Grid item xs={1} />
    </Grid>
  )
}

export default CardsContainer
