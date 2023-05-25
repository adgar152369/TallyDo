import React from "react";
import AddButton from "../AddButton/AddButton";
import './UserInput.css';

function UserInput() {

  function handleOnSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="user-input">
      <form className="flex flex-col mb-8" onSubmit={handleOnSubmit}>
        <input className="bg-input-grey my-2.5 p-2 h-12 text-fs-16 rounded-br-5" 
          type="text" placeholder="Bread"/>

        <AddButton />
      </form>
    </div>
  )
}



export default UserInput;