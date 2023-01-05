import React, { useState, useEffect} from 'react'
import axios from "axios";
import { Link, useLocation} from "react-router-dom";
 
 
const ChooseDate = () => {
   const [dates, setDates] = useState([]);
  
   useEffect(() => {
       const fetchAllDates = async () => {
         try {
           const res = await axios.get("http://localhost:8800/create_appointment/:id/choose_date");
           setDates(res.data);
         } catch (err) {
           console.log(err);
         }
       };
       fetchAllDates();
   }, []);
 
 
 
   const location = useLocation();
   const ID =location.pathname.split("/")[2];
   //console.log(ID)
 
  
  
 return (
     <>
   <div className="mt-5">
     <div className="container">
       <br></br>
           <h6>Pick the Date for the Appointment: </h6>
       <br></br>
           <table className="table">
               <thead>
                   <tr className="table-dark">
                       <th scope="col">Date</th>
                       <th scope="col">Availability</th>
                       <th scope="col"> </th>
                   </tr>
               </thead>
 
               <tbody>
                   {
                   dates.map((date) => (
                              
                       <>
                           <tr>
                               <th scope="row"> {date.date}</th>
                               <td>{date.availability}</td>
                               <td><Link to={`/create_appointment/`+ID+`&${date.date}/choose_patient`}> <button className="btn btn-success" >Pick Date</button></Link></td>
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
 
export default ChooseDate;
