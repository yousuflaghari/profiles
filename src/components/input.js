import React from "react";
import "./input.css";
const Input = ({ type, value, onChange, name }) => {
  return <input type={type} value={value} name={name} onChange={onChange} />;
};
export default Input;
