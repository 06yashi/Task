import React, { useContext } from 'react';
import styles from './MediaForLessons.module.css';
import { MediaContext } from './MediaContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const MediaForLessons = () => {
  const { mediaItems } = useContext(MediaContext);

  return (
    <div className={styles.mediaForLessons}>
      <div className={styles.header}>
        <h3>Media for lessons</h3>
        <a href="#" className={styles.viewAll}>View all</a>
      </div>
      <div className={styles.mediaList}>
        {mediaItems.map((item) => (
          <div className={styles.mediaItem} key={item.id}>
            <div className={styles.itemLabel}><span className={`${styles.label} ${styles[item.label]}`}>{item.label}</span></div>
            <div className={styles.itemInfo}>
              <p className={styles.title}>{item.title}</p>
              <span className={styles.file}>{item.file}</span>
            </div>
            <div className={styles.itemAccess}><span className={item.access === 'Edit available' ? styles.edit : ''}>{item.access}</span></div>
            <div className={styles.itemMembers}>{item.members} members</div>
            <div className={styles.itemSize}>{item.size}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaForLessons;
