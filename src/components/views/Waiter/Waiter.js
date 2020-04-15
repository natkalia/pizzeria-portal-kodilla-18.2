import React from 'react';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const demoContent = [
  {id: '1', status: 'free', order: null},
  {id: '2', status: 'thinking', order: null},
  {id: '3', status: 'ordered', order: 'order-123'},
  {id: '4', status: 'prepared', order: 'order-234'},
  {id: '5', status: 'delivered', order: 'order-345'},
  {id: '6', status: 'paid', order: 'order-456'},
  {id: '7', status: 'free', order: null},
  {id: '8', status: 'prepared', order: 'order-222'},
  {id: '9', status: 'free', order: null},
  {id: '10', status: 'ordered', order: 'order-789'},
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button 
            variant='contained'>
            thinking
          </Button>
          <Button 
            className={styles.btn} 
            color='secondary' 
            variant='contained'
            component={Link} 
            to={`${process.env.PUBLIC_URL}/waiter/order/new`}>
            new order
          </Button>
        </>
      );
    case 'thinking':
      return (
        <Button 
          component={Link} 
          to={`${process.env.PUBLIC_URL}/waiter/order/new`}
          color='secondary' 
          variant='contained'>
          new order
        </Button>
      );
    case 'ordered':
      return (
        <Button color='secondary' variant='contained'>prepared</Button>
      );
    case 'prepared':
      return (
        <Button color='secondary' variant='contained'>delivered</Button>
      );
    case 'delivered':
      return (
        <Button color='secondary' variant='contained'>paid</Button>
      );
    case 'paid':
      return (
        <Button color='secondary' variant='contained'>free</Button>
      );
    default:
      return null;
  }
};

const Waiter = () => (
  <Container maxWidth='lg'>
    <Toolbar />
    <Typography className={styles.heading} variant='h3'>
      Waiter
    </Typography>
    <Paper className={styles.paper} elevation={24}>     
      <Button 
        color='secondary' 
        component={Link} 
        to={`${process.env.PUBLIC_URL}/waiter/order/new`}>
        Add New Order
        <Icon className={styles.icon} color='secondary'>add_circle</Icon>
      </Button>
      <Table className={styles.table}> 
        <TableHead>
          <TableRow>
            <TableCell>Table No.</TableCell>
            <TableCell>Order No.</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell>
                {row.order && (
                  <Button 
                    color='secondary' 
                    component={Link} 
                    to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                    {row.order}
                    <Icon className={styles.icon} color='secondary'>create</Icon>
                  </Button>
                )}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </Container>
);

export default Waiter;

