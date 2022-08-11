import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const FormInput = ({ name, onChange, text, placeholder, styleName }) => {
  return (
    <div className="formInput">
      <label>{text}</label>
      <input
        className={styleName}
        required
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default FormInput;
