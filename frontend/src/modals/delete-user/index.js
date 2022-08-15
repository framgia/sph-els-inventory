import React from "react";
import "./index.css";
import { Modal } from "semantic-ui-react";
import { MdDelete } from "react-icons/md";

function DeleteUserConfirmation() {
  return (
    <Modal
      trigger={<MdDelete />}
      header="Delete User"
      content="Are you sure you want to delete this user?"
      actions={["Cancel", { key: "delete", content: "Delete", negative: true }]}
    />
  );
}

export default DeleteUserConfirmation;
