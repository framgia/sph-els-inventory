import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import { Modal } from "semantic-ui-react";
import "./index.css";
import { useLocation } from "react-router-dom";
import { handle } from "../.././handler";
import InputDate from "../../components/inputdate";
import axios from "axios";

const ReservationPage = () => {
  const location = useLocation();
  const [optionList, setOptionList] = useState([]);
  const [userName, setUserName] = useState();
  const [fromDateInput, setFromDateInput] = useState("");
  const [toDateInput, setToDateInput] = useState("");

  useEffect(() => {
    let formField = new FormData();
    formField.append("user", userName);
    handle("GET", "http://localhost:8000/api/users/", formField, setOptionList);
 
  }, [userName, toDateInput, fromDateInput]);

  const addReservation = async () => {
    let formField = new FormData();
    formField.append("user_id", userName);
    formField.append("item_id", location.state.itemId);
    formField.append("reserved_date_from", fromDateInput);
    formField.append("reserved_date_to", toDateInput);

    axios({
      method: "post",
      url: "http://localhost:8000/api/reservations/",
      data: formField,
    })
      .then((response) => alert("Successfully Added Reservation", response))
      .catch((response) => alert("Failed to Add Reservation", response));
    window.location = "/dashboard";
  };

  return (
    <>
      <NavBar />
      <div>
        <div className="add-user-container">
          <div>
            <h1>Reservation for Item</h1>
            <h2>{location.state.itemName}</h2>
            <form className="ui form">
              <div className="field">
                <label>Select a User</label>
                <select
                  disabled={false}
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                >
                  {optionList.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
                <label>Date Range:</label>
                <div className="inline-form">
                  <InputDate
                    styleName="width-lg-input-from-date"
                    text="From:"
                    value={fromDateInput}
                    getDateData={(fromDateData) =>
                      setFromDateInput(fromDateData)
                    }
                  />
                  <InputDate
                    styleName="width-lg-input-to-date"
                    value={toDateInput}
                    getDateData={(toDateData) => setToDateInput(toDateData)}
                    text="To:"
                  />
                </div>
              </div>
            </form>
            <br />
          </div>

          <div>
            <Modal
              trigger={<button className="add-button">Reserve</button>}
              header="Add Item"
              content="Are you sure you want to reserve this item?"
              actions={[
                "Cancel",
                {
                  key: "yes",
                  content: "Yes",
                  positive: true,
                  onClick: addReservation,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationPage;
