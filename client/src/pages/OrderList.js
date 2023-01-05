import React, { useState, useEffect} from 'react'
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
 
 
const Orderlist = () => {
   const [orders, setOrders] = useState([]);
  
   useEffect(() => {
       const fetchAllOrders = async () => {
         try {
           const res = await axios.get("http://localhost:8800/orderlist/:id");
           setOrders(res.data);
         } catch (err) {
           console.log(err);
         }
       };
       fetchAllOrders();
   }, []);
 
   const location = useLocation();
 
   const PatientID=location.pathname.split("/")[2];
  
  
return (
  <>
<div className="mt-5">
  <div className="container">
    <br></br>
        <h4>List of Medicine Orders</h4>
    <br></br>
        <div className="row">
            <div>
                    {
                      orders.map((order) => (
                        <>
                          <div className="card"> 
                            <br></br>
                            Order Number : {order.id_order}
                            <br></br>
                            Patient ID: {order.patient_id}
                            <br></br>
                            Medicine : {order.medicine_name_1}
                            <br></br>
                            Quantity : {order.quantity_1} 
                            <div></div>
                            Medicine : {order.medicine_name_2}
                            <br></br>
                            Quantity : {order.quantity_2} 
                            <div></div>
                            Medicine : {order.medicine_name_3}
                            <br></br>
                            Quantity : {order.quantity_3} 
                            <div></div>
                            Medicine : {order.medicine_name_4}
                            <br></br>
                            Quantity : {order.quantity_4}
                            <div></div>
                            Medicine : {order.medicine_name_5}
                            <br></br>
                            Quantity : {order.quantity_5} 
                            <div></div>
                         
                          </div>
                        </>
                )
                    )}
            </div>
         
        </div>
       
    <br></br>
           <Link to={`/allorders`}>Back</Link>

  </div>
</div>
</>
)
}
 
export default Orderlist;
