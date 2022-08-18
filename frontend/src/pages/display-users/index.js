import React from "react";
import "../dashboard/index.css";
import NavBar from "../../components/navbar";
import DisplayUserList from "./components/DisplaysUserList";

const DisplayUsersPage = () => {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <h1 className="page-title">List of Registered Users</h1>
        <div>
          <DisplayUserList />
        </div>
      </div>
    </>
  );
};

export default DisplayUsersPage;
