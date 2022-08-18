import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome-container">
      <h1>Home Inventory System</h1>
      <h3>A system where you can Store, Find and Manage things easily</h3>
      <div className="box-container">
        <div>
          <h2>Welcome Back!</h2>
          <div>
            <button
              className="btn-continue"
              onClick={() => navigate("/dashboard")}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
