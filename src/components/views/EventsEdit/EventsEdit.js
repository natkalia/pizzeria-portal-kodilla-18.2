import React from 'react';
import styles from './EventsEdit.module.scss';
import {useParams} from 'react-router-dom';

const EventsEdit = () => {
  let {id} = useParams();
  return (
    <div className={styles.component}>
      <h2>EventsEdit view</h2>
      <p>Event ID: {id}</p>
    </div>
  );
};

export default EventsEdit;