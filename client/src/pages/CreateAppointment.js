import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
 
 
const CreateAppointment = () => {
 
   const [appointments, setAppointments] = useState({
       doctor_name: "",
       patient_name: "",
       slot_time: "",
       office_number: "",
       reason: "",
       doctors_id_doctor: "",
       patients_id_patient: "",
       dates_date: "",
   });
 
   const [dates, setDates] = useState({
       availability: 0,
   });
 
 
   const [error,setError] = useState(false)
 
   const navigate = useNavigate();
   const location = useLocation();
 
   const Date = location.pathname.split("&")[5];
  
  
 
   const handleChange = (e) => {
       setAppointments((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };
 
   const fetchDoctorId = (e) => {
       setAppointments((prev) => ({ ...prev, doctors_id_doctor: e.target.value }));
   };
   const fetchDoctorName = (e) => {
       setAppointments((prev) => ({ ...prev, doctor_name: e.target.value }));
   };
   const fetchPatientID = (e) => {
       setAppointments((prev) => ({ ...prev, patients_id_patient: e.target.value }));
   };
   const fetchPatientName = (e) => {
       setAppointments((prev) => ({ ...prev, patient_name: e.target.value }));
   };
   const fetchOfficeNumber = (e) => {
       setAppointments((prev) => ({ ...prev, office_number: e.target.value }));
   };
   const fetchDate= (e) => {
       setAppointments((prev) => ({ ...prev, dates_date: e.target.value }));
   };
   const fetchSlottime= (e) => {
       setAppointments((prev) => ({ ...prev, slot_time: e.target.value }));
   };
   const UpdateAvailabilty= (e) => {
       setDates((prev) => ({ ...prev, availability: e.target.value }));
   };
 
  
 
   const handleClick = async (e) => {
       e.preventDefault();
       try {
         await axios.post("http://localhost:8800/appointments", appointments);
         navigate("/scheduler");
       } catch (err) {
         console.log(err);
         setError(true)
       }
       try {
           await axios.put("http://localhost:8800/updatebooking/"+Date, dates);
           navigate("/scheduler");
         } catch (err) {
           console.log(err);
           setError(true)
         }
       navigate('/appointments');
   };
 
 
  
   return (
       <>
           <div className="mt-5">
              
               <div className= "container">
                       <br></br>
                           <h4>Create New Appointment</h4>
                       <br></br>
                   <form className="mt-4">
                       <div className="row">
                          
                               <div className="mb-3 col-lg-6 col-md-6 col-12" >
                               <label for="exampleInputPassword1" class="form-label">Reason of Visit</label>
                                   <input
                                       type="textarea"
                                       placeholder=""
                                       onChange={handleChange}
                                       name="reason"
                                       class="form-control" id="exampleInputPassword1"
                                       required>
                                   </input>
                               </div>
                               <div>
                               </div>
 
                               <div className="mb-3 col-lg-6 col-md-6 col-12" >
                               <label for="doctorsId" class="form-label">Doctor's ID is :   {location.pathname.split("&")[1]}</label>
                                   &emsp;
                                   <input
                                           type="checkbox"
                                           onChange={fetchDoctorId}
                                           value={location.pathname.split("&")[1]}
                                           name="doctors_id_doctor"
                                   /> Confirm
                                   <br></br>
                               </div>
                               <div className="mb-3 col-lg-6 col-md-6 col-12" >
                               <label for="exampleInputPassword1" class="form-label">Doctor's Name is :   {location.pathname.split("&")[2]}</label>
                                   &emsp;
                                   <input
                                           type="checkbox"
                                           onChange={fetchDoctorName}
                                           value={location.pathname.split("&")[2]}
                                           name="doctor_name"
                                   /> Confirm
                                   <br></br>
                               </div>
                               <div className="mb-3 col-lg-6 col-md-6 col-12" >
                               <label for="exampleInputPassword1" class="form-label">Patient's ID is :   {location.pathname.split("&")[6]}</label>
                                   &emsp;
                                   <input
                                           type="checkbox"
                                           onChange={fetchPatientID}
                                           value={location.pathname.split("&")[6]}
                                           name="patients_id_patient"
                                   /> Confirm
                                   <br></br>
                               </div>
                               <div className="mb-3 col-lg-6 col-md-6 col-12" >
                               <label for="exampleInputPassword1" class="form-label">Patient's Name is :   {location.pathname.split("&")[7]}</label>
                                   &emsp;
                                   <input
                                           type="checkbox" 
                                           onChange={fetchPatientName}
                                           value={location.pathname.split("&")[7]}
                                           name="patient_name"
                                   /> Confirm
                                   <br></br>
                               </div>
                               <div className="mb-3 col-lg-6 col-md-6 col-12" >
                               <label for="exampleInputPassword1" class="form-label">Doctor's Office Number is :   {location.pathname.split("&")[4]}</label>
                                   &emsp;
                                   <input
                                           type="checkbox"
                                           onChange={fetchOfficeNumber}
                                           value={location.pathname.split("&")[4]}
                                           name="office_number"
                                   /> Confirm
                                   <br></br>
                               </div>
                               <div className="mb-3 col-lg-6 col-md-6 col-12" >
                               <label for="exampleInputPassword1" class="form-label">Date of Appointment is :   {location.pathname.split("&")[5]}</label>
                                   &emsp;
                                   <input
                                           type="checkbox"
                                           onChange={fetchDate}
                                           value={location.pathname.split("&")[5]}
                                           name="dates_date"
                                   /> Confirm
                                   <br></br>
                               </div>
                               <div className="mb-3 col-lg-6 col-md-6 col-12" >
                               <label for="exampleInputPassword1" class="form-label">Time of Appointment is :   {(location.pathname.split("&")[3]).replace(/%20/g, " ")}</label>
                                   &emsp;
                                   <input
                                           type="checkbox"
                                           onChange={fetchSlottime}
                                           value={location.pathname.split("&")[3].replace(/%20/g, " ")}
                                           name="slot_time"
                                   /> Confirm
                                   <br></br>
                               </div>
                               <div className="mb-3 col-lg-6 col-md-6 col-12" >
                               <label for="exampleInputPassword1" class="form-label"> Confirm Booking : </label>
                                   &emsp;
                                   <input
                                           type="checkbox"
                                           onChange={UpdateAvailabilty}
                                           value="Booked"
                                           name="availability"
                                   /> Confirm
                                   <br></br>
                               </div>
                              
                           <br></br>
                           <button onClick={handleClick} class="btn btn-primary">Create Appointment</button>
                           {error && "Something went wrong!"}
                       </div>
                      
                   </form>
               </div>
               <br></br>
              <Link to="/scheduler">Back</Link>
           </div>
          
       </>
   )
 
};
 
export default CreateAppointment
