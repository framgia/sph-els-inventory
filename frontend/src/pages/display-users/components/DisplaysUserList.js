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

  const toEditUser = (id, name) => {
    navigate("/edit-user-page", { state: { id, name } });
  };

  return (
    <>
      {users.map((user, index) => (
        <div className="items" key={index}>
          <div className="todo-details">
            <div className="texts">
              <p className="todo-text">
                <ImUser className="style-icon" />
                {user.name}
              </p>
            </div>
          </div>
          <div className="todo-actions">
            <div
              className="icon"
              onClick={() => {
                toEditUser(user.id, user.name);
              }}
            >
              <MdEdit />
            </div>
            <div className="icon">
              <DeleteUserConfirmation
                deleteUserID={user.id}
                deleteUserName={user.name}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default DisplayUserList;
