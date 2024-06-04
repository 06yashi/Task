import React, { createContext, useState } from 'react';

export const MediaContext = createContext();

export const MediaProvider = ({ children }) => {
  const [mediaItems, setMediaItems] = useState([
    { id: 1, label: 'A1', title: 'Common English', file: 'Cambridge advanced.pdf', access: 'Only view', members: 48, size: '42 MB' },
    { id: 2, label: 'B1', title: 'Speaking club', file: 'Speaking skill.docs', access: 'Edit available', members: 62, size: '24 MB' },
    { id: 3, label: 'C1', title: 'Business English', file: 'English Dictionary.wav', access: 'Only view', members: 53, size: '34 MB' },
    { id: 4, label: 'A2', title: 'Spanish Grammar', file: 'Easy Learning Book.zip', access: 'Only view', members: 42, size: '23 MB' }
  ]);

  return (
    <MediaContext.Provider value={{ mediaItems }}>
      {children}
    </MediaContext.Provider>
  );
};
