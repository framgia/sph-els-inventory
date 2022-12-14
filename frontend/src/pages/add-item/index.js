import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import { Modal } from "semantic-ui-react";
import "./index.css";
import axios from "axios";

const AddItemPage = () => {
  const [name, setItem] = useState("");
  const [room, setRoom] = useState("");

  const addItem = async () => {
    let formField = new FormData();
    formField.append("name", name);
    formField.append("room", room);

    axios({
      method: "post",
      url: "http://localhost:8000/api/items/",
      data: formField,
    })
      .then((response) => alert("The item was added successfully.", response))
      .catch((response) =>
        alert(
          "The item was not added. All input fields are required.",
          response
        )
      );
    window.location = "/dashboard";
  };

  return (
    <>
      <NavBar />
      <div>
        <div className="add-user-container">
          <div>
            <form className="form-add-item">
              <h1 className="add-item-title">Add Item</h1>
              <div className="field">
                <label>Item Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={name}
                  onChange={(e) => setItem(e.target.value)}
                />
                <label>Where it is located</label>
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
          </div>

          <div>
            <Modal
              trigger={<button className="add-button">Add Item</button>}
              header="Add Item"
              content="Are you sure you want to add this Item?"
              actions={[
                "Cancel",
                {
                  key: "yes",
                  content: "Yes",
                  positive: true,
                  onClick: addItem,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItemPage;
