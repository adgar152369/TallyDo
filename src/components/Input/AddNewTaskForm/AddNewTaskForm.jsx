import React from "react";
import { v4 as uuidv4 } from 'uuid';
import AddButton from "../AddButton/AddButton";
import CategorizeButton from "../CategorizeButton/CategorizeButton";
import styles from './AddNewTaskForm.module.css';

function AddNewTaskForm({ newTask, onSetNewTask, onWriteToDB, onAddTask }) {

  function handleSubmit(e) {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = { taskName: newTask };
      onAddTask(task);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.addTaskForm}>
      <input 
        type="text" 
        value={newTask} 
        placeholder="Bread"
        onChange={(e) => onSetNewTask(e.target.value)} 
        className={styles.addTaskInput}/>

      <div className={styles.addNewTaskControls}>
        <AddButton />
        <CategorizeButton />
      </div>
    </form>
  )
}



export default AddNewTaskForm;