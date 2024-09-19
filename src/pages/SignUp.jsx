import React from 'react';
import './SignUp.css';
import CustomInput from '../components/CustomInput'
function SignUp() {
  return (
    <div className="overlay">
      <div className="signup">
        <div className="title">Sign Up</div>
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
          <p className="instructions">
            Please enter a valid email address and a secure password. The password should be at least 8 characters long and include an uppercase letter, a lowercase letter, and a number.
          </p>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;