import "../../global.css";
import "./index.css";
import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import AddUserModal from "../../modals/add-user";
import FormInput from "../../components/InputText";

const RegisterPage = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <NavBar />
      <div>
        <div className="newContainer">
          <div>
            <h2>Add User</h2>
            <form className="ui form">
              <div className="field">
                <FormInput styleName="width-lg" placeholder="Input name" />
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
