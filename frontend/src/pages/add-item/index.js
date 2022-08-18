
import { createBrowserHistory } from "history";
import React, { useState } from "react";
import NavBar from "../../components/navbar";
import { Modal } from "semantic-ui-react";
import "./index.css";
import axios from "axios";



const AddItemPage = () => {
  const [name,setItem] = useState("")
  const [room,setRoom] = useState("")
  const history = createBrowserHistory()
 
  const addItem = async () =>{
    let formField = new FormData();
    formField.append("name",name)
    formField.append("room",room)

   axios({
    method: 'post',
    url:"http://localhost:8000/api/items/",
    data: formField}).then((response)=>console.log(response.data));
    }

  return (
    <>
 <NavBar/>
    <div>
      
       <div className="add-user-container">
          <div>
          <h1>Add Item</h1>
            <form className="ui form">
              <div className="field">
                <label>Item Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={name}
                  onChange = {(e)=>setItem(e.target.value)}
                  
                />
                <label>Where it is located</label>
                 <input
                  type="text"
                  placeholder="Enter Room"
                  name="room"
                  value={room}
                  onChange = {(e)=>setRoom(e.target.value)}
                  /> 
              </div>
              </form>
            <br />
            <div>
             <Modal
             trigger={<button className="add-button">Add Item</button>}
             header="Add Item"
             content="Are you sure you want to add this Item?"
             actions={[
               "Cancel",
               { key: "yes", content: "Yes", positive: true, onClick: addItem },
             ]}
             />
       </div>
          </div>
        </div>
    
    </div>
    </>
  );
};

export default AddItemPage;
