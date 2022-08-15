import React, { useState } from "react";
import "./index.css";

const DropDown = ({ label, usersOptions, getReserveData }) => {
  const [selectedUser, setSelectedUser] = useState("");

  const renderUsers = usersOptions.map((usersOptions) => (
    <option key={usersOptions.id}>{usersOptions.user}</option>
  ));

  return (
    <div className="dropdown">
      <div>
        <label>{label}</label>
      </div>
      <select
        onChangeCapture={(e) => getReserveData(e.target.value)}
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
        id="users"
      >
        <option className="placeholder-option" disabled hidden value="">
          Select a user
        </option>
        {renderUsers}
      </select>
    </div>
  );
};

export default DropDown;
