import React from "react";
import DeleteUserConfirmation from "../../../modals/delete-user";
import { MdEdit } from "react-icons/md";
import { ImUser } from "react-icons/im";
import "../../dashboard/index.css";
import { useNavigate } from "react-router-dom";

function DisplayUserList() {
  const navigate = useNavigate();
  const toEditUser = () => {
    navigate("/edit-user-page");
  };

  return (
    <>
      <div className="items">
        <div className="todoDetails">
          <div className="texts">
            <p className="todoText">
              <ImUser className="style-icon" />
              User 1
            </p>
          </div>
        </div>
        <div className="todoActions">
          <div
            className="icon"
            onClick={() => {
              toEditUser();
            }}
          >
            <MdEdit />
          </div>
          <div className="icon">
            <DeleteUserConfirmation />
          </div>
        </div>
      </div>
      <div className="items">
        <div className="todoDetails">
          <div className="texts">
            <p className="todoText">
              <ImUser className="style-icon" />
              User 2
            </p>
          </div>
        </div>
        <div className="todoActions">
          <div
            className="icon"
            onClick={() => {
              toEditUser();
            }}
          >
            <MdEdit />
          </div>
          <div className="icon">
            <DeleteUserConfirmation />
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayUserList;
