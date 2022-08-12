import React from "react";
import { Modal } from "semantic-ui-react";
import { MdDelete } from "react-icons/md";

function DeleteItemConfirmationModal() {
  return (
    <Modal
      trigger={<MdDelete />}
      header="Delete Item"
      content="Are you sure you want to delete this item?"
      actions={["Cancel", { key: "delete", content: "Delete", negative: true }]}
    />
  );
}

export default DeleteItemConfirmationModal;
