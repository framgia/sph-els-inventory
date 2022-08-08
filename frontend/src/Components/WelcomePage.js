import React from "react";
import ReactDOM from "react-dom/client";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="container">
      <h1>Home Inventory System</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </p>
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
