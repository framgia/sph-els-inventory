import "../../global.css";
import React, { useState, useEffect } from "react";
import { Modal } from "semantic-ui-react";
import { handle } from "../.././handler";


const EditItemModal = ({editItem,editItemId,editRoom}) => {
    const [name,setName] = useState(editItem);
    const [room,setRoom] = useState(editRoom);
    const [itemId,setItemId] = useState(editItemId);
    useEffect(() => {
        setName(editItem);
        setRoom(editRoom);
        setItemId(editItemId);
      }, [editItem, editItemId,editRoom]);

      const handleSubmit = (e,itemId)=>{
            let formField = new FormData();
            formField.append("name",name);
            formField.append("room",room);
            handle(
                "PUT",
                `http://localhost:8000/api/items/${itemId}/`,
                formField,
                setName
            );

      }
    return (
    <Modal
    trigger={<button className="addButton">Submit</button>}
    header="Edit Item"
    content="Confirm Changes?"
    actions={[
      "Cancel",
      {
        key: "yes",
        content: "Yes",
        positive: true,
        onClick: (event) => handleSubmit(event, editItemId),
      },
    ]}
    
    
    
    
    />
  )
}

export default EditItemModal
