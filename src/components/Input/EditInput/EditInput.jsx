import React, { useState} from "react";

function EditInput(props) {

  const [editedInput, setEditedInput] = useState('');

  function handleEditedInput(e) {
    setEditedInput(e.target.value);
  }

  return (
    <form onSubmit={(e) => props.onHandleEditedItem(e, props.itemIndex, editedInput)}>
      <input
      className="edit-item-input" 
      type="text"
      style={props.style}
      defaultValue={props.defaultValue}
      
      onChange={handleEditedInput}
      />
    </form>
  )
}


export default EditInput;