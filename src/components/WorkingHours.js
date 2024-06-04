

import React from 'react';
import styles from './WorkingHours.module.css';

const WorkingHours = () => {
  return (
    <div className={styles.workingHours}>
      <div className={styles.header}>
        <h3>Working hours</h3>
        <div className={styles.dropdown}>Today</div>
      </div>
      <div className={styles.progressCircle}>
        <div className={styles.circle}>
          <div className={styles.innerCircle}>
            <span>84%</span>
          </div>
        </div>
        <div className={styles.labels}>
          <span className={styles.labelProgress}>Progress</span>
          <span className={styles.labelDone}>Done</span>
        </div>
      </div>
    </div>
  );
};

export default WorkingHours;
