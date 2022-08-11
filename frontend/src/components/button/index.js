import React from "react";
import "./index.css";

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  return (
    <button
      className={`btn ${buttonStyle} ${buttonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
