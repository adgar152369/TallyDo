import React from "react";
import AddButton from "../AddButton/AddButton";
import CategorizeButton from "../CategorizeButton/CategorizeButton";
import styles from './AddNewTaskForm.module.css';

function AddNewTaskForm({ newTask, onSetNewTask, onSetTasks, tasks }) {

  function handleAddTask(e) {
    e.preventDefault();
    if (newTask.trim() !== '') {
      onSetTasks([...tasks, newTask]);
      onSetNewTask('');
    }
  }

  return (
    <form onSubmit={handleAddTask} className={styles.addTaskForm}>
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