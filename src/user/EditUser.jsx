import React, { useEffect, useState } from 'react'
import "./AddUser.css"
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {

  const navigate = useNavigate();
  const {id}= useParams();

  const [user, setUser]= useState({
    user_name:"",
    user_email:"",
    user_phone:"",
    user_location:"",
    user_password:"",
    user_confirm:"",

  });
useEffect(()=>{
  loadUser();
},[])
  const {user_name,user_email,user_password,user_phone,user_location}=user;

const onInputChange=(e)=>{
  setUser({...user,[e.target.name]:e.target.value});
}

const onSubmit=async(e)=>{

   e.preventDefault();
   await axios.put(`http://localhost:8080/user/${id}`,user);
   navigate("/contacts");

}
const loadUser = async ()=>{
  const result = await axios.get(`http://localhost:8080/user/${id}`);
  setUser(result.data);
}

  return (
    <div className="container"> 
    <div className="row">
    <div className="col-md-8 offset-md-2 border rounded p-4 mt-2 shadow ">
      <h2 className="text-center-m-4">Edit User</h2>
      <form className="needs-validation" onSubmit={(e)=>onSubmit(e)}>
    <div className="form-group row">
        <label for="name" className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="name" placeholder="Name" name='user_name'
          value={user_name}
          onChange={(e)=>onInputChange(e)}/>
        </div>
      </div>
      <div className="form-group row">
        <label for="email" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input type="email" className="form-control" id="email" placeholder="Email"
          name='user_email'
          value={user_email}
          onChange={(e)=>onInputChange(e)}/>
        </div>
      </div>
      <div className="form-group row">
        <label for="password" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="password" 
          name='user_password'
          value={user_password}
          placeholder="Password"
          onChange={(e)=>onInputChange(e)}/>
        </div>
      </div>
      
      <div className="form-group row">
        <label for="phone" className="col-sm-2 col-form-label">Contact Number</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="phone"
          name='user_phone'
          value={user_phone} 
          placeholder="Contact Number"
          onChange={(e)=>onInputChange(e)}/>
        </div>
      </div>
     
      <div className="form-group row">
        <label for="address" className="col-sm-2 col-form-label">Address</label>
        <div className="col-sm-10">
        <textarea className="form-control" id="address" name="user_location"rows="3"
        value={user_location}
        onChange={(e)=>onInputChange(e)}></textarea>
        </div>
        
      </div>
      <div className="form-group row">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-outline-primary" id='btnAdd'>Edit User</button>
          <Link type="submit"className="btn btn-outline-danger" name="btn-edit" to={"/contacts"}>Cancel</Link>
        </div>
      </div>
    </form>
    </div>
    </div>
    </div>
  )
}

export default EditUser

