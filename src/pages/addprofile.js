import React, { useState, useEffect } from "react";
import axios from "axios";
import "./addprofile.css";
import Input from "../components/input";
import Button from "../components/button";

const Addprofile = ({ profiles, setProfiles }) => {
  const [inputdata, setinputdata] = useState({
    first_name: "",
    email: "",
    website: "",
  });
  const [save, setSave] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setinputdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const HandleSave = async () => {
    try {
      setSave(true);
      const profileexist = profiles.find(
        (profile) => profile.first_name === inputdata.first_name
      );

      if (!profileexist) {
        const response = await axios.post(
          `https://6343e0272dadea1175af15e4.mockapi.io/users`,
          inputdata
        );
        console.log("Profile created successfully:", response.data);

        setProfiles((prevProfiles) => [...prevProfiles, response.data]);
        console.log(profiles);
        setinputdata({
          first_name: "",
          email: "",
          website: "",
        });
      } else {
        alert("profile already exist");
      }
    } catch (error) {
      console.error("Error creating profile:", error);
    } finally {
      setSave(false);
    }
  };
  return (
    <div className="main-container">
      <div className="form-container">
        <label htmlFor="first_name">First Name:</label>
        <Input
          type="text"
          name="first_name"
          placeholder="Enter your first name"
          value={inputdata.first_name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <Input
          type="email"
          className="input"
          name="email"
          placeholder="Enter your email"
          value={inputdata.email}
          onChange={handleChange}
        />

        <label htmlFor="website">Website:</label>
        <Input
          type="text"
          className="input"
          name="website"
          placeholder="Enter your website URL"
          value={inputdata.website}
          onChange={handleChange}
        />

        <Button onClick={HandleSave} name="Save"></Button>
      </div>
    </div>
  );
};

export default Addprofile;
