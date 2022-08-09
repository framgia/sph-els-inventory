import "./index.css";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="container">
      <div className="boxContainer">
        <div>
          <h2>Add a new user</h2>
          <form className="ui form">
            <div className="field">
              <label>Name</label>
              <input type="text"/>
            </div>
          </form>
          <br/>
          <div>
            <button className="button">Add User</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
