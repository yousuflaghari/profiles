import React, { useState, useEffect } from "react";
import axios from "axios";
import "./formprofile.css";

const FormProfile = ({ profiles, setProfiles }) => {
  const [data, setData] = useState({
    first_name: "",
    email: "",
    website: "",
  });
  const [save, setSave] = useState(false);
  console.log(profiles);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const HandleSave = async () => {
    setSave(true);
  };
  useEffect(() => {
    if (save) {
      try {
        const savedata = async () => {
          const response = axios.post(
            `https://6343e0272dadea1175af15e4.mockapi.io/users`,
            data
          );
          console.log("Profile created successfully:", response.data);
          setProfiles((prevProfiles) => [...prevProfiles, data]);
          setData({
            first_name: "",
            email: "",
            website: "",
          });
        };
        savedata();
      } catch (error) {
        console.error("Error creating profile:", error);
      } finally {
        setSave(false);
      }
    }
  }, [save]);
  return (
    <div className="main-container">
      <div className="form-container">
        <label htmlFor="first_name">First Name:</label>
        <input
          type="text"
          className="input"
          name="first_name"
          placeholder="Enter your first name"
          value={data.first_name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="input"
          name="email"
          placeholder="Enter your email"
          value={data.email}
          onChange={handleChange}
        />

        <label htmlFor="website">Website:</label>
        <input
          type="text"
          className="input"
          name="website"
          placeholder="Enter your website URL"
          value={data.website}
          onChange={handleChange}
        />

        <button onClick={HandleSave}>Save</button>
      </div>
    </div>
  );
};

export default FormProfile;
