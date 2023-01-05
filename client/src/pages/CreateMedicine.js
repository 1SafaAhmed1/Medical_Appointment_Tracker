import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 
 
const CreateMedicine = () => {
 
   const [medicines, setMedicines] = useState({
       name: "",
       purpose: "",
       available: 0,
   });
 
   const [error,setError] = useState(false)
 
   const navigate = useNavigate();
 
 
   const handleChange = (e) => {
       setMedicines((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };
  
 
   const handleClick = async (e) => {
       e.preventDefault();
       try {
         await axios.post("http://localhost:8800/create_medicine" , medicines);
         navigate("/pharmacist_portal");
       } catch (err) {
         console.log(err);
         setError(true)
       }
       navigate('/pharmacist_portal');
   };
 
  
  
 
  
 
   return (
       <div className= "container">
           <br></br>
           <h4>Add New Medicine type to Inventory</h4>
           <br></br>
           <form className="mt-4">
               <div className="row">
                   <div class="mb-3 col-lg-6 col-md-6 col-12">
                       <label for="exampleInputPassword1" class="form-label">Name : </label>
                       <input
                           type="text"
                           placeholder="type in the name of the medicine"
                           onChange={handleChange}
                           name="name"
                           class="form-control" id="exampleInputPassword1"
                       />
                   </div>
                   <div class="mb-3 col-lg-6 col-md-6 col-12">
                       <label for="exampleInputPassword1" class="form-label">Purpose : </label>
                           <input
                               type="textarea"
                               placeholder="describe purpose of the medicine"
                               onChange={handleChange}
                               name="purpose"
                               class="form-control" id="exampleInputPassword1"
                               required>
                           </input>
                   </div>
                   <div class="mb-3 col-lg-6 col-md-6 col-12">
                       <label for="exampleInputPassword1" class="form-label">Quantity Available : </label>
                           <input
                               type="number"
                               placeholder="quantity of medicine available"
                               onChange={handleChange}
                               name="available"
                               class="form-control" id="exampleInputPassword1"
                               required>
                           </input>
                   </div>
              
 
                   <br />
                   <button onClick={handleClick} className="btn btn-success">ADD</button>
                   {error && "Something went wrong!"}
                   <br></br>
                   <Link to="/pharmacist_portal">Back</Link>
              </div>
             
           </form>
          
       </div>
   );
};
 
export default CreateMedicine

