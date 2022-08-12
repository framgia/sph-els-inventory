import "../../global.css";
import React from "react";
import { Modal } from "semantic-ui-react";

function AddUserModal() {
  return (
    <Modal
      trigger={<button className="addButton">Add User</button>}
      header="Add User"
      content="Are you sure you want to add this user?"
      actions={["Cancel", { key: "yes", content: "Yes", positive: true }]}
    />
  );
}

export default AddUserModal;
