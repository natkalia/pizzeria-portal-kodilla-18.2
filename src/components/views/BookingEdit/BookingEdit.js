import React from 'react';
import styles from './BookingEdit.module.scss';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const BookingEdit = () => {
  let {id} = useParams();
  return ( 
    <Container maxWidth='lg'>
      <Toolbar />
      <Typography className={styles.heading} variant='h3'>
        Edit Booking ({id})
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
            defaultValue={id}
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
            value={'2020-04-12'}
            className={styles.textField}
            InputLabelProps={{
              shrink: true,
            }}/>
          <TextField
            id='time'
            label='Time'
            type='time'
            size='medium'
            value='15:00'
            className={styles.textField}
            InputLabelProps={{
              shrink: true,
            }}/>
          <TextField
            className={styles.textField}
            id='table'
            label='Table No.'
            type='number'
            value='2'
            inputProps={{ min: '1', max: '6', step: '1', style: { textAlign: 'center' } }}/>
          <TextField
            className={styles.textField}
            id='hours'
            label='Hours'   
            type='number'
            value='3'
            inputProps={{ min: '1', max: '8', step: '1', style: { textAlign: 'center' } }}/>
          <TextField
            className={styles.textField}
            id='people'
            label='People'
            type='number'
            value='3'
            inputProps={{ min: '1', max: '8', step: '1', style: { textAlign: 'center' } }} />
          <Typography className={styles.subheading} variant='h5'>
            Client data
          </Typography>
          <TextField
            className={styles.textField}
            id='name'
            type='text'
            label='Name'
            value='John Smith'
          />
          <TextField
            className={styles.textField}
            id='phone'
            type='tel'
            label='Phone number'
            value='123456789'/>
          <TextField
            className={styles.textField}
            id='email'
            type='e-mail'
            label='Email'
            value='john@smith.com'/>
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

export default BookingEdit;