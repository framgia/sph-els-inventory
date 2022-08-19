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
            <form className="form-add-user">
              <h1 className="page-title">Add User</h1>
              <div className="field">
                <label>Name</label>
                <input
                  required
                  type="text"
                  placeholder="Enter Names"
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
