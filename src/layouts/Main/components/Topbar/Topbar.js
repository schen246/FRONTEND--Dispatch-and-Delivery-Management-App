import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { fade, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
    color: 'white',
    size: 'large',
    variant: 'contained',
  },
  logo : {
    width: '10%',
    height: 'auto',
  },
  logoText : {
    color: '#F0FFFF',
    fontFamily: 'Aclonica',
    fontSize: 'large',
    paddingRight: '1vw',
  },
  inputIcon: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    size: 'large',
    disabled: true,
  },
  sideBarController: {
    color: '#F0FFFF',
    fontSize: 'large',
  }
}));

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiIconButton: {
      label: {
        fontFamily: 'Aclonica'
      }
    },
    MuiSvgIcon: {
      root: {
        fontSize: "20px",
        width: "55px",
        height: '41px'
      }
    }
  },
});

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const handleSignOut = () => {
    localStorage.clear();
  }

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/">
          <span className={classes.logoText}> Dronbot </span>
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>

          {/* <IconButton color="inherit">
            * <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton> */}

          <RouterLink to='/sign-in'><IconButton
            className={classes.signOutButton}
            color="inherit"
            onClick={handleSignOut}
          >
            <span className={classes.logoText}>Sign out </span>
            <InputIcon />
          </IconButton></RouterLink>

        </Hidden>
        <Hidden lgUp>
          <ThemeProvider theme={theme}>
            <IconButton
              className={classes.sideBarController}
              onClick={onSidebarOpen}
            >
              <MenuIcon />
            </IconButton>
          </ThemeProvider>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
