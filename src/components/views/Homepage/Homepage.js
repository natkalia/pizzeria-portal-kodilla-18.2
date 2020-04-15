import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import styles from './Homepage.module.scss';
import {getCurrentDate} from '../../../utils/getCurrentDate.js';
import Typography from '@material-ui/core/Typography';

const bookings = [
  {id: 'booking-221', hour: '12:00', duration: 2, table: 1, people: 2},
  {id: 'booking-432', hour: '16:00', duration: 2, table: 1, people: 2},
  {id: 'booking-129', hour: '14:00', duration: 1, table: 1, people: 4},
];

const events = [
  {id: 'events-129', hour: '09:00', duration: 1, table: 2, people: 4},
  {id: 'events-769', hour: '12:00', duration: 2, table: 2, people: 3},
  {id: 'events-449', hour: '11:00', duration: 1, table: 2, people: 2},
];

const orders = [
  {id: 'order-231', amount: 12, location: 'table'},
  {id: 'order-002', amount: 33, location: 'remote'},
  {id: 'order-941', amount: 98, location: 'remote'},
  {id: 'order-202', amount: 82, location: 'remote'},
  {id: 'order-882', amount: 19, location: 'remote'},
  {id: 'order-456', amount: 25, location: 'table'},
];

const Homepage = () => {
  return (
    <Container maxWidth='lg'>
      <Toolbar />
      <Typography className={styles.heading} variant='h3'>
        Pizzeria Portal Dashboard
      </Typography>
      <Paper className={styles.paper} elevation={24}>
        <Typography className={styles.subheading} variant='h5'>
          Order statistics for today {getCurrentDate()}
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order No.</TableCell>
              <TableCell>Total order amount</TableCell>
              <TableCell>Table / remote order</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>${row.amount}</TableCell>
                <TableCell>{row.location}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell><strong>TOTAL REMOTE ORDERS:</strong> 2 / $100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>TOTAL TABLE ORDERS: </strong> 5 / $200</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <Paper className={styles.paper} elevation={24}>
        <Typography className={styles.subheading} variant='h5'>
            Bookings for today {getCurrentDate()}
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Boooking No.</TableCell>
              <TableCell>Hour</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Table</TableCell>
              <TableCell>People</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.hour}</TableCell>
                <TableCell>{row.duration}</TableCell>
                <TableCell>{row.table}</TableCell>
                <TableCell>{row.people}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Paper className={styles.paper} elevation={24}>
        <Typography className={styles.subheading} variant='h5'>
            Events for today {getCurrentDate()}
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Event No.</TableCell>
              <TableCell>Hour</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Table</TableCell>
              <TableCell>People</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.hour}</TableCell>
                <TableCell>{row.duration}</TableCell>
                <TableCell>{row.table}</TableCell>
                <TableCell>{row.people}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

    </Container>
  );
};

export default Homepage;