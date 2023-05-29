import React from 'react';
import QuickList from './components/Lists/QuickList/QuickList';
import styles from './App.module.css';

function App() {

  return (
    <div className={styles.Wrapper}>
      <QuickList />
    </div>
  )
}

export default App;
