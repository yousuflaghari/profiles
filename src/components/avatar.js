import React from "react";
import "./avatar.css";
const Avatar = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};
export default Avatar;
