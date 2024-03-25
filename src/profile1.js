import React, { useState, useEffect } from "react";
import { faker } from '@faker-js/faker'; // Assuming this is the correct import for faker library
import "./profile1.css";

const Profile1 = () => {
    const apis = [
        "https://api.dicebear.com/8.x/pixel-art/svg",
        "https://api.dicebear.com/8.x/lorelei/svg",
        "https://api.dicebear.com/8.x/pixel-art/svg?seed=John",
        "https://api.dicebear.com/8.x/pixel-art/svg?seed=Jane",
        "https://api.dicebear.com/8.x/pixel-art/svg?seed=John&hair=short01,short02,short03,short04,short05",
        "https://api.dicebear.com/8.x/pixel-art/svg?seed=Jane&hair=long01,long02,long03,long04,long05",
        "https://api.dicebear.com/8.x/lorelei/svg?flip=true",
        "https://api.dicebear.com/8.x/lorelei/svg?flip=false",
        "https://api.dicebear.com/8.x/bottts/svg"
    ];

    const [profiles, setProfiles] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const fetchedProfiles = await Promise.all(apis.map(api => fetch(api).then(response => response.url)));
                setProfiles(fetchedProfiles);
                
                const fakerResponse = await fetch("https://fakerapi.it/api/v1/users");
                const userData = await fakerResponse.json();
                console.log(userData.data,"29")
                setData(userData.data);
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
                        <img src={profile} alt={`Profile ${index}`} className="img" />
                        <div className="name">{data[index]?.firstname}</div>
                        <div className="email">{data[index]?.email}</div>
                        <div className="phone">{data[index]?.website}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile1;
