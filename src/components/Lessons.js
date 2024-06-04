// import React from 'react';
// import styles from './Lessons.module.css';

// function Lessons() {
//   return (
//     <div className={styles.lessonsContainer}>
//       <h4>Lessons</h4>
//       <div className={styles.lesson}>
//         <div className={styles.lessonHeader}>
//           <span>Common English</span>
//           </div>
//           <div>
//           <span>Thu 13 PM - 15 PM</span>
//         </div>
//         <div className={styles.lessonParticipants}>
//           {/* Render participant images here */}
//         </div>
//       </div>
//       <div className={styles.lesson}>
//         <div className={styles.lessonHeader}>
//           <span>Speaking club</span>
//        <br/>
//        </div>
//        <div>
//           <span>Thu 16 PM - 17 PM</span>
//         </div>
//         <div className={styles.lessonParticipants}>
//           {/* Render participant images here */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Lessons;

import React, { useContext } from 'react';
import styles from './Lessons.module.css';
import { LessonsContext } from './LessonsContext';

function Lessons() {
  const { lessons } = useContext(LessonsContext);

  return (
    <div className={styles.lessonsContainer}>
      <div className={styles.header}>
        <h4>Lessons</h4>
        <a href="#" className={styles.viewAll}>View all</a>
      </div>
      {lessons.map((lesson) => (
        <div className={styles.lesson} key={lesson.id}>
          <div className={styles.lessonHeader}>
            <div className={styles.lessonTitle}>
              <span className={`${styles.label} ${styles[lesson.label]}`}></span>
              <span>{lesson.title}</span>
            </div>
            <span className={styles.lessonTime}>{lesson.time}</span>
          </div>
          <div className={styles.lessonParticipants}>
            {lesson.participants.map((participant, index) => (
              <img key={index} src={participant.image} alt={participant.name} className={styles.participantImage} />
            ))}
          </div>
          <div className={styles.lessonActions}>
            <button className={styles.lessonButton}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Lessons;
