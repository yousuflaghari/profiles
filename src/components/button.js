import React from "react";
import "./button.css";
const Button = ({ onclick, name }) => {
  return (
    <button onClick={onclick} className="btn">
      {name}
    </button>
  );
};
export default Button;
