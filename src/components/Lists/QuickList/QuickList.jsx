import React, { useState, useEffect } from "react";
import "./QuickList.css";
import EditInput from "../../Input/EditInput/EditInput";

function QuickList(props) {

  const [editing, setEditing] = useState(false);
  
  let viewMode = {};
  let editMode = {};
  let holdTimeout;
  let holdDuration = 600; // duration in ms

  if (editing) {
    viewMode.display = 'block';
    viewMode.fontSize = '12px';
    viewMode.position = 'absolute';
    viewMode.top = '8px';
    viewMode.left = '10px';
    viewMode.width = 'auto';
    viewMode.zIndex = '20';
    viewMode.color = 'lightgrey';

  } else {
    editMode.display = 'none';
  }

  function deleteItem(index) {
    props.onDeleteItem(index);
  }

  function handleHoldEdit() {
    clearTimeout(holdTimeout); // clear any existing timeout
    
    holdTimeout = setTimeout(() => { // start new timeout
      setEditing(true);
    }, holdDuration);
  }

  function handleHoldEnd() {
    clearTimeout(holdTimeout);
  }


  return (
    <div className="quick-list list custom-lg:flex-auto">
      <h1 className="quick-list-header list-header font-semibold text-fs-24 text-header-black mb-3.5">Quick List</h1>

      <div className="quick-list-items list-items">
        <ul className="quick-list-list list-list flex flex-wrap gap-2.5">

          {
            props.list ?
              props.list.map((item, index) => (

                <li 
                  className="list-item group px-1 py-2 custom-lg:p-2" 
                  key={index}>

                  <span 
                    className="dbl-click-delete h-full w-full"
                    style={viewMode}
                    onDoubleClick={() => deleteItem(index)}
                    onMouseDown={handleHoldEdit}
                    onTouchStart={handleHoldEdit} 
                    onMouseUp={handleHoldEnd}
                    onTouchEnd={handleHoldEnd}>
                    
                    {props.editedItemIndex === index ? props.userEditedItem : item}
                  </span>

                  <EditInput 
                    onHandleEditedItem={props.onHandleEditedItem}
                    key={index}
                    itemIndex={index}
                    style={editMode}
                    defaultValue={item}
                  />

                  {/* <span className="delete-btn hidden hover:bg-brown custom-lg:group-hover:flex">
                    <i className="text-exit-white fa-solid fa-xmark"></i>
                  </span> */}

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