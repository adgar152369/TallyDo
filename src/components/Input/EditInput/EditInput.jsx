import React, { useState} from "react";

function EditInput(props) {

  return (
    <form onSubmit={props.onHandleOnChange}>
      <input
      className="edit-item-input" 
      type="text"
      style={props.style}
      defaultValue={props.defaultValue}
      onChange={props.onHandleOnChange}
      />
    </form>
  )
}


export default EditInput;