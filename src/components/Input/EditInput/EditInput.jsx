import React, { useState} from "react";
import styles from "./EditInput.module.css";

function EditInput(props) {

  const [editedInput, setEditedInput] = useState('');

  function handleEditedInput(e) {
    setEditedInput(e.target.value);
  }

  return (
    <form 
      className={styles.EditItemForm}
      onSubmit={(e) => props.onHandleEditedItem(e, props.itemIndex, editedInput)}>

      <input
      className={`${styles.EditItemInput} ${props.isEditing ? '' : props.editMode}`}
      type="text"
      defaultValue={props.defaultValue}
      onChange={handleEditedInput}
      />
      
    </form>
  )
}


export default EditInput;