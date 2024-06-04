import React from 'react';
import styles from './Welcome.module.css';

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <h2>Welcome back, John!</h2>
      <p>Your students completed <strong>80%</strong> of the tasks. Progress is <span>very good!</span></p>
    </div>
  );
};

export default Welcome;
