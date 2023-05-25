import React from "react";
import "./QuickList.css";

function QuickList({ list }) {

  return (
    <div className="quick-list list">
      <h1 className="quick-list-header list-header font-semibold text-fs-24 text-header-black mb-3.5">Quick List</h1>

      <div className="quick-list-items list-items">
        <ul className="quick-list-list list-list flex flex-wrap gap-2.5">

          {
            list ?
              list.map(item => (
                <li className="list-item flex-auto shadow-item-shadow max-h-10 rounded-br-5 py-2 px-2 text-center">
                  {item}
                </li>
              ))
              : <p>Do you need something??</p>
          }

        </ul>
      </div>
    </div>
  )
}

export default QuickList;