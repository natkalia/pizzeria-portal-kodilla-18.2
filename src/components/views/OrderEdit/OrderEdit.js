import React from 'react';
import styles from './OrderEdit.module.scss';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';

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


const demoContentOrder = [
  {
    id: 'cake',
    name: 'Zio Stefano\'s Doughnut',
    price: 9,
    options: ['large'],
  },
  {
    id: 'pizza',
    name: 'Nonna Alba\'s Pizza',
    price: 10,
    options: ['large'],
  },
];

const OrderEdit= () => {
  const {id} = useParams();
  return (
    <Container maxWidth='lg'>
      <Toolbar/>
      <Typography className={styles.heading} variant='h3'>
        Edit Order ({id})
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
      </Paper>
      <Paper className={styles.paper} elevation={24}>
        <Typography className={styles.subheading} variant='h5'>
          Choose products for order:
        </Typography>
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
      </Paper>
      <Paper className={styles.paper} elevation={24}>
        <Typography className={styles.subheading} variant='h5'>
          <p>Order No.: <strong>{id}</strong></p>
          <p>Table No.: <strong>1</strong></p>
        </Typography>
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
            {demoContentOrder.map(row => (
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
                <TableCell>1</TableCell>
                <TableCell>
                  <Button 
                    className={styles.btn}
                    variant='contained' 
                    color='primary'>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Typography className={styles.subheading} variant='h5'>
          Total: <span><strong>$19</strong></span>
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

export default OrderEdit;