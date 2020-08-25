import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import TrackingBar from './TrackingBar';
import logo from './dronbot-logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 'auto',
    // height: 760,
    height: '100%',
    // height: '100vh',  // this height also works
    backgroundImage:'url(images/golden_gate_bridge_drone.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
  },
  mainLogo : {
    color: '#F0FFFF',
    fontFamily: 'Aclonica',
    fontSize: '6vw',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '2vw',
  },
}));

const Front  = (props) => {

  const { history } = props;
  const classes = useStyles();

  const user_id = localStorage.getItem('userID');
  if (user_id) {
    history.push('./dashboard');
  }

  return <Grid container className={classes.root}>
    <Grid item>
      <div className={classes.mainLogo}> <span >Dr<img src={logo}/>nbot</span></div>
    </Grid>
      <Grid item>
        <TrackingBar history={history}/>
      </Grid>
    </Grid>
}

export default Front;
