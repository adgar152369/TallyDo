import React from "react";
import AddButton from "../AddButton/AddButton";
import CategorizeButton from "../CategorizeButton/CategorizeButton";
import styles from './UserInput.module.css';

function UserInput(props) {

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="user-input">
      <form className={styles.userAddForm} onSubmit={handleFormSubmit}>

        <input className={styles.userAddInput}
          onChange={props.onHandleItemInputChange}
          value={props.itemInput}
          type="text"
          placeholder="Bread" />

        <div className={styles.userControls}>
          <CategorizeButton />
          <AddButton 
            addItem={props.onSetQuickList} 
            inputValue={props.userItemInput} 
            onSetInput={props.onSetItemInput} />
        </div>

      </form>
    </div>
  )
}



export default UserInput;