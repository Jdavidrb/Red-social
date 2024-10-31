import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import CustomInput from '../components/CustomInput';
import image from '../assets/images/vistaLogin.jpg'; // Importar la imagen

function Login() {
  return (
    <div className="overlay">
      <div className="container">
        <div className="login">
          <div className="title">Login</div>
          <form>
            <div>
              <label>Username:</label>
              <CustomInput type="text" width="100%" height="40px" placeholder="user@provider.com" />
            </div>
            <div>
              <label>Password:</label>
              <CustomInput type="password" width="100%" height="40px" placeholder="Enter a valid password" />
              <small className="password-hint">Enter a valid password</small>
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="signup-link">
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          </div>
        </div>
        <div 
          className="image-container" 
          style={{ backgroundImage: `url(${image})` }} // Usar la imagen importada
        ></div>
      </div>
    </div>
  );
}

export default Login;
