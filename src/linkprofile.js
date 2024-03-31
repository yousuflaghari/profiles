import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./linkprofile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { response } from "express";

const Linkprofile = ({ profiles }) => {
  const { index } = useParams();
  const profile = profiles[index];
  const [firstName, setFirstName] = useState(profile.first_name);
  const [email, setEmail] = useState(profile.email);
  const [website, setWebsite] = useState(profile.website);
  const [editMode, setEditMode] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleWebsiteChange = (e) => {
    setWebsite(e.target.value);
  };

  const handleeditname = () => {
    setEditMode(true);
  };
  const handleeditemail = () => {
    setEditMode(true);
  };
  const handleeditwebsite = () => {
    setEditMode(true);
  };

  const handlesavename = () => {
    setEditMode(false);
  };
  const handlesaveemail = () => {
    setEditMode(false);
  };
  const handlesavewebsite = () => {
    setEditMode(false);
    fetch(`https://6343e0272dadea1175af15e4.mockapi.io/users/${profile.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        website,
      }),
    });
  };

  const handlecancelname = () => {
    setFirstName(profile.first_name);
    setEditMode(false);
  };
  const handlecancelemail = () => {
    setEmail(profile.email);
    setEditMode(false);
  };
  const handlecancelwebsite = () => {
    setWebsite(profile.website);
    setEditMode(false);
  };

  return (
    <div className="profilemain">
      <div className="container1">
        <h1 className="h1">Profile</h1>
        <h6 className="h3">I'm a creative webdeveloper</h6>
        <div className="container2">
          <div className="details">
            <h3 className="headingdetail">Details</h3>
            <h6 className="firstName">First Name</h6>

            {editMode ? (
              <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            ) : (
              <p className="firstNamep">{firstName}</p>
            )}
            {editMode ? (
              <div>
                <button onClick={handlesavename}>Save</button>
                <button onClick={handlecancelname}>Cancel</button>
              </div>
            ) : (
              <div>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  onClick={handleeditname}
                />
                <FontAwesomeIcon icon={faTrash} />
              </div>
            )}
            <h6 className="firstName">Email</h6>
            {editMode ? (
              <input type="text" value={email} onChange={handleEmailChange} />
            ) : (
              <p className="firstNamep">{email}</p>
            )}
            {editMode ? (
              <div>
                <button onClick={handlesaveemail}>Save</button>
                <button onClick={handlecancelemail}>Cancel</button>
              </div>
            ) : (
              <div>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  onClick={handleeditemail}
                />
                <FontAwesomeIcon icon={faTrash} />
              </div>
            )}
            <h6 className="firstName">Website</h6>
            {editMode ? (
              <input
                type="text"
                value={website}
                onChange={handleWebsiteChange}
              />
            ) : (
              <p className="firstNamep">{website}</p>
            )}
            {editMode ? (
              <div>
                <button onClick={handlesavewebsite}>Save</button>
                <button onClick={handlecancelwebsite}>Cancel</button>
              </div>
            ) : (
              <div>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  onClick={handleeditwebsite}
                />
                <FontAwesomeIcon icon={faTrash} />
              </div>
            )}
          </div>
          <div className="aboutme">
            <h3 className="headingaboutme">About me</h3>
            <p className="paragraph">
              As a software engineer, you are at the forefront of technological
              innovation, wielding the power to shape the digital landscape and
              solve complex problems through code.
            </p>
          </div>
          <div className="avatar">
            <img
              src={profile.image}
              alt={`Profile ${index}`}
              className="img1"
            />
            <div className="avatardiv">
              <h3 className="h4">HELLO I'M</h3>
              <h3 className="h4">{firstName}</h3>
              <p className="paragraph1">
                As a software engineer, you are at the forefront of
                technological innovation, wielding the power to shape the
                digital landscape and solve complex problems through code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Linkprofile;
