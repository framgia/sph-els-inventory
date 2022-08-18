import React from "react";
import { MdEdit } from "react-icons/md";
import "../index.css";
import DeleteConfirmation from "../../../modals/delete-item";
import { useNavigate } from "react-router-dom";

function TodoItems() {
  const navigate = useNavigate();
  return (
    <>
      <div className="items">
        <div className="todo-details">
          <div className="texts">
            <p className="todo-text">Item Name</p>
            <p className="time">*Item Description*</p>
          </div>
        </div>
        <div className="todo-actions">
          <div className="status-free">Free</div>
          <div className="icon">
            <MdEdit onClick={() => navigate("/edit-item")} />
          </div>
          <div className="icon">
            <DeleteConfirmation />
          </div>
        </div>
      </div>
      <div className="items">
        <div className="todo-details">
          <div className="texts">
            <p className="todo-text">Item Name</p>
            <p className="time">*Item Description*</p>
          </div>
        </div>
        <div className="todo-actions">
          <div className="status-reserved">Reserved</div>
          <div className="icon">
            <MdEdit onClick={() => navigate("/edit-item")} />
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
