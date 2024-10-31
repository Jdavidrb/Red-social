import React from 'react';
import './Post.css';

const Post = ({ images, profile, description, skills }) => {
  return (
    <div className="post">
      <div className="profile">
        <img src={profile.image} alt={`${profile.name}'s profile`} className="profile-image" />
        <p>{profile.name}</p>
      </div>
      <div className="images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className="post-image" />
        ))}
      </div>
      <p>{description}</p>
      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill">{skill}</span>
        ))}
      </div>
      <div className="actions">
        <button>❤️</button>
        <button>💬</button>
        <button>Join</button>
      </div>
    </div>
  );
};

export default Post;