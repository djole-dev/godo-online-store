import React, { useState } from "react";
import "./SignupPage.css";
import Logo from "./logo.png";
import { auth } from '../../firebase';

import { Link, useHistory } from "react-router-dom";

function SignupPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");


  const register = e => {
    e.preventDefault();


    if(password === repassword){

      auth.createUserWithEmailAndPassword(email,password)
      .then((auth) =>{
          console.log(auth);
          if(auth){
              history.push('/');
          }
      })
      .catch(error => alert(error.message));


      
    }else {
      console.log(password,repassword);
      console.log("Passwords didn't mathced");
    }
    

}

  return (
    <div className='signup'>
      <Link to='/'>
        <img className='signup_logo' src={Logo} />
      </Link>

      <div className='signup_container'>
        <h1>Sign-In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <h5>Re-enter password</h5>
          <input type='password'
          value={repassword}
          onChange={(e) => setRepassword(e.target.value)} />
        </form>

        <p>
          By creating an account, you agree to Godo's Conditions of Use and
          Privacy Notice.
        </p>

        <button className='signup_signupButton' onClick={register}> 
          Create Your Godo Account
        </button>

        <p>
          Already have an account?
          <Link to='/login' style={{ textDecoration: "none" }}>
          <span> </span>
             Sign-In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
