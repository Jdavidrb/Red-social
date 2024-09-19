import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Card from '../../components/Card/Card'; // Importa el componente Card
import './Home.css'; // Importa el archivo CSS
import img from '../../assets/images/bell-icon.png'; // Importa las imágenes

function Home() {
  return (
    <div className='Home'>
      <h1 className='title'>My projects</h1>
      <div className='my-projects'>
        
        <Card 
            title="Project Alpha" 
            members={5} 
            dueDate="2 days" 
            image= {img} 
          />
          <Card 
            title="Project Beta" 
            members={3} 
            dueDate="1 week" 
            image= {img}
          />
          <Card 
            title="Project Beta" 
            members={3} 
            dueDate="1 week" 
            image= {img}
          />
          <Card 
            title="Project Beta" 
            members={3} 
            dueDate="1 week" 
            image= {img}
          />
          <Card 
            title="Project Beta" 
            members={3} 
            dueDate="1 week" 
            image= {img}
          />
          <Card 
            title="Project Beta" 
            members={3} 
            dueDate="1 week" 
            image= {img}
          />
      </div>
    </div>
  );
}

export default Home;