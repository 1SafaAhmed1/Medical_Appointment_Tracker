import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
 
 
const Order = () => {
 
   const [medicines, setMedicines] = useState({
       available: 0,
   });
 
 
   const [error,setError] = useState(false)
 
   const navigate = useNavigate();
   const location = useLocation();
   const MedID = location.pathname.split('&')[1];
   const Quantity = parseInt(location.pathname.split('&')[2]);
 
 
   const handleChange = (e) => {
 
       let added;
       added = e.target.valueAsNumber
      
       let sum;
       sum = added + Quantity;
       setMedicines((prev) => ({ ...prev, [e.target.name]: sum }));
       e.preventDefault();
      
      
   };
 
  
 
   const handleClick = async (e) => {
       e.preventDefault();
       try {
         await axios.put("http://localhost:8800/order/"+MedID, medicines);
         navigate("/allorders");
       } catch (err) {
         console.log(err);
         setError(true)
       }
       navigate('/allorders');
   };
 
  
   return (
       <div className= "container">
           <br></br>
           <h4>Order Medicine Quantity</h4>
           <br></br>
           <form className="mt-4">
               <div className="row">
                   <div class="mb-3 col-lg-6 col-md-6 col-12">
                       <label for="exampleInputPassword1" class="form-label">Quantity Available : {location.pathname.split('&')[2]} </label>
                       <br></br>
                       <br></br>
                       <label for="exampleInputPassword1" class="form-label">Quantity to Order : </label>
                           <input
                               type="number"
                               placeholder="to order"
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
                   <Link to="/allorders">Back</Link>
              </div>
             
           </form>
       </div>
   );
};
export default Order;
 
 
