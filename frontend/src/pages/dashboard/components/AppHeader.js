import React from "react";
import "../index.css";

function AppHeader() {
  return (
    <div className="app-Header">
      <button className="button-primary">Add Item</button>
      <select id="status">
        <option value="all">All</option>
        <option value="incomplete">Reserved</option>
        <option value="complete">Free</option>
      </select>
    </div>
  );
}

export default AppHeader;
