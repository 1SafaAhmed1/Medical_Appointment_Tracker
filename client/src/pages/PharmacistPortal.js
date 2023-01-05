import React, { useState, useEffect} from 'react'
import axios from "axios";
import { Link} from "react-router-dom";
 
 
const PharmacistPortal = () => {
   const [medicines, setMedicines] = useState([]);
  
   useEffect(() => {
       const fetchAllMedicines = async () => {
         try {
           const res = await axios.get("http://localhost:8800/pharmacist_portal");
           setMedicines(res.data);
         } catch (err) {
           console.log(err);
         }
       };
       fetchAllMedicines();
   }, []);
 
   console.log(medicines);
 
  
 return (
     <>
   <div className="mt-5">
     <div className="container">
       <div className="add_btn mt-2 mb-2">
         <Link to="/create_medicine" className="btn btn-primary">Add New Medicine type to Inventory</Link>
       </div>
       <div className="add_btn mt-2 mb-2">
         <Link to={`/allorders`} className="btn btn-primary">List of Orders</Link>
       </div>
       <br></br>
           <h6>List of Medicines : </h6>
       <br></br>
           <table className="table">
               <thead>
                   <tr className="table-dark">
                       <th scope="col"> </th>
                       <th scope="col">id</th>
                       <th scope="col">Name</th>
                       <th scope="col">Purpose</th>
                       <th scope="col">Quantity Available</th>
                       <th scope="col"> </th>
                   </tr>
               </thead>
 
               <tbody>
                   {
                   medicines.map((medicine) => (
                              
                       <>
                           <tr>
                               <th scope="row"> </th>
                               <td>{medicine.id_medicine}</td>
                               <td>{medicine.name}</td>
                               <td>{medicine.purpose}</td>
                               <td>{medicine.available}</td>
                               <td><Link to={`/order_more/&${medicine.id_medicine}&${medicine.available}`}> <button className="btn btn-success">Order More</button></Link></td>
                           </tr>
                       </>
                              
                   )
                   )}
               </tbody>
               </table>
 
     </div>
     <br></br>
              <Link to="/login_question">Back</Link>
   </div>
 </>
 )
}
 
export default PharmacistPortal;
