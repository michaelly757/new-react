import React, { useState, useEffect } from 'react';
import './App.css';
import Profile from './components/Profile'; // Assuming Profile.js is in 'src/components/'
import ElfsightWidget from './components/ElfsightWidget'; // Import ElfsightWidget component

const App = () => {
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

    // Countdown Timer logic
    const [countdownVisible, setCountdownVisible] = useState(localStorage.getItem('widgetClosed') !== 'true');
    const christmasDate = new Date('December 25, 2024 00:00:00').getTime();

    const updateCountdown = setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = christmasDate - now;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        if (countdownVisible) {
            document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        if (timeRemaining <= 0) {
            clearInterval(updateCountdown);
            document.getElementById('countdown').innerHTML = "Merry Christmas!";
        }
    }, 1000);

    const closeCountdown = () => {
        setCountdownVisible(false);
        localStorage.setItem('widgetClosed', 'true');
    };

    return (
        <div className="App">
            <h1>Welcome to My Website</h1>

            {/* Countdown Widget */}
            {countdownVisible && (
                <div className="countdown-container">
                    <h2>Christmas Countdown</h2>
                    <div id="countdown" className="countdown"></div>
                    <button className="close-btn" onClick={closeCountdown}>Close</button>
                </div>
            )}

            <Profile />  {/* Render Profile Component */}

            {/* Elfsight Widget */}
            <div className="elfsight-container">
                <ElfsightWidget /> {/* Render the Elfsight widget */}
            </div>
        </div>
    );
};

export default App;
