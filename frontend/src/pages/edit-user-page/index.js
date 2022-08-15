import "../../global.css";
import "./index.css";
import React from "react";
import NavBar from "../../components/NavBar";
import EditUserModal from "../../modals/edit-user";

const EditUserPage = () => {
  return (
    <div>
      <NavBar />
      <div className="holder">
        <div>
          <h2>Edit User Name</h2>
          <form className="ui form">
            <div className="field">
              <label>New User Name</label>
              <input type="text" />
            </div>
          </form>
          <br />
          <div>
            <EditUserModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserPage;
