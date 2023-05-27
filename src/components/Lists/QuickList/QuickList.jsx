import React from "react";
import "./QuickList.css";

function QuickList(props) {

  function deleteItem(index) {
    props.onDeleteItem(index);
  }

  return (
    <div className="quick-list list custom-lg:flex-auto">
      <h1 className="quick-list-header list-header font-semibold text-fs-24 text-header-black mb-3.5">Quick List</h1>

      <div className="quick-list-items list-items">
        <ul className="quick-list-list list-list flex flex-wrap gap-2.5">

          {
            props.list ?
              props.list.map((item, index) => (

                <li className="list-item group px-1 py-2 custom-lg:p-2" key={index}>

                  <span className="dbl-click-delete inline-block h-full w-full"
                    onDoubleClick={() => deleteItem(index)}>
                    {item}
                  </span>

                  {/* <span className="delete-btn hidden hover:bg-brown custom-lg:group-hover:flex">
                    <i className="text-exit-white fa-solid fa-xmark"></i>
                  </span> */}

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