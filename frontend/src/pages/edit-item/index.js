import React, { useState } from "react";

import NavBar from "../../components/navbar";
import "./index.css";
import EditItemModal from "../../modals/edit-item";
import { useLocation } from "react-router-dom";


const EditItemPage = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const location = useLocation();


  return (
    <div>
      <NavBar />
      <div className="holder">
        <div>
          <h2>Edit Item Name</h2>
          <form className="ui form">
            <div className="field">
              <label>New Item  Name for {location.state.name}</label>
              <input
                type="text"
                placeholder="Enter New Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
               <input
                type="text"
                placeholder="Enter Room"
                name="room"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              />
            </div>
          </form>
          <br />
          <div>
            <EditItemModal editItem={name} editItemId={location.state.id}  editRoom={room} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditItemPage;
