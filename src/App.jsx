import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Create from './pages/Create';
import Profile from './pages/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Header  from './components/Header/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <div className='App'>
        <Sidebar />
        <div className='content-app'>
          <Routes>
            <Route path="/" exact = {true} element={<Home />} />
            <Route path="/explore" exact = {true}  element={<Explore />} />
            <Route path="/create" exact = {true}  element={<Create />} />
            <Route path="/profile" exact = {true}  element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;