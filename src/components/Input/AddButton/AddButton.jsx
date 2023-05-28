import React from "react";
import styles from "./AddButton.module.css";

function AddButton(props) {

  function handleOnSubmit() {
    if (props.inputValue === '') return;
    else {
      props.addItem(props.inputValue);
      props.onSetInput('');
    }
  }

  return (
    <button
      className={styles.addButton}
      type="submit"
      onClick={handleOnSubmit}>
      Add Your Thing
    </button>
  )
}



export default AddButton;