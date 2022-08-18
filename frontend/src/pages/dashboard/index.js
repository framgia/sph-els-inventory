import React from "react";
import "./index.css";
import TodoItems from "./components/TodoItems";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="main-container">
        <h1 className="page-title">Inventory List</h1>
        <div className="add-item-container">
          <div className="app-header">
            <button
              className="button-primary"
              onClick={() => navigate("/add-item")}
            >
              Add Item
            </button>
          </div>
        </div>
        <div>
          <TodoItems />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
