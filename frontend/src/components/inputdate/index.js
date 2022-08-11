import React, { useState } from "react";
import "./index.css";

const InputDate = ({ text, styleName, getDateData }) => {
  const [date, setDate] = useState("");
  return (
    <div className="date-app">
      <label>{text}</label>
      <div>
        <input
          className={styleName}
          type="date"
          onChange={(e) => setDate(e.target.value)}
          onChangeCapture={(e) => getDateData(e.target.value)}
          value={date}
        />
      </div>
    </div>
  );
};

export default InputDate;
