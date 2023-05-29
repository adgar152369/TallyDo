import React, { useState } from 'react';
import styles from './Task.module.css'

function Task ({ task, onDelete, onModify }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task);

  const handleDoubleClick = () => {
    onDelete();
  };

  const handleMouseDown = () => {
    let timer = setTimeout(() => {
      setIsEditing(true);
    }, 500); // Adjust the duration as needed

    const handleMouseUp = () => {
      clearTimeout(timer);
    };

    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onModify(editedText);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={editedText} 
          onChange={handleChange} 
          autoFocus />
      </form>
    );
  }

  return (
    <div 
      onDoubleClick={handleDoubleClick} 
      onMouseDown={handleMouseDown} 
      onTouchStart={handleMouseDown}>
      {task}
    </div>
  );
};

export default Task;
