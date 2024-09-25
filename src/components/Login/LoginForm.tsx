// src/components/LoginForm.tsx

import { Button, Link, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    marginTop: '120px',  // Push the form down below the header
    width: '100%',  // Takes up full width of parent container
    maxWidth: '400px',  // Set a max width for the form to prevent it from stretching too wide
  },
  inputField: {
    marginBottom: '15px',
    width: '100%',
  },
  button: {
    width: '100%',
    marginTop: '20px',
  },
  link: {
    marginTop: '10px',
    textDecoration: 'none',
  },
  linkContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic or dispatch Redux action here
    console.log('Logging in with', { email, password });
  };

  return (
    <Paper className={classes.formContainer} elevation={3}>
      <Typography variant="h5" gutterBottom>
        User Login Form
      </Typography>
      <TextField
        label="Email ID"
        variant="outlined"
        className={classes.inputField}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        className={classes.inputField}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <Button 
        variant="contained" 
        color="primary" 
        className={classes.button} 
        onClick={handleLogin}
      >
        Login
      </Button>
      <div className={classes.linkContainer}>
        <Typography variant="body2">
          Don't have an account?{' '}
          <Link href="#" className={classes.link}>
            Signup now
          </Link>
        </Typography>
      </div>
    </Paper>
  );
};

export default LoginForm;
