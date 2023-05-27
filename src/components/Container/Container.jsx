import React from "react";
import './Container.css';

function Container({ children }) {

  return (
    <div className="wrapper p-5 m-auto custom-lg:max-w-5xl">
      {children}
    </div>
  )
}



export default Container;