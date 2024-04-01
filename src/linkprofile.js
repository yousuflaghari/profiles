import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./linkprofile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Linkprofile = ({ profiles, setProfiles }) => {
  const { id } = useParams();
  const index = profiles?.findIndex((profile) => profile.id === id);
  const profile = profiles?.find((profile) => profile.id === id);
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState(profile?.first_name);
  const [email, setEmail] = useState(profile?.email);
  const [website, setWebsite] = useState(profile?.website);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get(
        `https://6343e0272dadea1175af15e4.mockapi.io/users/${id}`
      );
      const data = response.data;
      setProfiles([data]);
    };

    fetchProfile();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "website") {
      setWebsite(value);
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `https://6343e0272dadea1175af15e4.mockapi.io/users/${profile.id}`,
        {
          ...profile,
          first_name: firstName,
          email: email,
          website: website,
        }
      );
      setProfiles((prevProfiles) => {
        const updatedProfiles = [...prevProfiles];
        updatedProfiles[index] = {
          ...profile,
          first_name: firstName,
          email,
          website,
        };
        return updatedProfiles;
      });

      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleCancel = () => {
    setFirstName(profile.first_name);
    setEmail(profile.email);
    setWebsite(profile.website);
    setEditMode(false);
  };

  if (!profile) return <p>loading...</p>;

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
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
              />
            ) : (
              <p className="firstNamep">{firstName}</p>
            )}
            {editMode && (
              <div>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            )}
            {!editMode && (
              <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={handleEdit} />
                <FontAwesomeIcon icon={faTrash} />
              </div>
            )}

            <h6 className="firstName">Email</h6>
            {editMode ? (
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            ) : (
              <p className="firstNamep">{email}</p>
            )}
            {editMode && (
              <div>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            )}
            {!editMode && (
              <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={handleEdit} />
                <FontAwesomeIcon icon={faTrash} />
              </div>
            )}

            <h6 className="firstName">Website</h6>
            {editMode ? (
              <input
                type="text"
                name="website"
                value={website}
                onChange={handleInputChange}
              />
            ) : (
              <p className="firstNamep">{website}</p>
            )}
            {editMode && (
              <div>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            )}
            {!editMode && (
              <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={handleEdit} />
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
