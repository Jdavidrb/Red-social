import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import homeIcon from '../../assets/images/home-icon.png';
import exploreIcon from '../../assets/images/explore-icon.png';
import createIcon from '../../assets/images/create-icon.png';
import profileIcon from '../../assets/images/profile-icon.png';
function Sidebar() {
  return (
    <aside>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            <img src={homeIcon} alt="Home" className="icon" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore" activeClassName="active">
            <img src={exploreIcon} alt="Explore" className="icon" />
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink to="/create" activeClassName="active">
            <img src={createIcon} alt="Create" className="icon" />
            Create
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/profile" activeClassName="active">
            <img src={profileIcon} alt="Profile" className="icon" />
            Profile
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;