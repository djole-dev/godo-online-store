import React from "react";
import "./LoginPage.css";
import Logo from "./logo.png";

import {Link} from 'react-router-dom';

function LoginPage() {
  return (
    <div className='login'>
      <Link to='/'>
      <img className='login_logo' src={Logo}  />
      </Link>
    

      <div className='login_container'>
        <h1>Sign-In</h1>

        <form>
          <h5>E-mail</h5>
          <input type='text' />

          <h5>Password</h5>
          <input type='password'/>

          <button  className="login_button">Sign-In</button>
        </form>

        <p>
          By signing-in you agree to the Godo Online Store Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

      <Link to="/signup"> 
      <button className="login_signupButton">
            Create your Godo Account
        </button>
      </Link>
        

        
      </div>
    </div>
  );
}

export default LoginPage;
