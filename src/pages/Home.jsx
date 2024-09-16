import React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import MainContent from '../components/MainContent/MainContent';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div className='Home'>
      <Header />
      <div className='content'>
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default Home;