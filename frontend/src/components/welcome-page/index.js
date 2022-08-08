import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const WelcomePage = () => {
  return (
    <div className="container">
      <h1>Home Inventory System</h1>
      <h3>A system where you can Store, Find and Manage things easily</h3>
      <div className="boxContainer">
        <div>
          <h2>Welcome Back!</h2>
          <div>
            <button className="btn-continue">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
