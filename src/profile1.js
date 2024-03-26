import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import "./profile1.css";

const Profile1 = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        // Generate fake user data using faker library
        const userData = Array.from({ length: 9 }, () => ({
          firstname: faker.name.firstName(),
          email: faker.internet.email(),
          website: faker.internet.url(),
        }));
        setProfiles(userData);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div>
      <h1>Profiles</h1>
      <div className="avatar-container">
        {profiles.map((profile, index) => (
          <div key={index} className="profile">
            <img
              src={`https://api.dicebear.com/8.x/pixel-art/svg?seed=${profile.firstname}`}
              alt={`Profile ${index}`}
              className="img"
            />
            <div className="name">{profile.firstname}</div>
            <div className="email">{profile.email}</div>
            <div className="phone">{profile.website}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile1;
