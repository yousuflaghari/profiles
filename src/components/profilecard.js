import React from "react";
import "./profilecard.css";
import { Link } from "react-router-dom";
import Avatar from "./avatar";

const Profilecard = ({ profile, index }) => {
  return (
    <Link to={`/profile/${profile.id}`} key={index} className="link">
      <div key={index} className="profile">
        <Avatar src={profile.image} alt={`Profile ${index}`} className="img" />
        <div className="name">{profile.first_name}</div>
        <div className="email">{profile.email}</div>
        <div className="website">{profile.website}</div>
      </div>
    </Link>
  );
};
export default Profilecard;
