import React, { useState, useEffect } from "react";
import AddButton from "../AddButton/AddButton";
import './UserInput.css';

function UserInput({ onSetQuickList }) {
  
  const [itemInput, setItemInput] = useState('');

  function handleOnSubmit(e) {
    e.preventDefault();
    onSetQuickList(itemInput);
    setItemInput('');
  }

  function handleItemInputChange({ target }) {
    setItemInput(target.value);
  }

  return (
    <div className="user-input">
      <form className="flex flex-col mb-8" onSubmit={handleOnSubmit}>

        <input className="bg-input-grey text-center my-2.5 p-2 h-12 text-fs-16 rounded-br-5"
          onChange={handleItemInputChange}
          value={itemInput}
          type="text"
          placeholder="Bread" />

        <AddButton />
      </form>
    </div>
  )
}



export default UserInput;