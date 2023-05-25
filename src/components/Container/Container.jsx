import React from "react";
import './Container.css';

function Container({ children }) {

  return (
    <div className="wrapper p-5">
      {children}
    </div>
  )
}



export default Container;