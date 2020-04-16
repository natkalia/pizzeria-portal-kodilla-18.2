import React from 'react';
import styles from './Kitchen.module.scss';
import { Paper, Container, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Typography, Checkbox, Toolbar } from '@material-ui/core';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

const demoContent = [
  { id: 'order-122', table: '1', order: ['pizza', 'salad'], status: 'completed', timestamp: 1582272522 },
  { id: 'order-233', table: '2', order: ['salad', 'pizza'], status: 'completed', timestamp: 1586235344 },
  { id: 'order-876', table: null, order: ['pizza'], status: 'ordered', timestamp: 1582289789 },
  { id: 'order-789', table: '5', order: ['pizza'], status: 'ordered', timestamp: 1589999999 },
  { id: 'order-392', table: null, order: ['pizza', 'salad', 'breakfast'], status: 'ordered', timestamp: 1582223344 },
];

const sortArrByTime = arr => {
  const byTime = demoContent.slice(0);
  byTime.sort((a,b) => a.timestamp - b.timestamp);
  return byTime;
};

const getTime = timestamp => {
  timestamp = new Date(timestamp);
  timestamp = timestamp.toLocaleTimeString();
  return timestamp;
};

const Kitchen = () => {
  return (
    <Container maxWidth='lg'>
      <Toolbar/>
      <Typography className={styles.heading} variant='h3'>
        Kitchen
      </Typography>
      <Paper className={styles.paper} elevation={24}>
        <TableContainer className={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Start time</TableCell>
                <TableCell>Table No.</TableCell>
                <TableCell>Order No.</TableCell>
                <TableCell>Order details</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Check completed</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortArrByTime(demoContent).map(row => (
                <TableRow key={row.id}>
                  <TableCell>{getTime(row.timestamp)}</TableCell>
                  <TableCell>{row.table}</TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.order.join(', ')}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    <Checkbox 
                      defaultChecked={(row.status === 'completed') ? true : false } 
                      icon={<CircleUnchecked className={styles.icon}/>}
                      checkedIcon={<CircleCheckedFilled className={styles.icon} />}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default Kitchen;