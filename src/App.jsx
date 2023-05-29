import React, { useState, useEffect } from 'react';
import Container from './components/Container/Container';
import UserInput from './components/Input/AddNewTaskForm/AddNewTaskForm';
import CreateList from './components/Lists/CreateList/CreateList';
import QuickList from './components/Lists/QuickList/QuickList';
import cuteCat from './assets/cute-cat.png';
import styles from './App.module.css';


function App() {

  return (
    <div className={styles.Wrapper}>
      <QuickList />
    </div>
  )
}

export default App;
