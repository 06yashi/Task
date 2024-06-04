import React from 'react';
import Header from './Header';
import MyStudents from './MyStudents';
import WorkingHours from './WorkingHours';
import MediaForLessons from './MediaForLessons';
import Calendar from './Calendar';
import Lessons from './Lessons';
import CompletedTasks from './CompletedTasks';
import styles from './Dashboard.module.css';
import { CalendarProvider } from './CalendarContext';
import { MediaProvider } from './MediaContext';
import { LessonsProvider } from './LessonsContext';
import { TasksProvider } from './TasksContext';
import 'bootstrap/dist/css/bootstrap.min.css';// Adjust the path if necessary


const Dashboard = () => {
  return (
    <div  className={`container ${styles.app}`}>
      <Header />
      <div className="row">
        <div className="col-md-8 ">
          <MyStudents />
          <WorkingHours />
          <MediaProvider>
      <MediaForLessons />
    </MediaProvider>
          
        </div>
        <div className="col-md-4">
        <CalendarProvider>
      <Calendar />
    </CalendarProvider>
    <LessonsProvider>
            <Lessons />
          </LessonsProvider>
          <TasksProvider>
            <CompletedTasks />
          </TasksProvider>
        
        </div>
      </div>
      
    </div>
  );
};


export default Dashboard;


