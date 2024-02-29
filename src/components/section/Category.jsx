
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const CategoryComponent = () => {
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const response = await axios.get("http://localhost:8080/api/categories");
      //  console.log(response.data)
        setCategories(response.data);
    };

    const handleCreateCategory = async () => {
     // setCategories([...categories, response.data]);
    // setCategories()
        const response = await axios.post("http://localhost:8080/api/categories", {title});
        fetchCategories();
        setTitle('');

    };

    const handleDeleteCategory = async (id) => {
        await axios.delete(`http://localhost:8080/api/categories/${id}`);
        setCategories(categories.filter(category => category.id !== id));
        fetchCategories();
    };

    return (
    //     <div>
    //         <h2>Categories</h2>
    //         <ul>
    //             {categories.map((category,index) =>(
    //                 <li key={category.id}>
    //                     {category.title}
    //                     <button onClick={() => handleDeleteCategory(category.id)}>Delete</button>
    //                 </li>
    //             ))}
    //         </ul>
    //         <input
    //             type="text"
    //             value={title}
    //             onChange={(e) => setTitle(e.target.value)}
    //         />
    //         <button onClick={handleCreateCategory}>Create</button>
    //     </div>
    // );
    <div className="card-body">

  <div className="table-responsive">
   
  <table className="table table-bordered mainDiv" >
  <thead>
    <tr>
      <th>Id</th>
      <th>Title</th>
      {/* <th>Edit</th> */}
      <th>Delete</th>
     
    </tr>
  </thead>
  <tbody>
  {categories.map((category,index)=>(

 <tr key={index}>
<td>{category.id}</td>
<td>{category.title}</td> 
{/* <td><Link type="submit"className="btn btn-outline-primary" name="btn-edit" to={`/categoryedits/${category.id}`}>Edit</Link></td> */}

<td><button type="submit"className="btn btn-danger" name="deletebtn" value=""
onClick={() => handleDeleteCategory(category.id)}>Delete</button></td>
</tr>

  
      
    
   
    ))} 
     </tbody>
</table>
<input
              type="text"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
          <button onClick={handleCreateCategory}>Create</button>
  </div>


 </div>
    );
};

export default CategoryComponent;
