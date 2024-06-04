import React, { createContext, useState } from 'react';

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      icon: 'icon1.png', // Add appropriate icon path
      title: 'English - Grammar Test',
      date: 'Eula Kelly, 6 May',
    },
    {
      id: 2,
      icon: 'icon2.png', // Add appropriate icon path
      title: 'Irregular Verbs Test',
      date: 'Olive Garza, 4 May',
    },
    {
      id: 3,
      icon: 'icon3.png', // Add appropriate icon path
      title: 'Spanish - Essay',
      date: 'Franklin Harvey, 2 May',
    },
  ]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
