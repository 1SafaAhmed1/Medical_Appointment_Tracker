import React, { useState, useEffect} from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
 
const Scheduler = () => {
   const [doctors, setDoctors] = useState([]);
  
   useEffect(() => {
       const fetchAllDoctors = async () => {
         try {
           const res = await axios.get("http://localhost:8800/scheduler");
           setDoctors(res.data);
         } catch (err) {
           console.log(err);
         }
       };
       fetchAllDoctors();
   }, []);
 
   console.log(doctors);
 
  
  
 return (
     <>
   <div className="mt-5">
     <div className="container">
       <br></br>
           <h4>Moderator Portal</h4>
       <br></br>
       <div className="add_btn mt-2 mb-2">
         <Link to="/register_patient" className="btn btn-primary">Create new Patient Account</Link>
       </div>
      
       <div className="add_btn mt-2 mb-2">
         <Link to="/register_doctor" className="btn btn-primary">Create new Doctor Account</Link>
       </div>
 
       <div className="add_btn mt-2 mb-2">
         <Link to="/appointments" className="btn btn-primary">See list of Appointments</Link>
       </div>
 
       <br></br>
           <h4>List of Doctors</h4>
       <br></br>
      
       <table className="table">
         <thead>
           <tr className="table-dark">
               <th scope="col">id</th>
               <th scope="col">Name</th>
               <th scope="col">Date Of Birth</th>
               <th scope="col">Gender</th>
               <th scope="col">Qualification</th>
               <th scope="col">Specialization</th>
               <th scope="col">Available Slot 1</th>
               <th scope="col">Available Slot 2</th>
               <th scope="col">Available Slot 3</th>
               <th scope="col">Office Room</th>
               <th scope="col">Mobile Number</th>
               <th scope="col">Email</th>
               <th scope="col"></th>
           </tr>
         </thead>
 
         <tbody>
           {
             doctors.map((doctor) => (
              
                 <>
                       <tr>
                           <th scope="row">{doctor.id_doctor}</th>
                           <td>{doctor.name}</td>
                           <td>{doctor.dateofbirth}</td>
                           <td>{doctor.gender}</td>
                           <td>{doctor.qualification}</td>
                           <td>{doctor.specialization}</td>
                           <td>{doctor.slottime_1}<Link to={`/create_appointment/&${doctor.id_doctor}&${doctor.name}&${doctor.slottime_1}&${doctor.office_number}/choose_date`}> <button className="btn btn-success">Create Appointment</button></Link></td>
                           <td>{doctor.slottime_2}<Link to={`/create_appointment/&${doctor.id_doctor}&${doctor.name}&${doctor.slottime_2}&${doctor.office_number}/choose_date`}> <button className="btn btn-success">Create Appointment</button></Link></td>
                           <td>{doctor.slottime_3}<Link to={`/create_appointment/&${doctor.id_doctor}&${doctor.name}&${doctor.slottime_3}&${doctor.office_number}/choose_date`}> <button className="btn btn-success">Create Appointment</button></Link></td>
                           <td>{doctor.office_number}</td>
                           <td>{doctor.mobilenumber}</td>
                           <td>{doctor.email}</td>
                       </tr>
                   </>
              
             )
           )}
         </tbody>
       </table>
 
 
     </div>
   </div>
 </>
 )
}
 
export default Scheduler;
