import React from 'react';
import './Card.css';

const Card = ({ title, members, dueDate, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        {members && <p>{members} members</p>}
        {dueDate && <p>Due in {dueDate}</p>}
      </div>
    </div>
  );
};

export default Card;
