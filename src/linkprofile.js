import React from "react";
const Linkprofile = ({ profile, index }) => {

    return (
        <>
            <h1>
                Second page
            </h1>
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
        </>
    )
}
export default Linkprofile;