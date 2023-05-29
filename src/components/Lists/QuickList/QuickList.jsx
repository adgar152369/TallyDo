import React, { useState, useEffect } from 'react';
import Task from '../../Task/Task';
import AddNewTaskForm from '../../Input/AddNewTaskForm/AddNewTaskForm';
import styles from './QuickList.module.css';
import { writeUserData, getUsersTasks } from '../../../firebase';

function QuickList() {


  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const userTasks = await getUsersTasks();
      setTasks(userTasks || []);
    };

    fetchTasks();
  }, []);

  const handleAddTask = async (task) => {
    try {
      await writeUserData(task);
      setTasks([...tasks, task]);
      setNewTask('');
    } catch (error) {
      console.error('Error adding new task: ', error);
    }
  };

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
        onAddTask={handleAddTask}
        onSetNewTask={setNewTask}
        tasks={tasks}
      />

      <h1 className={styles.quickListHeader}>QuickList</h1>

      <ul className={styles.quickListList}>

        {tasks.map((task, index) => (

          <li className={styles.listItem} key={index}>
            <Task
              key={index}
              task={task.taskName}
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
