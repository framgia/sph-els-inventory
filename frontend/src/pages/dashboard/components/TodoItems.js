import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import "../index.css";
import { useNavigate } from "react-router-dom";
import DeleteConfirmation from "../../../modals/delete-item";
import { handle } from "../../../handler";

function TodoItems() {
  const navigate = useNavigate();
  const [items, setItem] = useState([]);
  const [reservations, getReservations] = useState([]);
  const [users, getUsers] = useState([]);

  useEffect(() => {
    const formField = new FormData();
    handle("GET", "http://localhost:8000/api/items/", formField, setItem);
    handle(
      "GET",
      "http://localhost:8000/api/reservations/",
      formField,
      getReservations
    );
    handle("GET", "http://localhost:8000/api/users/", formField, getUsers);
  }, []);

  const toEditItem = (id, name, room) => {
    navigate("/edit-item-page", { state: { id, name, room } });
  };

  const toReservation = (itemId, itemName) => {
    navigate("/reservation-page", { state: { itemId, itemName } });
  };

  const handleDelete = (event, reservationId) => {
    const formField = new FormData();
    handle(
      "DELETE",
      `http://localhost:8000/api/reservations/${reservationId}/`,
      formField,
      getReservations
    );
    window.location.reload();
  };

  return (
    <>
      {items.map((item, index) => (
        <div className="items" key={index}>
          <div className="todo-details">
            <div className="texts">
              <p className="todo-text">Item: {item.name}</p>
              <p className="todo-text">Room: {item.room}</p>
              <p className="text"> Reservations:</p>
              {reservations.map((reservation, index) => {
                if (reservation.item_id === item.id.toString()) {
                  return (
                    <div className="time" key={index}>
                      <div
                        className="time"
                        onClick={(event) => handleDelete(event, reservation.id)}
                      >
                        {users.map((user, index) => {
                          if (reservation.user_id === user.id.toString()) {
                            return (
                              <p className="time" key={index}>
                                {user.name} from{" "}
                                {reservation.reserved_date_from} until{" "}
                                {reservation.reserved_date_to}
                              </p>
                            );
                          }
                          return null;
                        })}
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className="todo-actions">
            <div
              className="status-free"
              style={{ color: "white" }}
              onClick={() => {
                toReservation(item.id, item.name);
              }}
            >
              Reserve
            </div>
            <div
              className="icon"
              onClick={() => {
                toEditItem(item.id, item.name, item.room);
              }}
            >
              <MdEdit />
            </div>
            <div className="icon">
              <DeleteConfirmation
                deleteItemId={item.id}
                deleteName={item.name}
                deleteRoom={item.room}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoItems;
