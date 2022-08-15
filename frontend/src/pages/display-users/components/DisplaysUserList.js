import React from "react";
import DeleteUserConfirmation from "../../../modals/delete-user";
import { MdDelete, MdEdit } from "react-icons/md";
import { ImUser } from "react-icons/im";
import "../../dashboard/index.css";

function DisplayUserList() {
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
          <div className="icon">
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
          <div className="icon">
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
