import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Addpodcast() {

  const navigate = useNavigate();
  const [user, setuser]= useState();


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
    language:"",
    category:"", 
    date:"",
    status:"pending",
    user:window.sessionStorage.getItem("username"),

  });
  const [categ,setCateg]= useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
 // const status= "pending";

  useEffect(()=>{
    fetchCategories();
  },[])
  const fetchCategories = async () => {
    const response = await axios.get("http://localhost:8080/api/categories");
   // console.log(response.data)
   setCateg(response.data);
    console.log(categ)
};
const handleChange = (e) => {
  setSelectedCategory(e.target.value);
  setPodcast({...podcast,[e.target.name]:e.target.value});
};

  const {title,sub_title,description,image,audio,video,text,guest,host,category,language,date,status}=podcast;

const onInputChange=(e)=>{
  setPodcast({...podcast,[e.target.name]:e.target.value});
}

const onSubmit=async(e)=>{

   e.preventDefault();
   await axios.post("http://localhost:8080/podcast",podcast);
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
        <label for="description" className="col-sm-2 col-form-label">Description</label>
        <div className="col-sm-10">
        <textarea className="form-control" id="description" name="description"rows="5"
        value={description}
        onChange={(e)=>onInputChange(e)}></textarea>
        </div>
      </div>
       <div className="form-group row">
        <label for="language" className="col-sm-2 col-form-label">Language</label>
        <div className="custom-file col-sm-10">
  <select className="form-select" aria-label="language" name='language' onChange={(e)=>onInputChange(e)}>
  <option selected>select the language</option>
  <option value={language}  >Malayalam</option>
  <option value="Hindi" >Hindi</option>
  <option value="English" >English</option>
</select>
  
</div>
</div>


<div className="form-group row">
        <label for="image" className="col-sm-2 col-form-label">Category</label>
       
        <div className="custom-file col-sm-10">

<select className="form-select" value={selectedCategory} name='category' onChange={handleChange}>
                <option value="">Select a category...</option>
                {categ.map(category => (
                    <option key={category.id} value={category.title}>
                        {category.title}
                    </option>
                ))}
            </select>
  
</div>
<div className="form-group row">
        <label for="date" className="col-sm-2 col-form-label">Date</label>
        <div className="col-sm-10">
          <input type="date" className="form-control" id="date" 
          name='date'
          value={date}
          onChange={(e)=>onInputChange(e)}/>
        </div>
      </div>
 
 </div> 
 
     

     
      <div className="form-group row">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-outline-primary" id='btnAdd'>Add Podcast</button>
          <Link type="submit"className="btn btn-outline-danger" name="btn-edit" to={"/viewpodcasts"}>Cancel</Link>
        </div>
      </div>
    </form>
    </div>
    </div>
    </div>
  )
}

export default Addpodcast