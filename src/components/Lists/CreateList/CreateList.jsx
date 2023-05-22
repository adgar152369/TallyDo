import React from "react";
import './CreateList.css';

function CreateList() {

  function onHandleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="list-creation">
      <form action="" onSubmit={onHandleSubmit}>
        <input className="bg-input-grey my-2.5 p-2 rounded-md" type="text" placeholder="New List"/>
        <button className="text-4xl font-bold align-sub">+</button>
      </form>
    </div>
  )
}

export default CreateList;