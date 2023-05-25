import React from "react";
import "./AddButton.css";

function AddButton(props) {

  function handleOnSubmit() {
    if (props.inputValue === '') return;
    else {
      props.addItem(props.inputValue);
      props.onSetInput('');
    }
  }

  return (
      <button id="add-item-btn" 
              className="bg-primary-red hover:bg-primary-red-700"
              type="submit"
              onClick={handleOnSubmit}> 
              Add Your Thing 
      </button>
  )
}



export default AddButton;