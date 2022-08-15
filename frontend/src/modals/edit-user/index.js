import "../../global.css";
import React from "react";
import { Modal } from "semantic-ui-react";

function EditUserModal() {
  return (
    <Modal
      trigger={<button className="addButton">Submit</button>}
      header="Edit User"
      content="Confirm Changes?"
      actions={["Cancel", { key: "yes", content: "Yes", positive: true }]}
    />
  );
}

export default EditUserModal;
