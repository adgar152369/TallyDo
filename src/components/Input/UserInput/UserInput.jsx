import React from "react";
import AddButton from "../AddButton/AddButton";
import CategorizeButton from "../CategorizeButton/CategorizeButton";
import './UserInput.css';

function UserInput(props) {

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="user-input">
      <form className="flex flex-col mb-8" onSubmit={handleFormSubmit}>

        <input className="bg-input-grey text-center my-2.5 p-2 h-12 text-fs-16 rounded-br-5"
          onChange={props.onHandleItemInputChange}
          value={props.itemInput}
          type="text"
          placeholder="Bread" />

        <div className="input-controls flex flex-nowrap gap-2.5">
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