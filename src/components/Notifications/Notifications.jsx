import React, { useState, useEffect } from 'react';
import './Notifications.css';

function Notifications() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const data = [
        { id: 1, message: 'You have a new message from Juan', time: '2 min ago' },
        { id: 2, message: 'Maria commented on your post', time: '40 min ago' },
        { id: 3, message: 'Vladimir I invite you to his project', time: '1 hours ago'}
        ];
        setNotifications(data);
    }, []);

    return (
        <div className="notifications-dropdown">
        <div className="notifications-header">
            <h3>Notifications</h3>
        </div>
        <ul className="notifications-list">
            {notifications.map(notification => (
            <li key={notification.id} className="notification-item">
                <p>{notification.message}</p>
                <span>{notification.time}</span>
            </li>
            ))}
        </ul>
        <div className="notifications-footer">
            <button className="view-all-button">See all notifications</button>
        </div>
        </div>
    );
}

export default Notifications;