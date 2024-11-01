import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Card from '../../components/Card/Card'; // Importa el componente Card
import './Home.css'; // Importa el archivo CSS
import img from '../../assets/images/img-proyect1.png'; // Importa las imágenes
import img2 from '../../assets/images/project2.png'; // Importa las imágenes
import img3 from '../../assets/images/project3.png'; // Importa las imágenes

function Home() {
  return (
    <div className='Home'>
      <div className='my-projects'>
        <Card 
          title="Project Alpha" 
          members={5} 
          dueDate="2 days" 
          image={img} 
          width="320px" 
          height="280px" 
        />
        <Card 
          title="Project Beta" 
          members={3} 
          dueDate="1 week" 
          image={img2} 
          width="320px" 
          height="280px" 
        />
        <Card 
          title="Project Gamma" 
          members={3} 
          dueDate="1 week" 
          image={img} 
          width="320px" 
          height="280px" 
        />
        <Card 
          title="Project Delta" 
          members={3} 
          dueDate="1 week" 
          image={img} 
          width="320px" 
          height="280px" 
        />
        <Card 
          title="Project Epsilon" 
          members={3} 
          dueDate="1 week" 
          image={img2} 
          width="320px" 
          height="280px" 
        />
        <Card 
          title="Project Zeta" 
          members={3} 
          dueDate="1 week" 
          image={img} 
          width="320px" 
          height="280px" 
        />
      </div>
    </div>
  );
}

export default Home;