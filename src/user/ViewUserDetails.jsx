import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ViewUserDetails = () => {
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
  const loadUser = async ()=>{
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  }


  return (
    <div className='conatiner'>
      <div className="col-md-8 offset-md-2 border rounded p-4 mt-2 shadow ">
      <h2 className="text-center-m-4">User Details of Id : </h2>
      <div className="card">
        <ul className='list-group list-group-flush '>
        <li className="list-group-item mt-2">
          <b>Name:</b>
          {user.user_name}
        </li>
        <li className="list-group-item mt-2">
          <b>Email:</b>
          {user.user_email}
        </li>
        <li className="list-group-item mt-2">
          <b>Password:</b>
          {user.user_password}
        </li>
        <li className="list-group-item mt-2">
          <b>Contact Number:</b>
          {user.user_phone}
        </li>
        <li className="list-group-item mt-2">
          <b>Address:</b>
          {user.user_location}
        </li>
  

        </ul>
      </div>
      <Link type="submit"className="btn btn-outline-danger mt-5" name="btn-edit" to={"/contacts"}>Cancel</Link>
    </div>
    </div>
    
  )
}

export default ViewUserDetails;