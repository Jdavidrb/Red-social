import React from 'react';
import './Profile.css';
import profileImage from '../../assets/images/profile-image.png';

function Profile() {
  return (
    <div className='Profile'>
      {/*Encabezado del perfil*/}
      <div className='profile-header'>
        <img 
          src={profileImage} 
          alt='Profile' 
          className='profile-picture' 
        />

        <div className='profile-info'>
          <h1>Emma Smith</h1>
          <p>Product Designer at Acme Co</p>
        </div>
        
        <div className='profile-actions'>
          <button className='invite-button'>Invite</button>
          <button className='message-button'>Message</button>
        </div>
      </div>
      
      {/*Proyectos*/}
      <div className='projects-section'>
        <h2>Projects</h2>
        <div className='projects'>
          <div className='project-card'>Project</div>
          <div className='project-card'>Project</div>
          <div className='project-card'>Project</div>
          <div className='project-card'>Project</div>
        </div>
      </div>

      {/*Habilidades*/}
      <div className='skills-section'>
        <h2>Skills</h2>
        <div className='skills'>
          <div className='skill'>Product Design</div>
          <div className='skill'>UI/UX Design</div>
          <div className='skill'>Design Systems</div>
          <div className='skill'>Prototyping</div>
          <div className='skill'>User Research</div>
        </div>
      </div>

      {/*Experiencia laboral*/}
      <div className='work-experience-section'>
        <h2>Work Experience</h2>
        <div className='work-experience'>
          <div className='work-item'>
            <span className='icon'>&#128187;</span>
            <p>Product Designer at Acme Co (2019 - Present)</p>
            <span className='arrow'>&#8250;</span>
          </div>
          <div className='work-item'>
            <span className='icon'>&#128187;</span>
            <p>Product Designer at XYZ Inc (2017 - 2019)</p>
            <span className='arrow'>&#8250;</span>
          </div>
          <div className='work-item'>
            <span className='icon'>&#128187;</span>
            <p>Junior Designer at ABC Ltd (2016 - 2017)</p>
            <span className='arrow'>&#8250;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
