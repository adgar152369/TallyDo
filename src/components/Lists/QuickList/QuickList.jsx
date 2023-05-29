import React, { useState } from 'react';
import Task from '../../Task/Task';
import AddNewTaskForm from '../../Input/AddNewTaskForm/AddNewTaskForm';
import styles from './QuickList.module.css';

function QuickList() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleModifyTask = (index, modifiedTask) => {
    setTasks(tasks.map((task, i) => (i === index ? modifiedTask : task)));
  };

  return (
    <>
      <AddNewTaskForm
        newTask={newTask}
        onSetNewTask={setNewTask}
        onSetTasks={setTasks}
        tasks={tasks}
      />

      <h1 className={styles.quickListHeader}>QuickList</h1>

      <ul className={styles.quickListList}>

        {tasks.map((task, index) => (
          <li className={styles.listItem} key={index}>
            <Task
              key={index}
              task={task}
              onDelete={() => handleDeleteTask(index)}
              onModify={(modifiedTask) => handleModifyTask(index, modifiedTask)}
            />
          </li>
        ))}

      </ul>
    </>
  );
};

export default QuickList;
