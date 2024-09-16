import React from 'react';
import './MainContent.css';

function MainContent() {
  const projects = [
    { id: 1, name: 'Proyecto 1', description: 'Descripción del Proyecto 1' },
    { id: 2, name: 'Proyecto 2', description: 'Descripción del Proyecto 2' },
  ];

  return (
    <main>
      <h2>Proyectos en los que estás trabajando</h2>
      <div className='projects'>
        {projects.map(project => (
          <div key={project.id} className='project-card'>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MainContent;