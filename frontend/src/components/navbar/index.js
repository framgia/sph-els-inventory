import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="ui secondary pointing menu">
      <div
        className="item"
        onClick={() => {
          navigate("/");
        }}
      >
        Home Inventory System
      </div>
      <div className="right menu">
        <div
          className="item"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard
        </div>
        <div
          className="item"
          onClick={() => {
            navigate("/register");
          }}
        >
          Register a User
        </div>
        <div
          className="item"
          onClick={() => {
            navigate("/display-users");
          }}
        >
          List of Users
        </div>
      </div>
    </div>
  );
};

export default NavBar;
