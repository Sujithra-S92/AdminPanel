import React, { useState } from 'react'
import "./AddUser.css"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AddUser = () => {

  const navigate = useNavigate();

  const [user, setUser]= useState({
    user_name:"",
    user_email:"",
    user_phone:"",
    user_location:"",
    user_password:"",
    user_confirm:"",
    access:"",
    company:"",
    date:new Date(),

  });

  const {user_name,user_email,user_password,user_phone,user_location,access,company}=user;

const onInputChange=(e)=>{
  setUser({...user,[e.target.name]:e.target.value});
}

const onSubmit=async(e)=>{

   e.preventDefault();
   await axios.post("http://localhost:8080/user",user);
   navigate("/contacts");

}

  return (
    <div className="container"> 
    <div className="row">
      
    <div className="col-md-8 offset-md-2 border rounded p-4 mt-2 shadow ">
    <h2 className='text-center'>REGISTRATION FORM</h2>
   
      <form className="needs-validation row g-3" onSubmit={(e)=>onSubmit(e)}>
    <div className="form-group row">  
        <div className="col">
        <label for="name" className="col-sm-2 col-form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Name" name='user_name'
          value={user_name}
          onChange={(e)=>onInputChange(e)}/>
        </div>
      </div>
      <div className="form-group row">
        
        <div className="col">
        <label for="email" className="col-sm-2 col-form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Email"
          name='user_email'
          value={user_email}
          onChange={(e)=>onInputChange(e)}/>
        </div>
      </div>
      
      <div className="form-group row">
        {/* <label for="password" className="col-sm-2 col-form-label">Password</label> */}
        <div className="col-md-6">
        <label for="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" 
          name='user_password'
          value={user_password}
          placeholder="Password"
          onChange={(e)=>onInputChange(e)}/>
        </div>
     
        <div className="col-md-6">
        <label for="confirm_password" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="confirm_password" placeholder="Confirm Password" name='user_confirm'
          
          onChange={(e)=>onInputChange(e)}/>
        </div>
      </div>
      {/* <div className="form-group row">
        <label for="phone" className="col-sm-2 col-form-label">Contact Number</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="phone"
          name='user_phone'
          value={user_phone} 
          placeholder="Contact Number"
          onChange={(e)=>onInputChange(e)}/>
        </div>
      </div> */}
        
     
      <div className="form-group row">
        
        <div className="col-sm-6">
        <label for="address" className="form-label">Contact Number</label>
        <input type="number" className="form-control" id="phone"
          name='user_phone'
          value={user_phone} 
          placeholder="Contact Number"
          onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className="col-sm-6">
        <label for="user_location" className="form-label">Location</label>
        <input type="text" className="form-control" id="user_location" name="user_location"
        value={user_location}
        onChange={(e)=>onInputChange(e)}></input>
        </div>
        
      </div>
      <div className="form-group row">
        
        <div className="custom-file col">
        <label for="access" className="col-sm-2 col-form-label">Access</label>
  <select className="form-select" aria-label="Default select example" onChange={(e)=>onInputChange(e)}>
  <option selected>select the Access</option>
  <option value={access} onSelect={(e)=>onInputChange(e)}>Admin</option>
  <option value="Hindi">Podcaster</option>
  <option value="English">Viewer</option>
</select>
  
</div>
<div className="col-sm-6">
        <label for="company" className="form-label">Company Name</label>
        <input type="text" className="form-control" id="company" name="company"
        value={company}
        onChange={(e)=>onInputChange(e)}></input>
        </div>
 
 </div> 
    
      <div className="form-group row">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-outline-primary" id='btnAdd'>Add User</button>
          <Link type="submit"className="btn btn-outline-danger" name="btn-edit" to={"/contacts"}>Cancel</Link>
        </div>
      </div>
    </form>
    </div>
    </div>
    </div>
  )
}

export default AddUser

