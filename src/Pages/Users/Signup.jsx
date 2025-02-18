import React, { useState } from "react";
import './Signup.css'; // Assuming the CSS file is the same
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className="flex justify-center items-center min-h-[100vh]">

    
    <div className={`container ${isActive ? 'active' : ''} `}>
      <div className="form-box login">
        <form action="#">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            {/* <i className='bx bxs-user'></i> */}
    
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <div className="forgot-link">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <p>or login with social platforms</p>
          <div className="social-icons">
            <a href="#"><i className='bx bxl-google'></i></a>
            <a href="#"><i className='bx bxl-facebook'></i></a>
            <a href="#"><i className='bx bxl-github'></i></a>
            <a href="#"><i className='bx bxl-linkedin'></i></a>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <form action="#">
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" placeholder="full Name" required />
            {/* <i className='bx bxs-user'></i> */}
            
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            {/* <i className='bx bxs-envelope'></i> */}
            
          </div>
          <div className="input-box">
            <input type="number" placeholder="phone No" required />
            <i className='bx bxs-lock-alt'></i>
        
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <button type="submit" className="btn">Register</button>
          <p className="font-medium">or</p>
          <button type="submit" className="btn">
            <FontAwesomeIcon icon={faGoogle} className="relative right-1  "/>
             Continue with Google</button>
     
        </form>
      </div>

      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Hello, Welcome!</h1>
          <p>Don't have an account?</p>
          <button className="btn register-btn" onClick={handleRegisterClick}>Register</button>
        </div>

        <div className="toggle-panel toggle-right">
          <h1>Welcome Back!</h1>
          <p>Already have an account?</p>
          <button className="btn login-btn" onClick={handleLoginClick}>Login</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
