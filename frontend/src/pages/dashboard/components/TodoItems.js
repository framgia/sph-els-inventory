import React from "react";
import { MdEdit } from "react-icons/md";
import "../index.css";
import DeleteConfirmation from "../../../modals/delete-item";

function TodoItems() {
  return (
    <>
      <div className="items">
        <div className="todoDetails">
          <div className="texts">
            <p className="todoText">Item Name</p>
            <p className="time">*Item Description*</p>
          </div>
        </div>
        <div className="todoActions">
          <div className="status-free">Free</div>
          <div className="icon">
            <MdEdit />
          </div>
          <div className="icon">
            <DeleteConfirmation />
          </div>
        </div>
      </div>
      <div className="items">
        <div className="todoDetails">
          <div className="texts">
            <p className="todoText">Item Name</p>
            <p className="time">*Item Description*</p>
          </div>
        </div>
        <div className="todoActions">
          <div className="status-reserved">Reserved</div>
          <div className="icon">
            <MdEdit />
          </div>
          <div className="icon">
            <DeleteConfirmation />
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItems;
