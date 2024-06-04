import React from 'react';
import Dashboard from './components/Dashboard'; // Adjust the path if necessary
import styles from './App.module.css';  // Assuming you have some global styles in App.module.css

function App() {
  return (
    <div className={`container ${styles.app}`}>
      <Dashboard />
    </div>
  );
}

export default App;
