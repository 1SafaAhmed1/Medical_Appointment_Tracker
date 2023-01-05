import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 
 
const RegisterDoctor = () => {
 
   const [doctors, setDoctors] = useState({
       name: "",
       password: "",
       dateofbirth: "",
       gender: "",
       qualification: "",
       specialization: "",
       slottime_1: "",
       slottime_2: "",
       slottime_3: "",
       office_number: "",
       mobilenumber: "",
       email: "",
   });
 
   const [error,setError] = useState(false)
 
   const navigate = useNavigate();
 
 
   const handleChange = (e) => {
       setDoctors((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };
 
  
   const genderChange = (e) => {
       setDoctors((prev) => ({ ...prev, gender: e.target.value }));
     
   }
 
   const slot_1Change = (e) => {
       setDoctors((prev) => ({ ...prev, slottime_1: e.target.value }));
     
   }
   const slot_2Change = (e) => {
       setDoctors((prev) => ({ ...prev, slottime_2: e.target.value }));
     
   }
   const slot_3Change = (e) => {
       setDoctors((prev) => ({ ...prev, slottime_3: e.target.value }));
     
   }
 
  
  
 
   const handleClick = async (e) => {
       e.preventDefault();
       try {
         await axios.post("http://localhost:8800/scheduler" , doctors);
         navigate("/scheduler");
       } catch (err) {
         console.log(err);
         setError(true)
       }
       navigate('/scheduler');
   };
 
  
  
 
  
 
   return (
       <div className= "container">
           <br></br>
           <h4>Register New Doctor Account</h4>
           <br></br>
           <form className="mt-4">
               <div className="row">
                   <div class="mb-3 col-lg-6 col-md-6 col-12">
                       <label for="exampleInputPassword1" class="form-label">Name : </label>
                       <input
                           type="text"
                           placeholder="type in your name"
                           onChange={handleChange}
                           name="name"
                           class="form-control" id="exampleInputPassword1"
                       />
                   </div>
                   <div class="mb-3 col-lg-6 col-md-6 col-12">
                       <label for="exampleInputPassword1" class="form-label">Password : </label>
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
                       <label for="exampleInputPassword1" class="form-label">Date of Birth : </label>
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
                       <label for="exampleInputPassword1" class="form-label">Gender :
                           <div>
                           <input type="radio" name="genderGroup" value="Male" onChange={genderChange}  /> Male&emsp;         
                           <input type="radio" name="genderGroup" value="Female"  onChange={genderChange}  /> Female&emsp;        
                           <input type="radio" name="genderGroup" value="Other"  onChange={genderChange} /> Other&emsp;    
                           </div>
                       </label>
                   </div>
                   <div class="mb-3 col-lg-6 col-md-6 col-12">
                       <label for="exampleInputPassword1" class="form-label">Qualification : </label>
                           <input
                               type="varchar"
                               placeholder="type in your qualification"
                               onChange={handleChange}
                               name="qualification"
                               class="form-control" id="exampleInputPassword1"
                           />
                   </div>
                   <div class="mb-3 col-lg-6 col-md-6 col-12">
                       <label for="exampleInputPassword1" class="form-label">Specialization : </label>
                           <input
                               type="text"
                               placeholder="type in your specialization"
                               onChange={handleChange}
                               name="specialization"
                               class="form-control" id="exampleInputPassword1"
                           />
                   </div>
                   <div class="mb-3 col-lg-6 col-md-6 col-12" className= "container1">
                       <label for="doctors[slottime_1]" class="form-label">Preferred Work Slot 1 :
                           <div>
                           <select name="slot_1Group" onChange={slot_1Change} >
                               <option disabled={true} value="">----Select Timing----</option>
                               <option value="ST 09:00AM - 10:00AM ">09:00 AM - 10:00 AM</option>
                               <option value="ST 10:00AM - 11:00AM ">10:00 AM - 11:00 AM</option>
                               <option value="ST 11:00AM - 12:00AM ">11:00 AM - 12:00 AM</option>
                               <option value="ST 12:00AM - 01:00PM ">12:00 AM - 01:00 PM</option>
                               <option value="ST 01:30PM - 02:30PM ">01:30 PM - 02:30 PM</option>
                               <option value="ST 02:30PM - 03:30PM">02:30 PM - 03:30 PM</option>
                               <option value="ST 03:30PM - 04:30PM">03:30 PM - 04:30 PM</option>
                               <option value="ST 04:30PM - 05:30PM">04:30 PM - 05:30 PM</option>
                               <option value="ST 06:00PM - 07:00PM">06:00 PM - 07:00 PM</option>
                               <option value="ST 07:00PM - 08:00PM">07:00 PM - 08:00 PM</option>
                               <option value="ST 09:00PM - 10:00PM">09:00 PM - 10:00 PM</option>
                               <option value="MW 09:00AM - 10:00AM ">09:00 AM - 10:00 AM</option>
                               <option value="MW 10:00AM - 11:00AM ">10:00 AM - 11:00 AM</option>
                               <option value="MW 11:00AM - 12:00AM ">11:00 AM - 12:00 AM</option>
                               <option value="MW 12:00AM - 01:00PM ">12:00 AM - 01:00 PM</option>
                               <option value="MW 01:30PM - 02:30PM ">01:30 PM - 02:30 PM</option>
                               <option value="MW 02:30PM - 03:30PM">02:30 PM - 03:30 PM</option>
                               <option value="MW 03:30PM - 04:30PM">03:30 PM - 04:30 PM</option>
                               <option value="MW 04:30PM - 05:30PM">04:30 PM - 05:30 PM</option>
                               <option value="MW 06:00PM - 07:00PM">06:00 PM - 07:00 PM</option>
                               <option value="MW 07:00PM - 08:00PM">07:00 PM - 08:00 PM</option>
                               <option value="MW 09:00PM - 10:00PM">09:00 PM - 10:00 PM</option>
                               <option value="RA 09:00AM - 10:00AM ">09:00 AM - 10:00 AM</option>
                               <option value="RA 10:00AM - 11:00AM ">10:00 AM - 11:00 AM</option>
                               <option value="RA 11:00AM - 12:00AM ">11:00 AM - 12:00 AM</option>
                               <option value="RA 12:00AM - 01:00PM ">12:00 AM - 01:00 PM</option>
                               <option value="RA 01:30PM - 02:30PM ">01:30 PM - 02:30 PM</option>
                               <option value="RA 02:30PM - 03:30PM">02:30 PM - 03:30 PM</option>
                               <option value="RA 03:30PM - 04:30PM">03:30 PM - 04:30 PM</option>
                               <option value="RA 04:30PM - 05:30PM">04:30 PM - 05:30 PM</option>
                               <option value="RA 06:00PM - 07:00PM">06:00 PM - 07:00 PM</option>
                               <option value="RA 07:00PM - 08:00PM">07:00 PM - 08:00 PM</option>
                               <option value="RA 09:00PM - 10:00PM">09:00 PM - 10:00 PM</option>
                           </select>
                           </div>
                       </label>
                   </div>
                   <div class="mb-3 col-lg-6 col-md-6 col-12" className= "container1">
                       <label for="doctors[slottime_2]" class="form-label">Preferred Work Slot 2 :
                           <div>
                           <select name="slot_2Group" onChange={slot_2Change} >
                               <option disabled={true} value="">----Select Timing----</option>
                               <option value="ST 09:00AM - 10:00AM ">09:00 AM - 10:00 AM</option>
                               <option value="ST 10:00AM - 11:00AM ">10:00 AM - 11:00 AM</option>
                               <option value="ST 11:00AM - 12:00AM ">11:00 AM - 12:00 AM</option>
                               <option value="ST 12:00AM - 01:00PM ">12:00 AM - 01:00 PM</option>
                               <option value="ST 01:30PM - 02:30PM ">01:30 PM - 02:30 PM</option>
                               <option value="ST 02:30PM - 03:30PM">02:30 PM - 03:30 PM</option>
                               <option value="ST 03:30PM - 04:30PM">03:30 PM - 04:30 PM</option>
                               <option value="ST 04:30PM - 05:30PM">04:30 PM - 05:30 PM</option>
                               <option value="ST 06:00PM - 07:00PM">06:00 PM - 07:00 PM</option>
                               <option value="ST 07:00PM - 08:00PM">07:00 PM - 08:00 PM</option>
                               <option value="ST 09:00PM - 10:00PM">09:00 PM - 10:00 PM</option>
                               <option value="MW 09:00AM - 10:00AM ">09:00 AM - 10:00 AM</option>
                               <option value="MW 10:00AM - 11:00AM ">10:00 AM - 11:00 AM</option>
                               <option value="MW 11:00AM - 12:00AM ">11:00 AM - 12:00 AM</option>
                               <option value="MW 12:00AM - 01:00PM ">12:00 AM - 01:00 PM</option>
                               <option value="MW 01:30PM - 02:30PM ">01:30 PM - 02:30 PM</option>
                               <option value="MW 02:30PM - 03:30PM">02:30 PM - 03:30 PM</option>
                               <option value="MW 03:30PM - 04:30PM">03:30 PM - 04:30 PM</option>
                               <option value="MW 04:30PM - 05:30PM">04:30 PM - 05:30 PM</option>
                               <option value="MW 06:00PM - 07:00PM">06:00 PM - 07:00 PM</option>
                               <option value="MW 07:00PM - 08:00PM">07:00 PM - 08:00 PM</option>
                               <option value="MW 09:00PM - 10:00PM">09:00 PM - 10:00 PM</option>
                               <option value="RA 09:00AM - 10:00AM ">09:00 AM - 10:00 AM</option>
                               <option value="RA 10:00AM - 11:00AM ">10:00 AM - 11:00 AM</option>
                               <option value="RA 11:00AM - 12:00AM ">11:00 AM - 12:00 AM</option>
                               <option value="RA 12:00AM - 01:00PM ">12:00 AM - 01:00 PM</option>
                               <option value="RA 01:30PM - 02:30PM ">01:30 PM - 02:30 PM</option>
                               <option value="RA 02:30PM - 03:30PM">02:30 PM - 03:30 PM</option>
                               <option value="RA 03:30PM - 04:30PM">03:30 PM - 04:30 PM</option>
                               <option value="RA 04:30PM - 05:30PM">04:30 PM - 05:30 PM</option>
                               <option value="RA 06:00PM - 07:00PM">06:00 PM - 07:00 PM</option>
                               <option value="RA 07:00PM - 08:00PM">07:00 PM - 08:00 PM</option>
                               <option value="RA 09:00PM - 10:00PM">09:00 PM - 10:00 PM</option>
                           </select>
                           </div>
                       </label>
                   </div>
                   <div class="mb-3 col-lg-6 col-md-6 col-12" className= "container1" >
                       <label for="doctors[slottime_3]" class="form-label">Preferred Working Slot 3 :
                           <div>
                           <select name="slot_3Group" onChange={slot_3Change} >
                               <option disabled={true} value="">----Select Timing----</option>
                               <option value="ST 09:00AM - 10:00AM ">09:00 AM - 10:00 AM</option>
                               <option value="ST 10:00AM - 11:00AM ">10:00 AM - 11:00 AM</option>
                               <option value="ST 11:00AM - 12:00AM ">11:00 AM - 12:00 AM</option>
                               <option value="ST 12:00AM - 01:00PM ">12:00 AM - 01:00 PM</option>
                               <option value="ST 01:30PM - 02:30PM ">01:30 PM - 02:30 PM</option>
                               <option value="ST 02:30PM - 03:30PM">02:30 PM - 03:30 PM</option>
                               <option value="ST 03:30PM - 04:30PM">03:30 PM - 04:30 PM</option>
                               <option value="ST 04:30PM - 05:30PM">04:30 PM - 05:30 PM</option>
                               <option value="ST 06:00PM - 07:00PM">06:00 PM - 07:00 PM</option>
                               <option value="ST 07:00PM - 08:00PM">07:00 PM - 08:00 PM</option>
                               <option value="ST 09:00PM - 10:00PM">09:00 PM - 10:00 PM</option>
                               <option value="MW 09:00AM - 10:00AM ">09:00 AM - 10:00 AM</option>
                               <option value="MW 10:00AM - 11:00AM ">10:00 AM - 11:00 AM</option>
                               <option value="MW 11:00AM - 12:00AM ">11:00 AM - 12:00 AM</option>
                               <option value="MW 12:00AM - 01:00PM ">12:00 AM - 01:00 PM</option>
                               <option value="MW 01:30PM - 02:30PM ">01:30 PM - 02:30 PM</option>
                               <option value="MW 02:30PM - 03:30PM">02:30 PM - 03:30 PM</option>
                               <option value="MW 03:30PM - 04:30PM">03:30 PM - 04:30 PM</option>
                               <option value="MW 04:30PM - 05:30PM">04:30 PM - 05:30 PM</option>
                               <option value="MW 06:00PM - 07:00PM">06:00 PM - 07:00 PM</option>
                               <option value="MW 07:00PM - 08:00PM">07:00 PM - 08:00 PM</option>
                               <option value="MW 09:00PM - 10:00PM">09:00 PM - 10:00 PM</option>
                               <option value="RA 09:00AM - 10:00AM ">09:00 AM - 10:00 AM</option>
                               <option value="RA 10:00AM - 11:00AM ">10:00 AM - 11:00 AM</option>
                               <option value="RA 11:00AM - 12:00AM ">11:00 AM - 12:00 AM</option>
                               <option value="RA 12:00AM - 01:00PM ">12:00 AM - 01:00 PM</option>
                               <option value="RA 01:30PM - 02:30PM ">01:30 PM - 02:30 PM</option>
                               <option value="RA 02:30PM - 03:30PM">02:30 PM - 03:30 PM</option>
                               <option value="RA 03:30PM - 04:30PM">03:30 PM - 04:30 PM</option>
                               <option value="RA 04:30PM - 05:30PM">04:30 PM - 05:30 PM</option>
                               <option value="RA 06:00PM - 07:00PM">06:00 PM - 07:00 PM</option>
                               <option value="RA 07:00PM - 08:00PM">07:00 PM - 08:00 PM</option>
                               <option value="RA 09:00PM - 10:00PM">09:00 PM - 10:00 PM</option>
                           </select>
                           </div>
                       </label>
                   </div>
                   <div class="mb-3 col-lg-6 col-md-6 col-12">
                       <label for="exampleInputPassword1" class="form-label">Office Room Number : </label>
                           <input
                               type="varchar"
                               placeholder="type in your office number"
                               onChange={handleChange}
                               name="office_number"
                               class="form-control" id="exampleInputPassword1"
                           />
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
 
export default RegisterDoctor

