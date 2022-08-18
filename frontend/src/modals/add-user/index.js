import "../../global.css";
import React, { useState, useEffect } from "react";
import { Modal } from "semantic-ui-react";
import { handle } from "../.././handler";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUserModal = ({ addUser }) => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState(addUser);

  useEffect(() => {
    axios.get("http://localhost:8000/api/users/").then((response) => {
      const fetchedNames = response.data.map((res) => res.name);
      setUserList(fetchedNames);
    });

    setUser(addUser);
  }, [addUser]);

  const handleSubmit = () => {
    if (userList.includes(addUser.trim())) {
      alert(`${addUser} is already taken, Please enter any other name.`);
      return;
    }

    alert(`Successfully added ${addUser}`)
    let formField = new FormData();
    formField.append("name", user);
    handle("POST", "http://localhost:8000/api/users/", formField, setUser);
    
    navigate("/display-users")
  };
  return (
    <Modal
      trigger={<button className="add-button">Add</button>}
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
