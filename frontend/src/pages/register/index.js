import "../../global.css";
import "./index.css";
import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import AddUserModal from "../../modals/add-user";

const RegisterPage = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <NavBar />
      <div>
        <div className="add-user-container">
          <div>
            <h2>Add User</h2>
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
