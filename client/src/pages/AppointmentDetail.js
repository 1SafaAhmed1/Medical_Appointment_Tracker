import React, { useState, useEffect} from 'react'
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
 
 
const AppointmentDetail = () => {
   const [appointments, setAppointments] = useState([]);
  
   useEffect(() => {
       const fetchAllAppointments = async () => {
         try {
           const res = await axios.get("http://localhost:8800/appointment_detail/:id");
           setAppointments(res.data);
         } catch (err) {
           console.log(err);
         }
       };
       fetchAllAppointments();
   }, []);
 
   console.log(appointments);
   const location = useLocation();
   //const ID =location.pathname.split("/")[2];
   const appointment_ID= location.pathname.split("&")[1]
   const doctor_name= location.pathname.split("&")[2]
   const patient_name= location.pathname.split("&")[3]
 
  
  
 return (
     <>
   <div className="mt-5">
     <div className="container">
       <br></br>
           <h4>Appointment Detail {appointment_ID}</h4>
       <br></br>
           Doctor Name: {doctor_name}
       <br></br>
           Patient Name: {patient_name}
           <Link to={`/upload_prescription/&${patient_name}`}> <button className="btn btn-success">Details</button></Link>
       <br></br>
      
      
      
       <br></br>
              <Link to="/scheduler">Back</Link>
 
     </div>
   </div>
 </>
 )
}
 
export default AppointmentDetail;
 
 
 


