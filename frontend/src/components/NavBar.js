import React from 'react';

const NavBar = () => {
  return (
    <div className="ui secondary pointing menu">
      <div className="item">Home Inventory System</div>
      <div className="right menu">
        <div to = "/dashboard" className="item">Dashboard</div>
        <div to = "/register"  className="item">Register a User</div>
        <div to = "/list"  className="item">List of Users</div>
      </div>
    </div>
  );
};

export default NavBar;
