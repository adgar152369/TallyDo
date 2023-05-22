import React from "react";
import './Container.css';

function Container({ children }) {

  return (
    <div className="wrapper bg-tan-bg p-5 border-2 border-black rounded-md">
      {children}
    </div>
  )
}



export default Container;