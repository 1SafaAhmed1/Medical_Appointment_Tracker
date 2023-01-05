import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 
 
const RegisterPatient = () => {
 
   const [patients, setPatients] = useState({
       name: "",
       password: "",
       dateofbirth: "",
       gender: "",
       bloodgroup: "",
       birthcountry: "",
       mobilenumber: "",
       email: "",
       address: "",
       postalcode: "",
       url: "",
   });
 
   const [error,setError] = useState(false)
 
   const navigate = useNavigate();
 
 
   const handleChange = (e) => {
       setPatients((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };
 
  
   const genderChange = (e) => {
       setPatients((prev) => ({ ...prev, gender: e.target.value }));
     
   }
 
   const bloodgroupChange = (e) => {
       setPatients((prev) => ({ ...prev, bloodgroup: e.target.value }));
     
   }
  
  
 
   const handleClick = async (e) => {
       e.preventDefault();
       try {
         await axios.post("http://localhost:8800/register_patient" , patients);
         navigate("/");
       } catch (err) {
         console.log(err);
         setError(true)
       }
       navigate('/scheduler');
   };
 
 
   return (
       <div className= "container">
           <br></br>
           <h4>Register New Patient Account</h4>
           <br></br>
           <form className="mt-4">
               <div className="row">
                   <div class="mb-3 col-lg-6 col-md-6 col-12">
                       <label for="name" class="form-label">Name : </label>
                       <input
                           type="text"
                           placeholder="type in your name"
                           onChange={handleChange}
                           name="name"
                           class="form-control" id="exampleInputPassword1"
                           required>
                       </input>
                   </div>
                   <div class="mb-3 col-lg-6 col-md-6 col-12">
                       <label for="password" class="form-label">Password : </label>
                           <input
                               type="password"
                               placeholder="set your password"
                               onChange={handleChange}
                               name="password"
                               class="form-control" id="exampleInputPassword1"
                               required>
                           </input>
                   </div>
                   <div class="mb-3 col-lg-6 col-md-6 col-12">
                       <label for="dateofbirth" class="form-label">Date of Birth : </label>
                           <input
                               type="date"
                               placeholder="select your DOB"
                               onChange={handleChange}
                               name="dateofbirth"
                               class="form-control" id="exampleInputPassword1"
                               required>
                           </input>
                   </div>
                   <div class="mb-3 col-lg-6 col-md-6 col-12">
                       <label for="gender" class="form-label">Gender :
                           <div>
                           <input type="radio" name="genderGroup" value="Male" onChange={genderChange}  /> Male&emsp;         
                           <input type="radio" name="genderGroup" value="Female"  onChange={genderChange}  /> Female&emsp;        
                           <input type="radio" name="genderGroup" value="Other"  onChange={genderChange} /> Other&emsp;    
                           </div>
                       </label>
                   </div>
                   <div class="mb-3 col-lg-6 col-md-6 col-12">
                       <label for="birthcountry" class="form-label">Country of Origin: </label>
                           <input
                               type="text"
                               placeholder="county of origin"
                               onChange={handleChange}
                               name="birthcountry"
                               class="form-control" id="exampleInputPassword1"
                           />
                   </div>
                   <div class="mb-3 col-lg-6 col-md-6 col-12">
                       <label for="bloodgroup" class="form-label">Blood Type :
                               <div>
                               <input type="radio" name="bloodtypeGroup" value="A+" onChange={bloodgroupChange}  /> A+&emsp;         
                               <input type="radio" name="bloodtypeGroup" value="A-"  onChange={bloodgroupChange}  /> A-&emsp;        
                               <input type="radio" name="bloodtypeGroup" value="B+"  onChange={bloodgroupChange} /> B+&emsp; 
                               <input type="radio" name="bloodtypeGroup" value="B-" onChange={bloodgroupChange}  /> B-&emsp;         
                               <input type="radio" name="bloodtypeGroup" value="O+"  onChange={bloodgroupChange}  /> O+&emsp;        
                               <input type="radio" name="bloodtypeGroup" value="O-"  onChange={bloodgroupChange} /> O-&emsp;
                               <input type="radio" name="bloodtypeGroup" value="AB+" onChange={bloodgroupChange}  /> AB+&emsp;         
                               <input type="radio" name="bloodtypeGroup" value="AB-"  onChange={bloodgroupChange}  /> AB-&emsp;          
                               </div>
                       </label>
                   </div>
                   <div class="mb-3 col-lg-6 col-md-6 col-12">
                       <label for="exampleInputPassword1" class="form-label">Mobile Number : </label>
                           <input
                               type="varchar"
                               placeholder="01#########"
                               onChange={handleChange}
                               name="mobilenumber"
                               class="form-control" id="exampleInputPassword1"
                           /> 
                   </div>
                   <div class="mb-3 col-lg-6 col-md-6 col-12">
                       <label for="exampleInputPassword1" class="form-label">Email : </label>
                           <input
                               type="varchar"
                               placeholder="example@gmail.com"
                               onChange={handleChange}
                               name="email"
                               class="form-control" id="exampleInputPassword1"
                           /> 
                   </div>
                   <div class="mb-3 col-lg-6 col-md-6 col-12">
                       <label for="exampleInputPassword1" class="form-label">Current Address : </label>
                           <input
                               type="textarea"
                               placeholder="your current address.."
                               onChange={handleChange}
                               name="address"
                               class="form-control" id="exampleInputPassword1"
                           />
                   </div>
                   <div class="mb-3 col-lg-6 col-md-6 col-12">
                       <label for="exampleInputPassword1" class="form-label">Postal Code : </label>
                           <input
                               type="varchar"
                               placeholder="type in your postal code"
                               onChange={handleChange}
                               name="postalcode"
                               class="form-control" id="exampleInputPassword1"
                           />
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
 
export default RegisterPatient
