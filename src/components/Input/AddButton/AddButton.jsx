import React from "react";
import styles from "./AddButton.module.css";

function AddButton() {

  return (
    <button className={styles.addButton} type="submit">
      Add Your Thing
    </button>
  )
}



export default AddButton;