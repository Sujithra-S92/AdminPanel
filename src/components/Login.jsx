import axios from 'axios';
import React, { useState } from 'react';
 import {selectUser} from "../store/homeSlice";
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const [user, Setuser] = useState("false");
 const navigate= useNavigate();
 const location = useLocation();
 const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  

  const Submit = async (e) => {
    e.preventDefault();
   // console.log(email,password);
   try{
      const response = await axios.post("http://localhost:8080/user/login/", { user_email: email, user_password: password });
      console.log(response.data); // Handle successful login
     // dispatch(userStatus())
      // Setuser(email);
      // location.user=true;
      // console.log(location);
      // navigate("/home");
      setauthenticated(true)
        localStorage.setItem("authenticated", true);
        window.sessionStorage.setItem("username",email);
      
   
    } catch (error) {
      alert(`Error logging in:,${error.response.data} `);
      console.error('Error logging in:', error.response.data); // Handle login error
    }
  };
  return (
    <div className="container"> 
    <div className="row">
    
    <div className="col-md-8 offset-md-2 border rounded p-4 mt-2 shadow ">
    <h2 className='text-center'>LOGIN FORM</h2>
    
      <form className="needs-validation row g-3" onSubmit={(e)=>Submit(e)}>
    
      <div className="form-group row"> 
      <div className="col">
        <label for="email" className="col-sm-2 col-form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Email"
          name='user_email'
          value={email}
          onChange={e => setEmail(e.target.value)}></input>
        </div>
    </div>
  
   
    <div className="form-group row">
    <div className="col">
        <label for="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" 
          name='user_password'
          value={password}
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}/>
        </div>
    </div>
  
   
    <div className="form-group row">
      {/* <div className="col d-flex justify-content-center">
        
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
          <label className="form-check-label" for="form2Example31"> Remember me </label>
        </div>
      </div> */}
  
      <div className="col-md-6">
       
        <a href="#!">Forgot password?</a>
      </div>
    </div>
  
    <button type="submit" className="btn btn-primary btn-block mb-8" >Sign in</button>
  
   
    {/* <div className="text-center">
      <p>Not a member? <a href="#!">Register</a></p>
     
    </div> */}
  </form>
  </div>
  </div>
  </div>
  )
}

export default Login