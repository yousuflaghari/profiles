import React, { useEffect } from "react";
import "./profile1.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

const Profile1 = ({ profiles, setProfiles }) => {
    
    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const Response = await fetch("https://6343e0272dadea1175af15e4.mockapi.io/users")
                const data = await Response.json()
                setProfiles(data)
            } catch (error) {
                console.error("Error fetching profiles:", error);
            }

        };

        fetchProfiles();
    }, [setProfiles]);

    return (
        <div className="main">
            <div className="new">
                <div className="container">
                    <p className="p1">OUR TEAM MEMBERS</p>
                    <p className="p2">MEET OUR TEAM!</p>
                </div>
                <Link to="/formprofile">
                    <FontAwesomeIcon className="addprofile"  icon={faAddressBook} size="3x" color="white" ></FontAwesomeIcon>
                </Link>
            </div>

            <div className="avatar-container">
                {profiles.map((profile, index) => (
                    <Link to={`/profile/${profile.id}`} key={index} className="link">
                        <div key={index} className="profile">
                            <img
                                src={profile.image}
                                alt={`Profile ${index}`}
                                className="img"
                            />
                            <div className="name">{profile.first_name}</div>
                            <div className="email">{profile.email}</div>
                            <div className="website">{profile.website}</div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>

    );
};

export default Profile1;
