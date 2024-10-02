import React from 'react';
import './Header.css';
import logoImage from '../../assets/images/logo.png';
import bellIcon from '../../assets/images/bell-icon.png';
import searchIcon from '../../assets/images/search-icon.png';
import profileImage from '../../assets/images/profile-image.png';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logoImage} alt="Logo" />
        <span>Protopia</span>
      </div>
      <div className="actions">
        <button>
          <img src={bellIcon} alt="Notificaciones" />
        </button>
        <button>
          <img src={searchIcon} alt="Buscar" />
        </button>
        <img src={profileImage} alt="Perfil" className="profile-img" />
      </div>
    </header>
  );


  
}


export default Header;