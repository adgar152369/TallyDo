import React from "react";
import "./AddButton.css";

function AddButton() {

  return (
    <div className="input-controls flex flex-nowrap gap-2.5">
      <button className="bg-primary-blue hover:bg-primary-blue-700">Categorize</button>
      <button className="bg-primary-red hover:bg-primary-red-700">Add Your Thing</button>
    </div>
  )
}



export default AddButton;