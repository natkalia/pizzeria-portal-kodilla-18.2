import React from 'react';
import styles from './EventsEdit.module.scss';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Paper, TextField, Button, 
  Container, Toolbar, Typography } from '@material-ui/core';

const EventsEdit = () => {
  let {id} = useParams();
  return ( 
    <Container maxWidth='lg'>
      <Toolbar />
      <Typography className={styles.heading} variant='h3'>
        Edit Table Event ({id})
      </Typography>
      <Paper className={styles.paper} elevation={24}>
        <form className={styles.form} noValidate autoComplete='off'>
          <Typography className={styles.subheading} variant='h5'>
            Event data
          </Typography>
          <TextField
            id='event-id'
            label='Event ID'
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
            value='2020-05-05'
            className={styles.textField}
            InputLabelProps={{
              shrink: true,
            }}/>
          <TextField
            id='time'
            label='Time'
            type='time'
            size='medium'
            value='13:00'
            className={styles.textField}
            InputLabelProps={{
              shrink: true,
            }}/>
          <TextField
            className={styles.textField}
            id='table'
            label='Table No.'
            type='number'
            value='3'
            inputProps={{ min: '1', max: '6', step: '1', style: { textAlign: 'center' } }}/>
          <TextField
            className={styles.textField}
            id='hours'
            label='Hours'   
            type='number'
            value='4'
            inputProps={{ min: '1', max: '8', step: '1', style: { textAlign: 'center' } }}/>
          <TextField
            className={styles.textField}
            id='repeat'
            label='Repeat (y/n)' 
            value='no'  
            inputProps={{ style: { textAlign: 'center' } } }
            type='text'/>
          <TextField
            className={styles.textField}
            id='people'
            label='People'
            type='number'
            value='4'
            inputProps={{ min: '1', max: '8', step: '1', style: { textAlign: 'center' } }}/>
          <Typography className={styles.ding} variant='h5'>
            Client data
          </Typography>
          <TextField
            className={styles.textField}
            id='name'
            type='text'
            label='Name'
            value='John'
          />
          <TextField
            className={styles.textField}
            id='phone'
            type='tel'
            value='Smith'
            label='Phone number'/>
          <TextField
            className={styles.textField}
            id='email'
            type='e-mail'
            value='john@smith.com'
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

export default EventsEdit;