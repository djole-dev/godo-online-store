import React from 'react';
import './SignupPage.css';
import Logo from "./logo.png";

import {Link} from 'react-router-dom';

function SignupPage() {
    return (
        <div className='signup'>
          <Link to='/'>
        <img className='signup_logo' src={Logo}  />
        </Link>
  
        <div className='signup_container'>
          <h1>Sign-In</h1>
  
          <form>
          <h5>Your name</h5>
            <input type='text' />

            <h5>E-mail</h5>
            <input type='text' />
  
            <h5>Password</h5>
            <input type='password'/>

            <h5>Re-enter password</h5>
            <input type='password'/>
  
          </form>
  
          <p>
          By creating an account, you agree to Godo's Conditions of Use and Privacy Notice.
          </p>
  
  
          <button className="signup_signupButton">
              Create Your Godo Account
          </button>

          <p>
         Already have an account?
         <Link to="/login" style={{textDecoration:"none"}}>
         <a> Sign-In</a>
         </Link>
        
        </p>

        </div>
      </div>
    )
}

export default SignupPage
