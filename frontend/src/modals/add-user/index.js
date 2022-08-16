import "../../global.css";
import React, { useState, useEffect } from "react";
import { Modal } from "semantic-ui-react";
import { handle } from "../.././handler";

const AddUserModal = (props) => {
  const [user, setUser] = useState(props);

  useEffect(() => {
    setUser(props.addUser);
  }, [props]);

  const handleSubmit = () => {
    let formField = new FormData();
    formField.append("name", user);
    handle("POST", "http://localhost:8000/api/users/", formField, setUser);
  };
  return (
    <Modal
      trigger={<button className="addButton">Add User</button>}
      header="Add User"
      content="Are you sure you want to add this user?"
      actions={[
        "Cancel",
        { key: "yes", content: "Yes", positive: true, onClick: handleSubmit },
      ]}
    />
  );
};

export default AddUserModal;
