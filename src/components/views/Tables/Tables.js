import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import { Button, Paper, Toolbar, Container,
  Typography, TextField, Table, TableBody, 
  TableCell, TableHead, TableRow, Icon } from '@material-ui/core';
import {getCurrentDate} from '../../../utils/getCurrentDate.js';

const demoContent = [
  {id: '1', time: '09:00', table1: null, table2: null, table3: 'booking-789'},
  {id: '2', time: '09:30', table1: null, table2: null, table3: 'booking-789'},
  {id: '3', time: '10:00', table1: 'booking-123', table2: 'booking-999', table3: null},
  {id: '4', time: '10:30', table1: 'booking-123', table2: 'booking-999', table3: null},
  {id: '5', time: '11:00', table1: 'booking-123', table2: 'events-111', table3: 'events-456'},
  {id: '6', time: '11:30', table1: 'booking-123', table2: 'events-111', table3: 'events-456'},
  {id: '7', time: '12:00', table1: null, table2: 'events-111', table3: null},
];

const Tables = () => {
  return (
    <Container maxWidth='lg'>
      <Toolbar />
      <Typography className={styles.heading} variant='h3'>
        Tables
      </Typography>
      <Paper className={styles.paper} elevation={24}>
        <Button 
          color='secondary' 
          component={Link} 
          to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
          Add New Booking
          <Icon className={styles.icon} color='secondary'>add_circle</Icon>
        </Button>
        <Button 
          color='secondary' 
          component={Link} 
          to={`${process.env.PUBLIC_URL}/tables/events/new`}>
          Add New Event
          <Icon className={styles.icon} color='secondary'>add_circle</Icon>
        </Button>

        <form className={styles.form} noValidate>
          
          <TextField
            className={styles.textField}
            id='date'
            label='Date'
            type='date'
            size='medium'
            variant='filled'
            autoFocus='true'
            required='true'
            defaultValue={getCurrentDate()}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            className={styles.textField}
            id='time-from'
            label='From'
            type='time'
            size='medium'
            variant='filled'
            defaultValue='09:00'
            required='true'
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            className={styles.textField}
            id='time-to'
            label='To'
            type='time'
            size='medium'
            variant='filled'
            defaultValue='18:00'
            required='true'
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button>
            <Icon 
              fontSize='large'
              className={styles.icon} 
              color='primary'>
              search
            </Icon>
          </Button>
        </form>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Table 1</TableCell>
              <TableCell>Table 2</TableCell>
              <TableCell>Table 3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.id} >
                <TableCell scope='row' component='th'>
                  {row.time}
                </TableCell>
                <TableCell>
                  {row.table1 && (
                    <Button 
                      component={Link}
                      color='secondary' 
                      to={`${process.env.PUBLIC_URL}/tables/${row.table1.substring(0, row.table1.length-4)}/${row.table1}`}>                      
                      {row.table1}
                      <Icon className={styles.icon} color='secondary'>create</Icon>
                    </Button>
                  )}

                  {(row.table1 === null) && (
                    <>
                      <Button 
                        className={styles.btn}
                        color='primary' 
                        variant='outlined'
                        component={Link} 
                        to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
                        New Booking
                      </Button>
                      <Button 
                        className={styles.btn}
                        color='primary' 
                        variant='outlined'
                        component={Link} 
                        to={`${process.env.PUBLIC_URL}/tables/events/new`}>
                        New Event
                      </Button>
                    </>
                  )}

                </TableCell>
                <TableCell>

                  {row.table2 && (
                    <Button 
                      component={Link}
                      color='secondary' 
                      to={`${process.env.PUBLIC_URL}/tables/${row.table2.substring(0, row.table2.length-4)}/${row.table2}`}>
                      {row.table2}
                      <Icon className={styles.icon} color='secondary'>create</Icon>
                    </Button>
                  )}

                  {(row.table2 === null) && (
                    <>
                      <Button 
                        className={styles.btn}
                        color='primary' 
                        variant='outlined'
                        component={Link} 
                        to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
                        New Booking
                      </Button>
                      <Button 
                        className={styles.btn}
                        color='primary' 
                        variant='outlined'
                        component={Link} 
                        to={`${process.env.PUBLIC_URL}/tables/events/new`}>
                        New Event
                      </Button>
                    </>
                  )}  

                </TableCell>
                <TableCell>

                  {row.table3 && (
                    <Button 
                      component={Link}
                      color='secondary' 
                      to={`${process.env.PUBLIC_URL}/tables/${row.table3.substring(0, row.table3.length-4)}/${row.table3}`}>
                      {row.table3}
                      <Icon className={styles.icon} color='secondary'>create</Icon>
                    </Button>
                  )}

                  {(row.table3 === null) && (
                    <>
                      <Button 
                        className={styles.btn}
                        color='primary' 
                        variant='outlined'
                        component={Link} 
                        to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
                        New Booking
                      </Button>
                      <Button 
                        className={styles.btn}
                        color='primary' 
                        variant='outlined'
                        component={Link} 
                        to={`${process.env.PUBLIC_URL}/tables/events/new`}>
                        New Event
                      </Button>
                    </>
                  )}      

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </Paper>
    </Container>
  );
};

export default Tables;