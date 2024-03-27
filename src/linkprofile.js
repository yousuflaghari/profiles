import React from "react";
import { useParams } from "react-router-dom";
import "./linkprofile.css"
const Linkprofile = ({ profiles }) => {
  const { index } = useParams();
  console.log(index)
  const profile = profiles[index];

  return (
    <div className="container1">
      <h1 className="h1">Profile</h1>
      <h6 className="h3">I'm a creative webdeveloper</h6>
      <img
        src={`https://api.dicebear.com/8.x/pixel-art/svg?seed=${profile.firstname}`}
        alt={`Profile ${index}`}
        className="img"
      />
      <div className="container2">
        <div className="details">
          <h3 className="headingdetail">Details</h3>
          <h6 className="firstName">firstName</h6>
          <p className="firstNamep">{profile.firstname}</p>
          <h6 className="firstName">Email</h6>
          <p className="firstNamep">{profile.email}</p>
          <h6 className="firstName">Website</h6>
          <p className="firstNamep">{profile.website}</p>
        </div>
        <div className="aboutme">
          <h3 className="headingaboutme">About me</h3>
          <p className="paragraph">As a software engineer, you are at the forefront of technological
            innovation, wielding the power to shape the digital landscape and solve complex problems
            through code.</p>
        </div>
        <div className="avatar">
          <div className="avatardiv">
          <h3 className="h4">HELLO I'M</h3>
          <h3 className="h4">{profile.firstname}</h3>
        <p className="paragraph1">As a software engineer, you are at the forefront of technological
            innovation, wielding the power to shape the digital landscape and solve complex problems
            through code.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Linkprofile;
