import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from '../../assets/images/logo.png';
import bellIcon from '../../assets/images/bell-icon.png';
import profileImage from '../../assets/images/profile-image.png';
import Notifications from '../Notifications/Notifications';

function Header(){
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const notificationsRef = useRef(null);

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if(notificationsRef.current && !notificationsRef.current.contains(event.target)){
        setIsNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="logo">
        <img src={logoImage} alt="Logo" />
        <span>Protopia</span>
      </div>
      <div className="actions">
      <button onClick={toggleNotifications} className="notifications-button">
          <img src={bellIcon} alt="Notificaciones" />
        </button>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <button>
            <span className="login-title">Login</span>
          </button>
        </Link>
        <Link to="/profile">
          <button>
            <img src={profileImage} alt="Perfil" />
          </button>
        </Link>
        {isNotificationsOpen && (<div ref={notificationsRef}> <Notifications /> </div>)}
      </div>
    </header>
  );
}

export default Header;