import React, { useState, useEffect} from 'react'
import axios from "axios";
import { Link, useLocation} from "react-router-dom";
 
 
const ChoosePatient = () => {
   const [patients, setPatients] = useState([]);
  
   useEffect(() => {
       const fetchAllPatients = async () => {
         try {
           const res = await axios.get("http://localhost:8800/create_appointment/:id/choose_patient");
           setPatients(res.data);
         } catch (err) {
           console.log(err);
         }
       };
       fetchAllPatients();
   }, []);
 
   console.log(patients);
 
   const location = useLocation();
   const ID =location.pathname.split("/")[2];
  
 
  
  
 return (
     <>
   <div className="mt-5">
     <div className="container">
       <br></br>
           <h6>Pick the Patient for the Appointment: </h6>
       <br></br>
           <table className="table">
               <thead>
                   <tr className="table-dark">
                       <th scope="col"> </th>
                       <th scope="col">id</th>
                       <th scope="col">Name</th>
                       <th scope="col">Date Of Birth</th>
                       <th scope="col">Gender</th>
                       <th scope="col">Bloodgroup</th>
                       <th scope="col">Country of Origin</th>
                       <th scope="col">Mobile Number</th>
                       <th scope="col">Email</th>
                       <th scope="col">Home Address</th>
                       <th scope="col">Postal Code</th>
                       <th scope="col"> </th>
                   </tr>
               </thead>
 
               <tbody>
                   {
                   patients.map((patient) => (
                              
                       <>
                           <tr>
                               <th scope="row"> </th>
                               <td>{patient.id_patient}</td>
                               <td>{patient.name}</td>
                               <td>{patient.dateofbirth}</td>
                               <td>{patient.gender}</td>
                               <td>{patient.bloodgroup}</td>
                               <td>{patient.birthcountry}</td>
                               <td>{patient.mobilenumber}</td>
                               <td>{patient.email}</td>
                               <td>{patient.address}</td>
                               <td>{patient.postalcode}</td>
                               <td><Link to={`/create_appointment/`+ID+`&${patient.id_patient}&${patient.name}`}> <button className="btn btn-success">Pick Patient</button></Link></td>
                           </tr>
                       </>
                              
                   )
                   )}
               </tbody>
               </table>
 
     </div>
     <br></br>
              <Link to="/scheduler">Back</Link>
   </div>
 </>
 )
}
 
export default ChoosePatient;
 
