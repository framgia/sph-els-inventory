import "../../global.css";
import "./index.css";
import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import EditUserModal from "../../modals/edit-user";
import { useLocation } from "react-router-dom";

const EditUserPage = () => {
  const location = useLocation();
  const [name, setName] = useState("");

  return (
    <div>
      <NavBar />
      <div>
        <div className="edit-user-container">
          <div>
            <form className="form-edit-user">
              <h1 className="page-title">Edit User</h1>
              <div className="field">
                <label className="label-name">
                  Edit name for {location.state.name}
                </label>
                <input
                  type="text"
                  placeholder="Enter New Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </form>
            <br />
            <div>
              <EditUserModal
                editUserName={name}
                editUserId={location.state.id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserPage;
