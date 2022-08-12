import React from "react";
import "./index.css";
import TodoItems from "./components/TodoItems";
import NavBar from "../../components/NavBar/index";

const DashboardPage = () => {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <h1 className="page-title">Inventory List</h1>
        <div className="addItem-container">
          <div className="app-header">
            <button className="button-primary">Add Item</button>
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
