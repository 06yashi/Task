
import React, { useContext } from 'react';
import styles from './CompletedTasks.module.css';
import { TasksContext } from './TasksContext';

function CompletedTasks() {
  const { tasks } = useContext(TasksContext);

  return (
    <div className={styles.completedTasksContainer}>
      <div className={styles.header}>
        <h4>Completed Tasks</h4>
        <a href="https://tse3.mm.bing.net/th?id=OIP.MPRjwyiUtggrzht6CsgAngHaF7&pid=Api&P=0&h=180" className={styles.viewAll}>View all</a>
      </div>
      {tasks.map((task) => (
        <div className={styles.task} key={task.id}>
          <div className={styles.taskHeader}>
            <img src= 'https://vectorified.com/image/book-logo-vector-2.jpg'  alt="task icon" className={styles.taskIcon} />
            <div className={styles.taskDetails}>
              <span className={styles.taskTitle}>{task.title}</span>
              <span className={styles.taskDate}>{task.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CompletedTasks;
