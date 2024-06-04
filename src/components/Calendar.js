import React, { useContext } from 'react';
import styles from './Calendar.module.css';
import { CalendarContext } from './CalendarContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function Calendar() {
  const {
    selectedDate,
    setSelectedDate,
    currentMonth,
    setCurrentMonth,
    currentYear,
    setCurrentYear
  } = useContext(CalendarContext);

  const dates = [
    { day: 27, isToday: false, isSelected: false, isEvent: false },
    { day: 28, isToday: false, isSelected: false, isEvent: false },
    { day: 29, isToday: false, isSelected: false, isEvent: false },
    { day: 30, isToday: false, isSelected: false, isEvent: false },
    { day: 1, isToday: false, isSelected: false, isEvent: false },
    { day: 2, isToday: false, isSelected: false, isEvent: false },
    { day: 3, isToday: false, isSelected: false, isEvent: false },
    { day: 4, isToday: false, isSelected: false, isEvent: false },
    { day: 5, isToday: false, isSelected: false, isEvent: false },
    { day: 6, isToday: false, isSelected: true, isEvent: true },
    { day: 7, isToday: false, isSelected: false, isEvent: false },
    { day: 8, isToday: false, isSelected: false, isEvent: false },
    { day: 9, isToday: false, isSelected: true, isEvent: true },
    { day: 10, isToday: false, isSelected: false, isEvent: false },
    { day: 11, isToday: false, isSelected: false, isEvent: false },
    { day: 12, isToday: false, isSelected: false, isEvent: false },
    { day: 13, isToday: false, isSelected: false, isEvent: false },
    { day: 14, isToday: false, isSelected: false, isEvent: false },
    { day: 15, isToday: false, isSelected: false, isEvent: false },
    { day: 16, isToday: false, isSelected: false, isEvent: false },
    { day: 17, isToday: false, isSelected: false, isEvent: false },
    { day: 18, isToday: false, isSelected: false, isEvent: false },
    { day: 19, isToday: false, isSelected: false, isEvent: false },
    { day: 20, isToday: false, isSelected: false, isEvent: false },
    { day: 21, isToday: false, isSelected: false, isEvent: false },
    { day: 22, isToday: false, isSelected: false, isEvent: false },
    { day: 23, isToday: false, isSelected: false, isEvent: false },
    { day: 24, isToday: false, isSelected: false, isEvent: false },
    { day: 25, isToday: false, isSelected: false, isEvent: false },
    { day: 26, isToday: false, isSelected: false, isEvent: false },
    { day: 27, isToday: false, isSelected: false, isEvent: false },
    { day: 28, isToday: false, isSelected: false, isEvent: false },
    { day: 29, isToday: false, isSelected: false, isEvent: false },
    { day: 30, isToday: false, isSelected: false, isEvent: false },
    { day: 31, isToday: false, isSelected: false, isEvent: false },
  ];

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.header}>
        <h4>{`${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} ${currentYear}`}</h4>
        <div className={styles.controls}>
          <button className={styles.controlButton} onClick={handlePrevMonth}>&lt;</button>
          <button className={styles.controlButton} onClick={handleNextMonth}>&gt;</button>
        </div>
      </div>
      <div className={styles.days}>
        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
      </div>
      <div className={styles.dates}>
        {dates.map((date, index) => (
          <div
            key={index}
            className={`${styles.date} ${date.day === selectedDate ? styles.selected : ''}`}
            onClick={() => handleDateClick(date.day)}
          >
            {date.day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
