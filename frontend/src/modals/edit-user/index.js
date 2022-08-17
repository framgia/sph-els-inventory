import "../../global.css";
import React, { useState, useEffect } from "react";
import { Modal } from "semantic-ui-react";
import { handle } from "../.././handler";

const EditUserModal = ({ editUserName, editUserID }) => {
  const [name, setName] = useState(editUserName);
  const [id, setID] = useState(editUserID);

  useEffect(() => {
    setName(editUserName);
    setID(editUserID);
  }, [editUserName, editUserID]);

  const handleSubmit = (e, id) => {
    let formField = new FormData();
    formField.append("name", name);
    handle(
      "PUT",
      `http://localhost:8000/api/users/${id}/`,
      formField,
      setName
    );
  };

  return (
    <Modal
      trigger={<button className="addButton">Submit</button>}
      header="Edit User"
      content="Confirm Changes?"
      actions={[
        "Cancel",
        {
          key: "yes",
          content: "Yes",
          positive: true,
          onClick: (event) => handleSubmit(event, editUserID),
        },
      ]}
    />
  );
};

export default EditUserModal;
