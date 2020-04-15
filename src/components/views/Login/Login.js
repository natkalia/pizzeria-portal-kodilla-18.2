import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import styles from './Login.module.scss';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';

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