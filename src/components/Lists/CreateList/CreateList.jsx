import React from "react";
import './CreateList.css';

function CreateList() {

  function onHandleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="list-creation">
      <form action="" onSubmit={onHandleSubmit}>
        <div className="list-submit relative my-2.5">
          <input className="bg-input-grey rounded-md p-2" type="text" placeholder="New List" />
          <button className="text-2xl h-full w-8 font-bold align-sub absolute right-0 bg-black text-light rounded-r-md">+</button>
        </div>
      </form>
    </div>
  )
}

export default CreateList;