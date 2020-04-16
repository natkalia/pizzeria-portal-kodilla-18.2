import React from 'react';
import styles from './OrderNew.module.scss';
import { Link } from 'react-router-dom';
import { Paper, Container, Typography, Table,
  TableBody, TableCell, TableHead, TableRow, TableContainer,
  Select, MenuItem, Button, Toolbar, TextField } from '@material-ui/core';

const demoContent = [
  {
    id: 'cake',
    name: 'Zio Stefano\'s Doughnut',
    price: 9,
    options: ['small', 'medium', 'large'],
  },
  {
    id: 'pizza',
    name: 'Nonna Alba\'s Pizza',
    price: 10,
    options: ['small', 'medium', 'large'],
  },
  {
    id: 'breakfast',
    name: 'Zia Giulia\'s Breakfast',
    price: 1,
    options: ['small', 'medium', 'large'],
  },
  {
    id: 'salad',
    name: 'Nonno Alberto\'s Salad',
    price: 4,
    options: ['small', 'medium', 'large'],
  },
];

const getNewId = () => {
  // temp solution - generate 3 digit random numbers between 100 - 999
  return `order-${Math.floor(Math.random()*(999-100+1)+100)}`;
};

const OrderNew = () => {
  const newOrderId = getNewId();
  return (
    <Container maxWidth='lg'>
      <Toolbar/>
      <Typography className={styles.heading} variant='h3'>
        Add New Order
      </Typography>
      <Paper className={styles.paper} elevation={24}>
        <Typography className={styles.subheading} variant='h5'>
        Choose table (not required for remote orders):
        </Typography>
        <TextField
          className={styles.textField}
          id='table'
          label='Table No.'
          type='number'
          defaultValue='1'
          inputProps={{ min: '1', max: '6', step: '1', style: { textAlign: 'center' }}}/>
      </Paper>
      <Paper className={styles.paper} elevation={24}>
        <Typography className={styles.subheading} variant='h5'>
          Full menu:
        </Typography>
        <TableContainer className={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product Id</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Product Price</TableCell>
                <TableCell>Product Options</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {demoContent.map(row => (
                <TableRow key={row.id}>
                  <TableCell component='th' scope='row'>
                    {row.id}
                  </TableCell>
                  <TableCell>
                    <strong>{row.name}</strong>
                  </TableCell>
                  <TableCell>${row.price}</TableCell>
                  <TableCell>
                    <div>
                      {row.options.map(option => (
                        <p key={option}>{option}</p>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Paper className={styles.paper} elevation={24}>
        <Typography className={styles.subheading} variant='h5'>
          Choose products for order:
        </Typography>
        <TableContainer className={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product Id</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Product Price</TableCell>
                <TableCell>Product Options</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {demoContent.map(row => (
                <TableRow key={row.id}>
                  <TableCell component='th' scope='row'>
                    {row.id}
                  </TableCell>
                  <TableCell><strong>{row.name}</strong></TableCell>
                  <TableCell>${row.price}</TableCell>
                  <TableCell>
                    <Select 
                      defaultValue='medium'
                      className={styles.select}>
                      {row.options.map(option => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <TextField
                      className={styles.textField}
                      id='table'
                      type='number'
                      defaultValue='1'
                      inputProps={{ min: '1', max: '4', step: '1', style: { textAlign: 'center' }}}/>
                  </TableCell>
                  <TableCell>
                    <Button
                      className={styles.btn} 
                      variant='contained' 
                      color='primary'>
                      Add
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Paper className={styles.paper} elevation={24}>
        <Typography className={styles.subheading} variant='h5'>
          <p>Order No.: <strong>{newOrderId}</strong></p>
          <p>Table No.: <strong></strong></p>
        </Typography>
        <TableContainer className={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product Id</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Product Price</TableCell>
                <TableCell>Product Options</TableCell>
                <TableCell>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography className={styles.subheading} variant='h5'>
          Total: <span><strong>$0</strong></span>
        </Typography>
        <Button
          component={Link}
          to={`${process.env.PUBLIC_URL}/waiter`}
          variant='contained'
          color='secondary'>          
          Submit
        </Button>
      </Paper>
    </Container>
  );
};

export default OrderNew;