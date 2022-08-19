import React, { useState } from "react";

import NavBar from "../../components/NavBar";
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
          <form className="form-edit-item">
            <h1 className="edit-item-tittle">Edit Item</h1>
            <div className="field">
              <label>New item name for {location.state.name}</label>
              <input
                type="text"
                placeholder="Enter New Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>New room name for {location.state.name}</label>
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
            <EditItemModal
              editItem={name}
              editItemId={location.state.id}
              editRoom={room}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditItemPage;
