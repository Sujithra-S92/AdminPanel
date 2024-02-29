import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useTheme } from "@mui/material";
import { tokens } from "./../theme";
import "../user/ViewUser.css";
import { Link, useParams } from 'react-router-dom';

const ViewUser = () => {
  const [User,setUser]= useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {id} = useParams();
  useEffect(()=>{
    loadusers();
  },[]);
  const loadusers= async()=>{
    const result= await axios.get("http://localhost:8080/users");
    console.log(result.data)
  setUser(result.data);
  }
 const deleteUser = async (id)=>{
  await axios.delete(`http://localhost:8080/user/${id}`);
  loadusers();
 }
  return (
 
    <div className="container">
  <div className="card shadow mb 4 mainDiv">
    <div className="card-headre-py-3">
      <h3 className="m-0 font-weight text-primary text-center" >Registered Users
      
      </h3>
    </div>

  


<div className="card-body">

  <div className="table-responsive">
   
  <table className="table table-bordered mainDiv" >
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Password</th>
      <th>Contact</th>
      <th>Location</th>
      <th>View</th>
      <th>Edit</th>
      <th>Delete</th>
     
    </tr>
  </thead>
  <tbody>
  {User.map((user,index)=>(

 <tr key={index}>
<td>{user.user_id}</td>
<td>{user.user_name}</td>
<td>{user.user_email}</td>
<td>{user.user_password}</td>
<td>{user.user_phone}</td>
<td>{user.user_location}</td> 

    <td><Link type="submit"className="btn btn-success" name="btn-edit" to={`/viewuserdetails/${user.user_id}`}>View</Link></td>

<td><Link type="submit"className="btn btn-outline-primary" name="btn-edit" to={`/useredits/${user.user_id}`}>Edit</Link></td>

<td><button type="submit"className="btn btn-danger" name="deletebtn" value=""
onClick={()=>deleteUser(user.user_id)}>Delete</button></td>
</tr>

  
      
    
   
    ))} 
     </tbody>
</table>
  </div>

 </div>
</div>
</div>

  )
}


export default ViewUser;