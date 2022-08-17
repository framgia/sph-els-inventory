import React, { useState } from "react";
import FormInput from "../../components/InputText";
import Button from "../../components/Button";
import InputDate from "../../components/InputDate";
import DropDown from "../../components/DropDownMenu";
import NavBar from "../../components/NavBar";
import "./index.css";

const usersOptions = [
  {
    id: 1,
    user: "user-1",
  },
  {
    id: 2,
    user: "user-2",
  },
];

const AddItemPage = () => {
  const [itemName, setItemName] = useState("");
  const [room, setRoom] = useState("");
  const [reserve, setReserve] = useState("");
  const [fromDateInput, setFromDateInput] = useState("");
  const [toDateInput, setToDateInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`
    Item Name: ${itemName}
    Room: ${room}
    Reserved User: ${reserve}
    From: ${fromDateInput}
    To: ${toDateInput}
    `);
  };

  return (
    <>
      <NavBar />
      <h1>Add Item</h1>
      <div className="addItemPage">
        <form onSubmit={handleSubmit}>
          <FormInput
            styleName="width-lg"
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Item Name"
            text="Item Name"
          />

          <FormInput
            styleName="width-lg"
            onChange={(e) => setRoom(e.target.value)}
            placeholder="Room"
            text="Room"
          />

          <DropDown
            label="Reserve Item For"
            usersOptions={usersOptions}
            selected={reserve}
            getReserveData={(reservedData) => setReserve(reservedData)}
          />

          <div className="inline-form">
            <InputDate
              styleName="width-lg-input-from-date"
              text="From:"
              getDateData={(fromDateData) => setFromDateInput(fromDateData)}
            />
            <InputDate
              styleName="width-lg-input-to-date"
              getDateData={(toDateData) => setToDateInput(toDateData)}
              text="To:"
            />
          </div>

          <div className="pos-btn">
            <Button buttonStyle="btn--default--color" buttonSize="btn--small">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddItemPage;
