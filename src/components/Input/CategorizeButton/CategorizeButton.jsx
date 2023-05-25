import React from "react";
import "./CategorizeButton.css";

function CategorizeButton(props) {

  function handleOnSubmit() {
    // props.addItem(props.inputValue);
    // props.onSetInput('');
    console.log('categorize?')
  }

  return (
      <button id="categorize-btn"
              className="bg-primary-blue hover:bg-primary-blue-700"
              type="button"
              onClick={handleOnSubmit}>
              Categorize
      </button>
  )
}



export default CategorizeButton;