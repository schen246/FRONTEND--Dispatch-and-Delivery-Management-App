import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  Card,
//  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
//  Button,
  LinearProgress
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: 'flex',
    alignContent: 'space-around',
    flexDirection: 'column'
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  },
  firstRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  name: {
    display: 'flex',
    alignContent: 'space-around',
    flexDirection: 'column',
    margin: 'auto',
  }
}));

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiAvatar: {
      circle: {
        color: '#F0FFFF',
        background: '#7ccccc'
      },
      root: {
        width: "150px",
        height: "150px"
      }
    },
    // MuiTypography: {
    //   h1: {
    //     fontSize: '70px',
    //     position: 'relative',
    //     top: '30px',
    //     left: '80px'
    //   },
    //   h2: {
    //     fontSize: '60px',
    //     position: 'relative',
    //     top: '100px',
    //     left: '80px'
    //   }
    // }
  },
});

const AccountProfile = props => {
  
  const { className, ...rest } = props;

  const classes = useStyles();

  const { profile } = props;
  console.log('profile at profile.js -->', profile);
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.details}>
          <div className={classes.firstRow} style={{height: '80%'}}>
            <div className={classes.name} style={{width: '30%'}}>
              <ThemeProvider theme={theme}>
                <Typography variant='h3' style={{height: '50%'}}> {profile.lastName}, </Typography>
                <Typography variant='h4' style={{height: '50%'}}> {profile.firstName} </Typography>
              </ThemeProvider>
            </div>
            <div style={{width: '30%', alignItems: 'center', margin: 'auto'}}>
              <ThemeProvider theme={theme}>
                <Avatar></Avatar>
              </ThemeProvider>
            </div>
          </div>
          <br/>
          <div className={classes.secondRow} style={{height: '20%'}}>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {profile.city}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              {moment().format('hh:mm A')}
            </Typography>
          </div>
          {/*<Avatar*/}
          {/*  className={classes.avatar}*/}
          {/*  src={user.avatar}*/}
          {/*/>*/}
        </div>
        <div className={classes.progress}>
          <Typography variant="body1">Profile Completeness: 90%</Typography>
          <LinearProgress
            value={90}
            variant="determinate"
          />
        </div>
        <br />
        <br/>
      </CardContent>
      <Divider />

      {/*<CardActions>*/}
      {/*  <Button*/}
      {/*    className={classes.uploadButton}*/}
      {/*    color="primary"*/}
      {/*    variant="text"*/}
      {/*  >*/}
      {/*    Upload picture*/}
      {/*  </Button>*/}
      {/*  <Button variant="text">Remove picture</Button>*/}
      {/*</CardActions>*/}
    </Card>
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string
};

export default AccountProfile;
