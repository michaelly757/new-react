// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import './Profile.css';
import EditProfile from './EditProfile';

const Profile = () => {
    const [userData, setUserData] = useState(() => {
        const savedData = localStorage.getItem('userData');
        return savedData ? JSON.parse(savedData) : {
            name: 'Michael Ly',
            bio: 'Yr 10 High School Student',
            location: 'Adelaide, South Australia',
            email: '@gmail.com',
        };
    });
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };
    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData]);
    return (
        <div className="profile-container">
            <img 
                src={process.env.PUBLIC_URL + '/volleyball.jpg'} 
                alt="Volleyball" 
                className="profile-picture" 
            />
            {isEditing ? (
                <EditProfile 
                    userData={userData} 
                    setUserData={setUserData} 
                    toggleEdit={toggleEdit} 
                />
            ) : (
                <>
                    <h2>{userData.name}</h2>
                    <p>{userData.bio}</p>
                    <p>Location: {userData.location}</p>
                    <p>Email: {userData.email}</p>
                    <button onClick={toggleEdit}>Edit Profile</button>
                </>
            )}
        </div>
    );
};

export default Profile;
