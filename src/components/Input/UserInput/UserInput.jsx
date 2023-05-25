import React, { useState, useEffect } from "react";
import AddButton from "../AddButton/AddButton";
import CategorizeButton from "../CategorizeButton/CategorizeButton";
import './UserInput.css';

function UserInput({ onSetQuickList }) {

  const [itemInput, setItemInput] = useState('');

  function handleItemInputChange({ target }) {
    setItemInput(target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="user-input">
      <form className="flex flex-col mb-8" onSubmit={handleFormSubmit}>

        <input className="bg-input-grey text-center my-2.5 p-2 h-12 text-fs-16 rounded-br-5"
          onChange={handleItemInputChange}
          value={itemInput}
          type="text"
          placeholder="Bread" />

        <div className="input-controls flex flex-nowrap gap-2.5">
          <CategorizeButton />
          <AddButton addItem={onSetQuickList} inputValue={itemInput} onSetInput={setItemInput} />
        </div>

      </form>
    </div>
  )
}



export default UserInput;