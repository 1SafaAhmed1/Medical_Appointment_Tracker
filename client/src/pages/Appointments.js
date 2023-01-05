import React, { useState, useEffect} from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
 
const Appointments = () => {
   const [appointments, setAppointments] = useState([]);
  
   useEffect(() => {
       const fetchAllAppointments = async () => {
         try {
           const res = await axios.get("http://localhost:8800/appointments");
           setAppointments(res.data);
         } catch (err) {
           console.log(err);
         }
       };
       fetchAllAppointments();
   }, []);
 
   console.log(appointments);
  
  
 return (
     <>
   <div className="mt-5">
     <div className="container">
       <br></br>
           <h4>List of Appointments</h4>
       <br></br>
      
       <table class="table">
         <thead>
           <tr className="table-dark">
               <th scope="col">id</th>
               <th scope="col">Doctor's Name</th>
               <th scope="col">Patient's Name</th>
               <th scope="col">Date of Appointment</th>
               <th scope="col">Timing of Appointment</th>
               <th scope="col">Office Room</th>
               <th scope="col">Reason for Visit</th>
           </tr>
         </thead>
 
         <tbody>
           {
             appointments.map((appointment) => (
              
                 <>
                       <tr>
                           <th scope="row">{appointment.id_appointment}</th>
                           <td>{appointment.doctor_name}</td>
                           <td>{appointment.patient_name}</td>
                           <td>{appointment.dates_date}</td>
                           <td>{appointment.slot_time}</td>
                           <td>{appointment.office_number}</td>
                           <td>{appointment.reason}</td>
                       </tr>
                   </>
              
             )
           )}
         </tbody>
       </table>
       <br></br>
              <Link to="/scheduler">Back</Link>
 
     </div>
   </div>
 </>
 )
}
 
export default Appointments;
 
 
