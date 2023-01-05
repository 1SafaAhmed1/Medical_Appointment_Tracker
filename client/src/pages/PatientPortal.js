import React, { useState, useEffect} from 'react'
import axios from "axios";
import { Link, useLocation} from "react-router-dom";
 
 
const PatientPortal = () => {
 const [appointments, setAppointments] = useState([]);
 
  
   useEffect(() => {
       const fetchAllAppointments = async () => {
         try {
           const res = await axios.get("http://localhost:8800/patient_portal/:id");
           setAppointments(res.data);
         } catch (err) {
           console.log(err);
         }
       };
       fetchAllAppointments();
   }, []);
 
   console.log(appointments);
 
   const location = useLocation();
   const PatientID = location.pathname.split('/')[2];
   console.log(location.pathname.split("/")[2]);
  
  
 return (
     <>
   <div className="mt-5">
     <div className="container">
       <div className="add_btn mt-2 mb-2">
         <Link to={`/medicine_order/${PatientID}`} className="btn btn-primary">Order Medicine</Link>
       </div>
       <div className="add_btn mt-2 mb-2">
         <Link to={`/orderlist/${PatientID}`} className="btn btn-primary">Medicine Orders list</Link>
       </div>
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
               <th scope="col">Appointment Detail</th>
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
                           <td className="detail">
                               <Link to={`/appointment_detail/${appointment.id_appointment}`}> <button className="btn btn-success">Details</button></Link>
                           </td>
                       </tr>
                   </>
              
             )
           )}
         </tbody>
       </table>
       <br></br>
              <Link to="/home">Back</Link>
 
     </div>
   </div>
 </>
 )
}
 
export default PatientPortal;
