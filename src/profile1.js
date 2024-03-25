import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { faker } from '@faker-js/faker';
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
                setData(userData.data);
            } catch (error) {
                console.error("Error fetching profiles:", error);
            }
        };

        fetchProfiles();
    }, []);

    return (
        <Router>
            <div>
                <h1>Profiles</h1>
                <div className="avatar-container">
                    {profiles.map((profile, index) => (
                        <Link key={index} to={`/profile/${index}`} className="profile-link">
                            <div className="profile">
                                <img src={profile} alt={`Profile ${index}`} className="img" />
                                <div className="name">{data[index]?.firstname}</div>
                                <div className="email">{data[index]?.email}</div>
                                <div className="phone">{data[index]?.website}</div>
                            </div>
                        </Link>
                    ))}
                </div>
                <Switch>
                    <Route path="/profile/:index" render={({ match }) => (
                        <ProfileDetail data={data[match.params.index]} />
                    )} />
                </Switch>
            </div>
        </Router>
    );
};

const ProfileDetail = ({ data }) => {
    if (!data) return null;
    
    return (
        <div>
            <h2>Profile Detail</h2>
            <div className="profile">
                <div className="name">{data.firstname}</div>
                <div className="email">{data.email}</div>
                <div className="phone">{data.website}</div>
            </div>
        </div>
    );
};

export default Profile1;
