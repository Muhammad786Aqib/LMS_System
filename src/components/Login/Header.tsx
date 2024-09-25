// src/components/Header.tsx

import { AppBar, Link, Toolbar, Typography } from '@material-ui/core';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: '#37474F',
        color: 'white',
        position: 'fixed',  // Make the header sticky
        top: 0,            // Stick it to the top of the viewport
        left: 0,
        width: '100%',     // Ensure it takes the full width of the screen
        zIndex: 1000,      // Keep it above other elements (like content)
      },
  link: {
    marginLeft: 'auto',
    marginRight: '10px',
    color: 'white',
    textDecoration: 'none',
  },
}));

const Header = () => {
  const classes = useStyles();
  
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography variant="h6">Library Management System</Typography>
        <Link href="#" className={classes.link}>User Login</Link>
        <Link href="#" className={classes.link}>Admin Login</Link>
        <Link href="#" className={classes.link}>Signup</Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
