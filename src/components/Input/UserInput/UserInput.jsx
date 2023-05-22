import React from "react";
import AddButton from "../AddButton/AddButton";
import './UserInput.css';

function UserInput() {

  function handleOnSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="user-input">
      <form className="flex flex-col" onSubmit={handleOnSubmit}>
        <input className="bg-input-grey my-2.5 p-2 rounded-md" type="text" placeholder="Bread"/>

        <AddButton />
      </form>
    </div>
  )
}



export default UserInput;