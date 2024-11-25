<<<<<<< HEAD
// src/components/EditProfile.js
import React, { useEffect, useState } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> cb4422101b8244b979beac4ca6ed6cbf4810597e

const EditProfile = ({ userData, setUserData, toggleEdit }) => {
    const [formData, setFormData] = useState(userData);

    useEffect(() => {
        setFormData(userData);
<<<<<<< HEAD
    },[userData]);
=======
    }, [userData]);
>>>>>>> cb4422101b8244b979beac4ca6ed6cbf4810597e

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData(formData);
        toggleEdit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Bio"
                required
            />
            <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditProfile;
