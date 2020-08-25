import React , {useState, useEffect}from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { AccountProfile, AccountDetails } from './components';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  }
}));

const Account = (props) => {
  const classes = useStyles();

  const { history } = props;
  const user_id = localStorage.getItem('userID');
  if (!user_id) {
    history.push('./sign-in');
  }

  const [profile, setProfile] = useState({
    user_id: localStorage.getItem('userID'),
    firstName: localStorage.getItem('firstName'),
    lastName: localStorage.getItem('lastName'),
    email: localStorage.getItem('email'),
    phoneNumber: localStorage.getItem('phoneNumber'),
    primaryAddress: localStorage.getItem('primaryAddress'),
    city: localStorage.getItem('city'),
    zipCode: localStorage.getItem('zipCode'),
  });

  // we should get this information from login in the future

  function updateProfile(info) {
    setProfile(info);
  }

  console.log('profile-->', profile);

  return (
    <div className={classes.root}>
        <Grid
        container
        spacing={4}
      >
         <Grid
          item
          lg={5}
          md={6}
          xl={4}
          xs={12}
        >
          <AccountProfile profile={profile}/>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          xl={8}
          xs={12}
        >
          <AccountDetails profile={profile} updateProfile={updateProfile}/>
           </Grid>
       </Grid>
    </div>
  );
};

export default Account;
