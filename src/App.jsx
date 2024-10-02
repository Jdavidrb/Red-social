import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Create from './pages/Create';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

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
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/explore" exact={true} element={<Explore />} />
            <Route path="/create" exact={true} element={<Create />} />
            <Route path="/profile" exact={true} element={<Profile />} />
            <Route path="/login" exact={true} element={<Login />} />
            <Route path="/signup" exact={true} element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;