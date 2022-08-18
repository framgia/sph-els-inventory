import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import "../index.css";
import { useNavigate } from "react-router-dom";
import DeleteConfirmation from "../../../modals/delete-item";
import { handle } from "../../../handler";

function TodoItems() {
  const navigate = useNavigate()
  const [items,setItem] = useState([])
  const formField = new FormData();
  useEffect(()=>{
    handle("GET","http://localhost:8000/api/items/",formField,setItem)
  },[])
  const toEditItem = (id, name,room) => {
    navigate("/edit-item-page", { state: { id, name,room } });
  };
  return (
    <>
    {items.map((item,index)=>(
      <div className="items">
        <div className="todo-details">
          <div className="texts">
            <p className="todo-text"> {item.name}</p>
            <p className="time">{item.room}</p>
          </div>
        </div>
        <div className="todo-actions">
          <div className="status-free">Free</div>
          <div className="icon" onClick={()=>{
            toEditItem(item.id, item.name,item.room)
          }}>
            <MdEdit />
          </div>
          <div className="icon">
            <DeleteConfirmation 
              deleteItemId={item.id}
              deleteName={item.name}
              deleteRoom={item.room}
            />
          </div>
        </div>
      </div>
      
    ))}
      
    </>
  );
}

export default TodoItems;
