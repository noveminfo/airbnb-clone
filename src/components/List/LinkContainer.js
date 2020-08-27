import React from 'react'
import { Grid, Typography, makeStyles, Divider } from '@material-ui/core'
import LinkList from './LinkList'
import LangDialog from '../Dialog/LangDialog'
import DialogContainer from '../Dialog/DialogContainer'

const useStyles = makeStyles({
  root: {
    paddingTop: 30,
    paddingBottom: 30
  },
  list: {
    '& *': {
      paddingTop: 10
    }
  },
  footlist: {
    '& > *': {
      paddingRight: 5
    }
  }
})

const linksDetail = [
  {
    title: '企業情報',
    links: [
      'Airbnbのご利用方法',
      'ニュースルーム',
      'Airbnb Plus',
      'Airbnb Luxe',
      'HotelTonight',
      'Airbnbビジネスプログラム',
      'オリンピック',
      '採用情報'
    ]
  },
  {
    title: 'コミュニティ',
    links: [
      'ダイバーシティ＆ビロンギング',
      'アクセシビリティ対応',
      'Airbnbアソシエイト',
      'お友達を招待'
    ]
  },
  {
    title: 'ホスト',
    links: [
      'お部屋を掲載',
      'オンライン体験をホストする',
      '体験をホストする',
      'CEOブライアン・チェスキーからのメッセージ',
      '責任あるホスティング',
      'オープンホーム',
      'リソースセンター',
      'コミュニティセンター'
    ]
  },
  {
    title: 'サポート',
    links: [
      '新型コロナウイルスに関する最新情報',
      'ヘルプセンター',
      'キャンセルオプション',
      '近隣コミュニティサポート',
      '信頼＆完全'
    ]
  }
]

const footLinks = ['プライバシー', '利用規約', 'サイトマップ', '企業情報']

function LinkContainer() {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <Grid item xs={1} />
      <Grid item xs={10} >
        <Grid container style={{marginBottom: 50}} spacing={1}>
          {linksDetail.map((lists, index) => (
            <Grid key={index} item container xs={12} sm={12} md={3}
              className={classes.list}
            >
              <Grid item>
                <Typography variant='body2' align='left' style={{ fontWeight: 'bold' }}>
                  {lists.title}
                </Typography>
                {lists.links.map(link => (
                  <Typography key={link} variant='body2' align='left'>
                    <LinkList link={link} />
                  </Typography>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Divider variant='middle' />
        <Grid container style={{paddingTop: 24}}>
          <Grid item xs={8}>
            <Typography variant='body2' align='left'>
            <LinkList link='Airbnb Global Services Limited\n
            観光庁長官(01)第S0001号(2018年6月15日-2023年6月14日)' next />
            </Typography>
            <Typography variant='body2' align='left'
              className={classes.footlist}
            >
            <span>© 2020 Airbnb, Inc. All rights reserved</span>
            {footLinks.map(link => (
              <React.Fragment key={link}>
              <span>･</span>
              <LinkList link={link} />
              </React.Fragment>
            ))}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <DialogContainer />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  )
}

export default LinkContainer
