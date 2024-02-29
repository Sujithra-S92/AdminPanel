import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditPodcast() {

  const navigate = useNavigate();
  const {id}= useParams();

  const [podcast, setPodcast]= useState({
    title:"",
    sub_title:"",
    description:"",
    image:"",
    audio:"",
    video:"",
    text:"",
    guest:"",
    host:"",
    category:"",
    language:"",
    publish_date:"",

  });
  useEffect(()=>{
    loadpodcast();
  },[]);
  
  const loadpodcast= async()=>{
    const result= await axios.get(`http://localhost:8080/podcast/${id}`);
    console.log(result.data)
    setPodcast(result.data);
  }

  const {title,sub_title,description,image,audio,video,text,guest,host,category,language,publish_date}=podcast;

const onInputChange=(e)=>{
  setPodcast({...podcast,[e.target.name]:e.target.value});
}

const onSubmit=async(e)=>{
//console.log(podcast);
   e.preventDefault();
   await axios.put(`http://localhost:8080/editpodcast/${id}`,podcast);
    navigate("/viewpodcasts");

}

  return (
    <div className="container"> 
    <div className="row">
    <div className="col-md-8 offset-md-2 border rounded p-4 mt-2 shadow ">
      <h2 className="text-center">Register Podcast</h2>
      <form className="needs-validation" onSubmit={(e)=>onSubmit(e)} encType='form-data/multipart'>
    <div className="form-group row">
        <label for="title" className="col-sm-2 col-form-label">Title</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="title" placeholder="Title" name='title'
          value={title}
          onChange={(e)=>onInputChange(e)}/>
        </div>
      </div>
      <div className="form-group row">
        <label for="sub_title" className="col-sm-2 col-form-label">Sub-Title</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="sub_title" placeholder="Sub-Title"
          name='sub_title'
          value={sub_title}
          onChange={(e)=>onInputChange(e)}/>
        </div>
      </div>
      <div className="form-group row">
        <label for="host" className="col-sm-2 col-form-label">Host</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="host" placeholder="Host Name"
          name='host'
          value={host}
          onChange={(e)=>onInputChange(e)}/>
        </div>
      </div>
      <div className="form-group row">
        <label for="guest" className="col-sm-2 col-form-label">Guest</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="guest" placeholder="Guest Name"
          name='guest'
          value={guest}
          onChange={(e)=>onInputChange(e)}/>
        </div>
      </div>
      
      <div className="form-group row">
        <label for="category" className="col-sm-2 col-form-label">Category</label>
        <div className="col-sm-10">
        <input type="text" className="form-control" id="category" placeholder="Category"
          name='category'
          value={category}
          onChange={(e)=>onInputChange(e)}/>
        </div>
      </div>
      <div className="form-group row">
        <label for="language" className="col-sm-2 col-form-label">Language</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="language" placeholder="Language"
          name='language'
          value={language}
          onChange={(e)=>onInputChange(e)}/>
        </div>
      </div>
      <div className="form-group row">
        <label for="description" className="col-sm-2 col-form-label">Description</label>
        <div className="col-sm-10">
        <textarea className="form-control" id="description" name="description"rows="3"
        value={description}
        onChange={(e)=>onInputChange(e)}></textarea>
        </div>
      </div>
      
      <div className="form-group row">
        <label for="image" className="col-sm-2 col-form-label">Image</label>
        <div className="custom-file col-sm-10">
  <input type="file" className="custom-file-input" id="image" name='image'/>
  
</div>
</div>
 {/* </div>
      <div className="form-group row">
        <label for="audio" className="col-sm-2 col-form-label">Audio</label>
        <div className="custom-file col-sm-10">
  <input type="file" className="custom-file-input" id="audio" name='audio'/>
</div>
 </div>
 <div className="form-group row">
        <label for="video" className="col-sm-2 col-form-label">Video</label>
        <div className="custom-file col-sm-10">
  <input type="file" className="custom-file-input" id="video" name='video'/>
 
</div>
 </div>
 <div className="form-group row">
        <label for="text" className="col-sm-2 col-form-label">Text</label>
        <div className="custom-file col-sm-10">
  <input type="file" className="custom-file-input" id="text" name='text'/>
  
</div>
 </div> */}
     
     <div className="form-group row">
        <label for="date" className="col-sm-2 col-form-label">Date</label>
        <div className="col-sm-10">
          <input type="date" className="form-control" id="publish_date" 
          name='publish_date'
          value={publish_date}
          onChange={(e)=>onInputChange(e)}/>
        </div>
      </div>
     
      <div className="form-group row">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-outline-primary" id='btnAdd'>Edit Podcast</button>
          <Link type="submit"className="btn btn-outline-danger" name="btn-edit" to={"/viewpodcasts"}>Cancel</Link>
        </div>
      </div>
    </form>
    </div>
    </div>
    </div>
  )
}

export default EditPodcast