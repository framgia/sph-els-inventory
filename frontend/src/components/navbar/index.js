import React from "react";

const NavBar = () => {
  return (
    <div className="ui secondary pointing menu">
      <div className="item">Home Inventory System</div>
      <div className="right menu">
        <div className="item">Dashboard</div>
        <div className="item">Register a User</div>
        <div className="item">List of Users</div>
      </div>
    </div>
  );
};

export default NavBar;
