import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import MainContent from '../../components/MainContent/MainContent';
import './Home.css'; // Importa el archivo CSS

function Home() {
  return (
    <div className='Home'>
      <Header />
      <div className='content'>
        <MainContent />
      </div>
    </div>
  );
}

export default Home;