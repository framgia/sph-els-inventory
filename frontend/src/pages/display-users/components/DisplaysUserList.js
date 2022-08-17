import React, { useEffect, useState } from "react";
import DeleteUserConfirmation from "../../../modals/delete-user";
import { MdEdit } from "react-icons/md";
import { ImUser } from "react-icons/im";
import "../../dashboard/index.css";
import { useNavigate } from "react-router-dom";
import { handle } from "../../.././handler";

function DisplayUserList() {
  const navigate = useNavigate();
  const [users, getUsers] = useState([]);

  useEffect(() => {
    let formField = new FormData();
    handle("GET", "http://localhost:8000/api/users/", formField, getUsers);
  }, []);

  const toEditUser = () => {
    navigate("/edit-user-page");
  };

  return (
    <>
      {users.map((user, index) => (
        <div className="items" key={index}>
          <div className="todoDetails">
            <div className="texts">
              <p className="todoText">
                <ImUser className="style-icon" />
                {user.name}
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
              <DeleteUserConfirmation deleteUserID={user.id}/>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default DisplayUserList;
