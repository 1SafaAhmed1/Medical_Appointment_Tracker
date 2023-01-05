import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
 
const LoginQuestion = () => {
  
 return (
     <>
   <div className="mt-5">
     <div className="container">
       <br></br>
           <h4>What your desired type of account? </h4>
       <br></br>
       <div className="add_btn mt-2 mb-2">
       <Link to="/scheduler" className="btn btn-primary">Admin</Link>
       </div>
       <div className="add_btn mt-2 mb-2">
       <Link to="/doctor_portal/2" className="btn btn-primary">Doctor</Link>
       </div>
       <div className="add_btn mt-2 mb-2">
       <Link to="/patient_portal/2" className="btn btn-primary">Patient</Link>
       </div>
       <div className="add_btn mt-2 mb-2">
         <Link to="/pharmacist_portal" className="btn btn-primary">Pharmacist</Link>
       </div>
       <br></br>
       </div>
   </div>
 </>
 )
}
 
export default LoginQuestion;
 
