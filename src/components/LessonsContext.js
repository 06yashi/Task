import React, { createContext, useState } from 'react';

export const LessonsContext = createContext();

export const LessonsProvider = ({ children }) => {
  const [lessons, setLessons] = useState([
    {
      id: 1,
      label: 'label1',
      title: 'Common English',
      time: 'Thu 13 PM - 15 PM',
      participants: [
        { name: 'Participant 1', image: 'https://tse3.mm.bing.net/th?id=OIP.A4YGXK46I6PcKuEafX9MiwHaKX&pid=Api&P=0&h=180'},
        { name: 'Participant 2', image: 'https://tse2.mm.bing.net/th?id=OIP.ZSrsAOSCvO5NZxSxXplG2AAAAA&pid=Api&P=0&h=180' },
        { name: 'Participant 3', image: 'https://tse4.mm.bing.net/th?id=OIP.XcrLeJQyO0375j0Q8WA0kQHaE8&pid=Api&P=0&h=180' },
      ],
    },
    {
      id: 2,
      label: 'label2',
      title: 'Speaking club',
      time: 'Thu 16 PM - 17 PM',
      participants: [
        { name: 'Participant 4', image: 'https://tse2.mm.bing.net/th?id=OIP.WtoC6pKL-E_742h70fPvdAHaE-&pid=Api&P=0&h=180' },
        { name: 'Participant 5', image: 'https://tse1.mm.bing.net/th?id=OIP.QgTPvWPHf74AbK7E2b_DjAHaJQ&pid=Api&P=0&h=180' },
        { name: 'Participant 6', image: 'https://tse3.mm.bing.net/th?id=OIP.iMfT3wmb1Z0Amil2Tr6i7wHaE8&pid=Api&P=0&h=180' },
      ],
    },
  ]);

  return (
    <LessonsContext.Provider value={{ lessons, setLessons }}>
      {children}
    </LessonsContext.Provider>
  );
};
