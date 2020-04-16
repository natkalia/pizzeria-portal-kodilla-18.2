import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';
import { Typography, Toolbar, Paper, 
  TextField, Container, Button } from '@material-ui/core';

const Login = () => {
  return (
    <Container maxWidth='lg'>
      <Toolbar />
      <Typography className={styles.heading} variant='h3'>
        Login
      </Typography>
      <Paper className={styles.paper} elevation={24}>
        <form className={styles.form} noValidate autoComplete="off">
          <TextField
            className={styles.textField}
            required
            id="login"
            label="Login"
          />
          <TextField
            className={styles.textField}
            required
            id="password"
            label="Password"
            type="password"
          />
          <Button 
            className={styles.btn} 
            variant="contained" 
            color="secondary" 
            component={Link} 
            to={`${process.env.PUBLIC_URL}/`}>
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;