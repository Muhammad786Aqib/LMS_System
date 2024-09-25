import { AppBar, Button, Grid, Toolbar, Typography } from '@material-ui/core';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AdminLogin from './components/Login/AdminLogin';
import LoginForm from './components/Login/LoginForm';
// src/App.tsx
import React from 'react';
import Register from './components/Signup/Register';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Library Management System
            </Typography>
            <Button color="inherit" component={Link} to="/signup">Signup</Button>
            <Button color="inherit" component={Link} to="/login">Admin Login</Button>
            <Button color="inherit" component={Link} to="/register">Register</Button>
          </Toolbar>
        </AppBar>

        <Grid container spacing={3} justifyContent="center" style={{ marginTop: '2rem' }}>
          <Grid item xs={12} md={6}>
            <Routes>
            <Route path="/" element={<LoginForm/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<AdminLogin/>} />
              <Route path="/register" element={<Register/>} />
            </Routes>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
