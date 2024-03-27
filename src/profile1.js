import React, { useEffect } from "react";
import { faker } from "@faker-js/faker";
import "./profile1.css";
import { Link } from "react-router-dom";

const Profile1 = ({ profiles, setProfiles }) => {
    useEffect(() => {
        const fetchProfiles = async () => {
            try {
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
    }, [setProfiles]);

    return (
        <div>
            <h1>Profiles</h1>
            <div className="avatar-container">
                {profiles.map((profile, index) => (
                    <Link to={`/profile/${index}`} key={index} className="322-link">
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
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Profile1;
