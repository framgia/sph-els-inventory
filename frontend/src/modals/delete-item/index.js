import React, { useState, useEffect } from "react";
import "./index.css";
import { Modal } from "semantic-ui-react";
import { MdDelete } from "react-icons/md";
import { handle } from "../.././handler";

const DeleteItemConfirmation = ({ deleteItemId, deleteName,deleteRoom }) => {
  const [itemId, setItemId] = useState(deleteItemId);
  const [name, setName] = useState(deleteName);
  const [room,setRoom] = useState (deleteRoom)

  useEffect(() => {
    setItemId(deleteItemId);
    setName(deleteName);
    setRoom(deleteRoom)
  }, [deleteItemId, deleteName,deleteRoom]);

  const handleDelete = (event, ItemId) => {
    const formField = new FormData();
    formField.append("name", name);
    formField.append("room", room);
    handle(
      "DELETE",
      `http://localhost:8000/api/items/${ItemId}/`,
      formField,
      setItemId
    );
    window.location.reload();
  };

  return (
    <Modal
      trigger={<MdDelete />}
      header="Delete Item"
      content={"Are you sure you want to delete " + deleteName+ " ?"}
      actions={[
        "Cancel",
        {
          key: "delete",
          content: "Delete",
          negative: true,
          onClick: (event) => handleDelete(event, deleteItemId),
        },
      ]}
    />
  );
};

export default DeleteItemConfirmation;
