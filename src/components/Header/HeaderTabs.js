import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, button, tabpanel, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === 0 ? (
        <Box p={3} className={tabpanel}>
          <Button className={button}>
          ロケーション<br />行き先はどちらですか？
          </Button>
          <Button className={button}>
            チェックイン<br />日付を追加
          </Button>
          <Button className={button}>
            チェックアウト<br />日付を追加
          </Button>
          <Button className={button}>
            人数<br />ゲスト数を追加
          </Button>
        </Box>
      ): (
        <Box p={3} className={tabpanel}>
          <Button className={button}>
          ロケーション<br />行き先はどちらですか？
          </Button>
          <Button className={button}>
            日付<br />希望日を追加
          </Button>
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  tab: {
    marginRight: theme.spacing(1),
    minWidth: 50,
    fontSize: theme.typography.pxToRem(15),
  },
  tabpanel: {
    borderRadius: 24,
    backgroundColor: 'white',
    padding: 0,
    width: 800,
    marginTop: 20,
  },
  button: {
    borderRadius: 24,
    height: '100%',
    width: '25%'
  },
  button_two: {
    borderRadius: 24,
    height: '100%',
    width: '50%'
  }
}));

function HeaderTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor='inherit'
          centered
        >
          {['宿泊先', '体験', 'オンライン体験'].map(item => (
            <Tab
              key={item}
              label={item}
              disableRipple={true}
              className={classes.tab} />
          ))}
        </Tabs>

        <TabPanel value={value} index={0}
          button={classes.button}
          tabpanel={classes.tabpanel}
        >
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}
          button={classes.button_two}
          tabpanel={classes.tabpanel}
        >
          Item Two
        </TabPanel>
    </div>
  )
}

export default HeaderTabs
