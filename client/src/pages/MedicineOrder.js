import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
 
 
const  MedicineOrder= () => {
 
   const [medicines, setMedicines] = useState([]);
  
   useEffect(() => {
       const fetchAllMedicines = async () => {
         try {
           const res = await axios.get("http://localhost:8800/medicine_order/:id");
           setMedicines(res.data);
         } catch (err) {
           console.log(err);
         }
       };
       fetchAllMedicines();
   }, []);
  
 
   const [orders, setOrders] = useState({
       patient_name: "",
       notes: "",
       medicine_name_1: "",
       quantity_1: "",
       medicine_name_2: "",
       quantity_2: "",
       medicine_name_3: "",
       quantity_3: "",
       medicine_name_4: "",
       quantity_4: "",
       medicine_name_5: "",
       quantity_5: "",
  
   });
 
   const [error,setError] = useState(false)
  
 
   const navigate = useNavigate();
   const location = useLocation();
  
  
 
   const handleChange = (e) => {
       setOrders((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };
 
   const medicine_1 = (e) => {
       console.log(e.target.value);
       setOrders((prev) => ({ ...prev, medicine_name_1: e.target.value }));
     
   }
   const medicine_2 = (e) => {
       console.log(e.target.value);
       setOrders((prev) => ({ ...prev, medicine_name_2: e.target.value }));
     
   }
   const medicine_3 = (e) => {
       console.log(e.target.value);
       setOrders((prev) => ({ ...prev, medicine_name_3: e.target.value }));
     
   }
   const medicine_4 = (e) => {
       console.log(e.target.value);
       setOrders((prev) => ({ ...prev, medicine_name_4: e.target.value }));
     
   }
   const medicine_5 = (e) => {
       console.log(e.target.value);
       setOrders((prev) => ({ ...prev, medicine_name_5: e.target.value }));
     
   }
 
 
   const quantity_1 = (e) => {
       setOrders((prev) => ({ ...prev, quantity_1: e.target.valueAsNumber }));
     
   }
   const quantity_2 = (e) => {
       setOrders((prev) => ({ ...prev, quantity_2: e.target.valueAsNumber }));
     
   }
   const quantity_3 = (e) => {
       setOrders((prev) => ({ ...prev, quantity_3: e.target.valueAsNumber }));
     
   }
   const quantity_4 = (e) => {
       setOrders((prev) => ({ ...prev, quantity_4: e.target.valueAsNumber }));
     
   }
   const quantity_5 = (e) => {
       setOrders((prev) => ({ ...prev, quantity_5: e.target.valueAsNumber }));
     
   }
 
   const fetchPatientName = (e) => {
       console.log(e.target.value);
       setOrders((prev) => ({ ...prev, patient_name: e.target.value }));
   };
 
 
 
   const handleClick = async (e) => {
       e.preventDefault();
       try {
         await axios.post("http://localhost:8800/medicine_order/:id" , orders);
       } catch (err) {
         console.log(err);
         setError(true)
       }
       navigate(`/orderlist/${location.pathname.split("/")[2]}`);
   };
 
 
   return (
       <div className= "container">
           <br></br>
           <h4>Create A New Order</h4>
           <br></br>
           <form className="mt-4">
               <div className="row">
                  
                   <div className="card">
                       <div>
                           <div className="mb-3 col-lg-6 col-md-6 col-12" >
                               <select name="medicine_1Group" onChange={medicine_1} options={medicines}>
                                   {medicines.map(medicine => {
                                       return <option value={medicine.name}>{medicine.name}</option>;//check here
                                   })}
                               </select>
                           </div>
                       </div>
                       <div className="mb-3 col-lg-6 col-md-6 col-12" >
                           <input
                               type="number"
                               min="0"
                               max="5"
                               placeholder="----Select Quantity to order----"
                               onChange={quantity_1}
                               name="quantity_1"
                               class="form-control" id="exampleInputPassword1"
                               required>
                           </input>
                       </div>
                   </div>
              
 
                   <div className="card">
                       <div>
                           <div className="mb-3 col-lg-6 col-md-6 col-12" >
                               <select name="medicine_2Group" onChange={medicine_2} options={medicines}>
                                   {medicines.map(medicine => {
                                       return <option value={medicine.name}>{medicine.name}</option>;//check here
                                   })}
                               </select>
                           </div>
                          
                       </div>
                       <div className="mb-3 col-lg-6 col-md-6 col-12" >
                       <input
                               type="number"
                               min="0"
                               max="5"
                               placeholder="----Select Quantity to order----"
                               onChange={quantity_2}
                               name="quantity_2"
                               class="form-control" id="exampleInputPassword1"
                               required>
                           </input>
                       </div>
                   </div>
              
                  
 
                   <div className="card">
                       <div>
                           <div className="mb-3 col-lg-6 col-md-6 col-12" >
                               <select name="medicine_3Group" onChange={medicine_3} options={medicines}>
                                   {medicines.map(medicine => {
                                       return <option value={medicine.name}>{medicine.name}</option>;//check here
                                   })}
                               </select>
                           </div>
                          
                       </div>
                       <div className="mb-3 col-lg-6 col-md-6 col-12" >
                       <input
                               type="number"
                               min="0"
                               max="5"
                               placeholder="----Select Quantity to order----"
                               onChange={quantity_3}
                               name="quantity_3"
                               class="form-control" id="exampleInputPassword1"
                               required>
                           </input>
                       </div>
                   </div>
              
              
                   <div className="card">
                       <div>
                           <div className="mb-3 col-lg-6 col-md-6 col-12" >
                               <select name="medicine_4Group" onChange={medicine_4} options={medicines}>
                                   {medicines.map(medicine => {
                                       return <option value={medicine.name}>{medicine.name}</option>;//check here
                                   })}
                               </select>
                           </div>
                          
                       </div>
                       <div className="mb-3 col-lg-6 col-md-6 col-12" >
                          <input
                               type="number"
                               min="0"
                               max="5"
                               placeholder="----Select quantity to order----"
                               onChange={quantity_4}
                               name="quantity_4"
                               class="form-control" id="exampleInputPassword1"
                               required>
                           </input>
                       </div>
                   </div>
 
                   <div className="card">
                       <div>
                           <div className="mb-3 col-lg-6 col-md-6 col-12" >
                               <select name="medicine_5Group" onChange={medicine_5} options={medicines}>
                                   {medicines.map(medicine => {
                                       return <option value={medicine.name}>{medicine.name}</option>;//check here
                                   })}
                               </select>
                           </div>
                          
                       </div>
                       <div className="mb-3 col-lg-6 col-md-6 col-12" >
                           <input
                               type="number"
                               min="0"
                               max="5"
                               placeholder="----Select quantity to order----"
                               onChange={quantity_5}
                               name="quantity_5"
                               class="form-control" id="exampleInputPassword1"
                               required>
                           </input>
                       </div>
                   </div>
                   <div>
                   </div>
              
                   <div className="mb-3 col-lg-6 col-md-6 col-12" >
                       <label for="exampleInputPassword1" class="form-label">Extra Notes: </label>
                           <input
                               type="textarea"
                               placeholder=""
                               onChange={handleChange}
                               name="notes"
                               class="form-control" id="exampleInputPassword1"
                               required>
                           </input>
                   </div>
                   <div>
                   </div>
                   <div className="mb-3 col-lg-6 col-md-6 col-12" >
                       <label for="doctorsId" class="form-label">Do you agree to all the information ?</label>
                           &emsp;
                           <input
                               type="checkbox"
                               onChange={fetchPatientName}
                               value={location.pathname.split("/")[2]}
                               name="patient_id"
                               required>
                               </input> Confirm Information
                               <br></br>
                   </div>
 
                   <br />
                   <button onClick={handleClick} className="btn btn-success">REGISTER</button>
                   {error && "Something went wrong!"}
              </div>
           </form>
           <br></br>
              <Link to="/scheduler">Back</Link>
       </div>
   );
};
 
export default MedicineOrder;
