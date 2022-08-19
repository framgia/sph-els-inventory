import React, { useState, useEffect } from "react";
import "./index.css";
import { Modal } from "semantic-ui-react";
import { MdDelete } from "react-icons/md";
import { handle } from "../.././handler";

const DeleteUserConfirmation = ({ deleteUserID, deleteUserName }) => {
  const [userId, setUserId] = useState(deleteUserID);
  const [name, setName] = useState(deleteUserName);

  useEffect(() => {
    setUserId(deleteUserID);
    setName(deleteUserName);
  }, [deleteUserID, deleteUserName, userId]);

  const handleDelete = (event, userId) => {
    const formField = new FormData();
    formField.append("name", name);
    handle(
      "DELETE",
      `http://localhost:8000/api/users/${userId}/`,
      formField,
      setUserId
    );
    window.location.reload();
  };

  return (
    <Modal
      trigger={<MdDelete />}
      header="Delete User"
      content={"Are you sure you want to delete " + deleteUserName + " ?"}
      actions={[
        "Cancel",
        {
          key: "delete",
          content: "Delete",
          negative: true,
          onClick: (event) => handleDelete(event, deleteUserID),
        },
      ]}
    />
  );
};

export default DeleteUserConfirmation;
