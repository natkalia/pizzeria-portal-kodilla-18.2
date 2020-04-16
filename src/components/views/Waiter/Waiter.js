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
import PropTypes from 'prop-types';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      // error: PropTypes.anyOf(PropTypes.bool,PropTypes.string),
      error: PropTypes.any,
    }),
    tables: PropTypes.any, //TODO: why problem with array
    updateTableStatus: PropTypes.func,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  handleClick = (id, newStatus, order) => {
  // TODO: change implementation of redux/api in case of new order clicking
  // to make the change happen after form is submitted in new order
    let verifiedOrder;
    if (newStatus === 'free') {
      verifiedOrder = null;
    } else if (newStatus === 'ordered') {
      verifiedOrder = 'order-999'; //TODO: replace this temp solution
    } else {
      verifiedOrder = order;
    }
    this.props.updateTableStatus(id, newStatus, verifiedOrder);
  }

  renderActions(id, status, order){
    switch (status) {
      case 'free':
        return (
          <>
            <Button 
              onClick={() => this.handleClick(id, 'thinking', order)}
              variant='contained'>
              thinking
            </Button>
            <Button 
              onClick={() => this.handleClick(id, 'ordered', order)}
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
            onClick={() => this.handleClick(id, 'ordered', order)}
            to={`${process.env.PUBLIC_URL}/waiter/order/new`}
            color='secondary' 
            variant='contained'>
            new order
          </Button>
        );
      case 'ordered':
        return (
          <Button 
            onClick={() => this.handleClick(id, 'prepared', order)}
            color='secondary' 
            variant='contained'>
            prepared
          </Button>
        );
      case 'prepared':
        return (
          <Button 
            onClick={() => this.handleClick(id, 'delivered', order)}
            color='secondary' 
            variant='contained'>
            delivered
          </Button>
        );
      case 'delivered':
        return (
          <Button 
            onClick={() => this.handleClick(id, 'paid', order)}
            color='secondary' 
            variant='contained'>
            paid
          </Button>
        );
      case 'paid':
        return (
          <Button 
            onClick={() => this.handleClick(id, 'free', order)}
            color='secondary'
            variant='contained'>
            free
          </Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;
    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
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
                {tables.map(row => (
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
                      {this.renderActions(row.id, row.status, row.order)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Container> 
      );
    }
  }
}

export default Waiter;

