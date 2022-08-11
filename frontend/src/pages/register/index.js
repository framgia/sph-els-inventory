import "../../global.css";
import "./index.css";
import React from "react";
import NavBar from "../../components/navbar/index";

const RegisterPage = () => {
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
                <input type="text" />
              </div>
            </form>
            <br />
            <div>
              <button className="addButton">Add User</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
