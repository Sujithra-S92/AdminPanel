import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useTheme } from "@mui/material";
// import { tokens } from "./theme";
// import "../user/ViewUser.css";
import { Link, useParams } from 'react-router-dom';

const ViewPodcast = () => {
  const [User,setUser]= useState([]);
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const {id} = useParams();
  useEffect(()=>{
    loadusers();
  },[]);
  const loadusers= async()=>{
    const result= await axios.get("http://localhost:8080/podcasts");
    console.log(result.data)
  setUser(result.data);
  }
 const deletepodcast = async (id)=>{
  await axios.delete(`http://localhost:8080/delete_podcast/${id}`);
  loadusers();
 }
  return (
 
    <div className="container-fluid">
  <div className="card shadow mb 4 mainDiv">
    <div className="card-headre-py-3">
      <h3 className="m-0 font-weight text-primary text-center" >Registered Podcasts
      
      </h3>
    </div>

  


<div className="card-body">

  <div className="table-responsive">
   
  <table className="table table-bordered mainDiv" >
  <thead>
    <tr>
      <th>Id</th>
      <th>TITLE</th>
      <th>SUBTITLE</th>
      <th>USER-NAME</th>
      <th>DESCRIPTION</th>
      <th>CATEGORY</th>
      <th>LANGUAGE</th>
      <th>GUEST</th>
      <th>HOST</th>
      <th>PUBLISH-DATE</th>
      <th>View</th>
      <th>Edit</th>
      <th>Delete</th>
      <th>Status</th>
     
    </tr>
  </thead>
  <tbody>
  {User.map((user,index)=>(

 <tr key={index}>
<td>{user.id}</td>
<td>{user.title}</td>
<td>{user.sub_title}</td>
<td>{user.user_name}</td>
<td>{user.description}</td>
<td>{user.category}</td>
<td>{user.language}</td>
<td>{user.host}</td>
<td>{user.guest}</td> 
<td>{user.publish_date}</td>

    <td><Link type="submit"className="btn btn-outline-success" name="btn-edit" to={`/podcastdetailpage/${user.id}`}>View</Link></td>

<td><Link type="submit"className="btn btn-outline-primary" name="btn-edit" to={`/podcastedit/${user.id}`}>Edit</Link></td>

<td><button type="submit"className="btn btn-outline-danger" name="deletebtn" value=""
onClick={()=>deletepodcast(user.id)}>Delete</button></td>
<td>{user.status}</td>
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


export default ViewPodcast;