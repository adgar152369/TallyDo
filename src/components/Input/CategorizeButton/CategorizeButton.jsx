import React from "react";
import styles from "./CategorizeButton.module.css";

function CategorizeButton(props) {

  function handleOnSubmit() {
    // props.addItem(props.inputValue);
    // props.onSetInput('');
    console.log('categorize?')
  }

  return (
    <button
      className={styles.categorizeButton}
      type="button"
      onClick={handleOnSubmit}>
      Categorize
    </button>
  )
}



export default CategorizeButton;