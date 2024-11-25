import React, { useEffect, useState } from 'react';
import './Profile.css';
import { motion, AnimatePresence } from 'framer-motion';
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

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <div className="profile-container">
            <motion.img
  src={process.env.PUBLIC_URL + '/volleyball.jpg'}  // Removed '/public' from the path
  alt="Volleyball"
  className="profile-picture"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5 }}
/>


            <AnimatePresence mode="wait">
                {isEditing ? (
                    <motion.div
                        key="edit"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                    >
                        <EditProfile
                            userData={userData}
                            setUserData={setUserData}
                            toggleEdit={toggleEdit}
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        key="view"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                    >
                        <h2>{userData.name}</h2>
                        <p>{userData.bio}</p>
                        <p>Location: {userData.location}</p>
                        <p>Email: {userData.email}</p>
                        <motion.button
                            onClick={toggleEdit}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Edit Profile
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Profile;
