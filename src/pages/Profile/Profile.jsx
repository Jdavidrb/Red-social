import React from 'react';
import './Profile.css';
import profileImage from '../../assets/images/profile-image.png';
import Label from '../../components/Label/Label'; // Ajusta la ruta según tu estructura de proyecto
import Card from '../../components/Card/Card'; // Importa el componente Card
import projectImage from '../../assets/images/project2.png'; // Importa una imagen para los proyectos

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
          <Card 
            title="Project Alpha" 
            members={5} 
            dueDate="2 days" 
            image={projectImage} 
            width="190px" 
            height="170px" 
          />
          <Card 
            title="Project Beta" 
            members={3} 
            dueDate="1 week" 
            image={projectImage}
            width="190px" 
            height="170px" 
          />
          <Card 
            title="Project Beta" 
            members={3} 
            dueDate="1 week" 
            image={projectImage}
            width="190px" 
            height="170px" 
          />
          <Card 
            title="Project Beta" 
            members={3} 
            dueDate="1 week" 
            image={projectImage}
            width="190px" 
            height="170px" 
          />
          
        </div>
      </div>

      {/*Habilidades*/}
      <div className='skills-section'>
        <h2>Skills</h2>
        <div className='skills'>
          <Label text="Product Design" width="120px" height="30px" />
          <Label text="UI/UX Design" width="100px" height="30px" />
          <Label text="Design Systems" width="130px" height="30px" />
          <Label text="Prototyping" width="100px" height="30px" />
          <Label text="User Research" width="120px" height="30px" />
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