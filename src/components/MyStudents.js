import React from 'react';
import styles from './MyStudents.module.css';

const MyStudents = () => {
  const students = [
    { name: "Amelia Collier", percentage: 95, picUrl: "https://tse4.mm.bing.net/th?id=OIP.ncEr8zfFJ4YxAUWUtf0SFAHaHa&pid=Api&P=0&h=180", color: "#FFA500" },
    { name: "Estelle Baldwin", percentage: 84, picUrl: "https://tse2.mm.bing.net/th?id=OIP.wfIvo01Pfra7b5ZT11CRbAAAAA&pid=Api&P=0&h=180", color: "#1E90FF" },
    { name: "Micheal Watts", percentage: 96, picUrl: "https://tse1.mm.bing.net/th?id=OIP.yDo8m_LI_z0_yQ3I0uGTBwHaJk&pid=Api&P=0&h=180", color: "#FFA500" },
    { name: "Amanda Wood", percentage: 72, picUrl: "https://tse2.mm.bing.net/th?id=OIP.PUiS1g7gFU3RTbsHj3H7xgHaHa&pid=Api&P=0&h=180", color: "#FF4500" },
  ];

  return (
    <div className={styles.myStudents}>
      <div className={styles.header}>
        <h3>My Students</h3>
        <a href="#" className={styles.viewAll}>View all</a>
      </div>
      <div className={styles.studentList}>
        {students.map((student, index) => (
          <div className={styles.student} key={index}>
            <img src={student.picUrl} alt={student.name} className={styles.studentPic} />
            <p>{student.name}</p>
            <div className={styles.progress}>
              <div
                className={styles.progressBar}
                style={{ width: `${student.percentage}%`, backgroundColor: student.color }}
              ></div>
            </div>
            <span className={styles.percentage}>{student.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyStudents;

