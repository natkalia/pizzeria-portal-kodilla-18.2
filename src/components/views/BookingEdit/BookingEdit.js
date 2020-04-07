import React from 'react';
import styles from './BookingEdit.module.scss';
import {useParams} from 'react-router-dom';

const BookingEdit = () => {
  let {id} = useParams();
  return (
    <div className={styles.component}>
      <h2>BookingEdit view</h2>
      <p>Booking ID: {id}</p>
    </div>
  );
};

export default BookingEdit;