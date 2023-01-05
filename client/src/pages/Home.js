import React from 'react'
import { Link } from "react-router-dom";
 
 
const Home = () => {
  
 return (
     <>
   <div className="mt-5">
     <div className="container">
       <br></br>
           <h6>Welcome to the Home Page</h6>
       <br></br>
       <br></br>
           <h6>To login click below : </h6>
       <div className="add_btn mt-2 mb-2">
         <Link to="/login_question" className="btn btn-primary">Login</Link>
       </div>
      
       <br></br>
           <h6>To register as a patient click below : </h6>
       <div className="add_btn mt-2 mb-2">
         <Link to="/register_patient" className="btn btn-primary">Register Patient</Link>
       </div>
       </div>
   </div>
 </>
 )
}
 
export default Home;
