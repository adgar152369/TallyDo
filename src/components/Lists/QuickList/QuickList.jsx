import React, { useState } from "react";
import styles from "./QuickList.module.css";
import EditInput from "../../Input/UserInput/EditInput/EditInput";

function QuickList(props) {

  // const [editing, setEditing] = useState(false);

  let holdTimeout;
  let holdDuration = 600; // duration in ms

  function deleteItem(index) {
    props.onDeleteItem(index);
  }

  function handleHoldEdit(e) {
    if (e.button === 0) {
      clearTimeout(holdTimeout); // clear any existing timeout

      holdTimeout = setTimeout(() => { // start new timeout
        props.onSetIsEditing(true);
      }, holdDuration);
    }
  }

  function handleHoldEnd() {
    clearTimeout(holdTimeout);
  }


  return (
    <div className={styles.quickList}>
      <h1 className={styles.quickListHeader}>Quick List</h1>

      <div className="quick-list-items list-items">
        <ul className={styles.quickListList}>

          {
            props.list ?
              props.list.map((item, index) => (

                <li
                  className={`${styles.listItem} ${props.isEditing && styles.editingListItem}`}
                  key={index}
                  onDoubleClick={() => deleteItem(index)}
                  onMouseDown={handleHoldEdit}
                  onTouchStart={handleHoldEdit}
                  onMouseUp={handleHoldEnd}
                  onTouchEnd={handleHoldEnd}>

                  <span className={`${styles.listItemSpan} ${props.isEditing && styles.viewMode}`}>
                    {props.editedItemIndex === index ? props.userEditedItem : item}
                  </span>

                  <EditInput
                    onHandleEditedItem={props.onHandleEditedItem}
                    key={index}
                    itemIndex={index}
                    editMode={styles.editMode}
                    isEditing={props.isEditing}
                    defaultValue={item}
                  />

                </li>

              ))
              : <p>Do you need something??</p>
          }

        </ul>
      </div>
    </div>
  )
}

export default QuickList;