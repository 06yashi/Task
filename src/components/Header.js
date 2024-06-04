import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.welcomeContainer}>
        <div className={styles.greeting}>
          <h2>Welcome back, <span className={styles.highlight}>John!</span></h2>
    
          <p>Your students completed <span className={styles.highlight}>80%</span> of the tasks. <br></br>
          Progress is <span className={styles.highlight}>very good!</span></p>
        </div>
        <div className={styles.imageContainer}>
          <img src="https://blog.darwinbox.com/hubfs/culture-blog.png" alt="Students with books" className={styles.headerImage} />
        </div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.userDetails}>
          <img src="https://tse4.mm.bing.net/th?id=OIP.XcrLeJQyO0375j0Q8WA0kQHaE8&pid=Api&P=0&h=180" alt="User" className={styles.userImage} />
          <div>
            <p className={styles.userName}>John Mason</p>
            <p className={styles.userEmail}>edrabenson@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
