import React from 'react';
import styles from './OrderEdit.module.scss';
import {useParams} from 'react-router-dom';

const OrderEdit = () => {
  let {id} = useParams();
  return (
    <div className={styles.component}>
      <h2>OrderEdit view</h2>
      <p>Order ID: {id}</p>
    </div>
  );
};

export default OrderEdit;