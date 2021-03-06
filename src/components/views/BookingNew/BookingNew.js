import React from 'react';
import styles from './BookingNew.module.scss';
import { Link } from 'react-router-dom';
import { Paper, TextField, Button, 
  Container, Toolbar, Typography } from '@material-ui/core';
import { getCurrentDate } from '../../../utils/getCurrentDate.js';

const getNewId = () => {
  // temp solution - generate 3 digit random numbers between 100 - 999
  return `booking-${Math.floor(Math.random()*(999-100+1)+100)}`;
};

const BookingNew = () => {
  const newBookingId = getNewId();
  return (
    <Container maxWidth='lg'>
      <Toolbar />
      <Typography className={styles.heading} variant='h3'>
        Add New Table Booking
      </Typography>
      <Paper className={styles.paper} elevation={24}>
        <form className={styles.form} noValidate autoComplete='off'>
          <Typography className={styles.subheading} variant='h5'>
            Booking data
          </Typography>
          <TextField
            id='booking-id'
            label='Booking ID'
            type='text'
            size='medium'
            defaultValue={newBookingId}
            disabled='true'
            className={styles.textField}
            InputLabelProps={{
              shrink: true,
            }}/>
          <TextField
            id='date'
            label='Date'
            type='date'
            size='medium'
            defaultValue={getCurrentDate()}
            className={styles.textField}
            InputLabelProps={{
              shrink: true,
            }}/>
          <TextField
            id='time'
            label='Time'
            type='time'
            size='medium'
            defaultValue='09:00'
            className={styles.textField}
            InputLabelProps={{
              shrink: true,
            }}/>
          <TextField
            className={styles.textField}
            id='table'
            label='Table No.'
            type='number'           
            inputProps={{ min: '1', max: '6', step: '1', style: { textAlign: 'center' } }}/>
          <TextField
            className={styles.textField}
            id='hours'
            label='Hours'   
            type='number'
            inputProps={{ min: '1', max: '8', step: '1', style: { textAlign: 'center' } }}/>
          <TextField
            className={styles.textField}
            id='people'
            label='People'
            type='number'
            inputProps={{ min: '1', max: '8', step: '1', style: { textAlign: 'center' } }}/>
          <Typography className={styles.subheading} variant='h5'>
            Client data
          </Typography>
          <TextField
            className={styles.textField}
            id='name'
            type='text'
            label='Name'
          />
          <TextField
            className={styles.textField}
            id='phone'
            type='tel'
            label='Phone number'/>
          <TextField
            className={styles.textField}
            id='email'
            type='e-mail'
            label='Email'/>
        </form>
        <Button
          variant='contained'
          color='secondary'
          component={Link}
          to={`${process.env.PUBLIC_URL}/tables`}
          type='submit'>
          Submit
        </Button>
      </Paper>
    </Container>  
  );
};

export default BookingNew;