import "../../global.css";
import "./index.css";
import React, { useState } from "react";
import NavBar from "../../components/navbar";
import AddUserModal from "../../modals/add-user";

const RegisterPage = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="boxContainer">
          <div>
            <h2>Add a new user</h2>
            <form className="ui form">
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
            </form>
            <br />
            <div>
              <AddUserModal addUser={name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
