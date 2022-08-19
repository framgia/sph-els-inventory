import "../../global.css";
import React, { useState, useEffect } from "react";
import { Modal } from "semantic-ui-react";
import { handle } from "../.././handler";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditUserModal = ({ editUserName, editUserId }) => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const [name, setName] = useState(editUserName);
  const [userId, setUserId] = useState(editUserId);

  useEffect(() => {
    axios.get("http://localhost:8000/api/users/").then((response) => {
      const fetchedNames = response.data.map((res) => res.name);
      setUserList(fetchedNames);
    });

    setName(editUserName);
    setUserId(editUserId);
  }, [editUserName, editUserId]);

  const handleSubmit = (e, userId) => {
    if (userList.includes(editUserName.trim())) {
      alert(`${editUserName} is already taken, Please enter any other name.`);
      return;
    }
    if (!editUserName.trim()) {
      alert(`Please input all fields.`);
      return;
    }

    alert(`Successfully edited to ${editUserName}`);
    let formField = new FormData();
    formField.append("name", name);
    handle(
      "PUT",
      `http://localhost:8000/api/users/${userId}/`,
      formField,
      setName
    );

    window.location = "/display-users";
  };

  return (
    <Modal
      trigger={<button className="add-button">Submit</button>}
      header="Edit User"
      content="Confirm Changes?"
      actions={[
        "Cancel",
        {
          key: "yes",
          content: "Yes",
          positive: true,
          onClick: (event) => handleSubmit(event, editUserId),
        },
      ]}
    />
  );
};

export default EditUserModal;
