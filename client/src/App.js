import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
import Home from "./pages/Home";
import RegisterQuestion from "./pages/RegisterQuestion";
import LoginQuestion from "./pages/LoginQuestion";
import Scheduler from "./pages/Scheduler";
import RegisterDoctor from './pages/RegisterDoctor';
import RegisterPatient from './pages/RegisterPatient';
 
import CreateAppointment from './pages/CreateAppointment';
import ChoosePatient from "./pages/ChoosePatient";
import ChooseDate from "./pages/ChooseDate";
import Appointments from "./pages/Appointments";
import AppointmentDetail from "./pages/AppointmentDetail";
 
import PatientPortal from "./pages/PatientPortal";
import DoctorPortal from "./pages/DoctorPortal";
import PharmacistPortal from "./pages/PharmacistPortal";
 
import CreateMedicine from './pages/CreateMedicine';
import OrderMore from './pages/OrderMore';
import MedicineOrder from './pages/MedicineOrder';
import OrderList from './pages/OrderList';
import AllOrders from './pages/AllOrders';
import Order from './pages/Order';
import Test from "./pages/Test";
import "./style.css";
 
 
function App() {
 return (
   <>
    
     <div className="App">
       <BrowserRouter>
         <Routes>
          
           <Route path="/" element={<Home/>} />
           <Route path="/register_question" element={<RegisterQuestion/>} />
           <Route path="/login_question" element={<LoginQuestion/>} />
           <Route path="/scheduler" element={<Scheduler/>} />
 
           <Route path="/register_doctor" element={<RegisterDoctor/>} />
           <Route path="/register_patient" element={<RegisterPatient/>} />
 
 
           <Route path="/create_appointment/:id" element={<CreateAppointment/>} />
           <Route path="/create_appointment/:id/choose_patient" element={<ChoosePatient/>} />
           <Route path="/create_appointment/:id/choose_date" element={<ChooseDate/>} />
 
           <Route path="/appointments" element={<Appointments/>} />
           <Route path="/updatebooking/:id" element={<Appointments/>} />
           <Route path="/appointment_detail/:id" element={<AppointmentDetail/>} />
           <Route path="/test" element={<Test/>} />
 
           <Route path="/patient_portal/:id" element={<PatientPortal/>} />
           <Route path="/doctor_portal/:id" element={<DoctorPortal/>} />
           <Route path="/pharmacist_portal" element={<PharmacistPortal/>} />
 
           <Route path="/create_medicine" element={<CreateMedicine/>} />
           <Route path="/order_more/:id" element={<OrderMore/>} />
           <Route path="/medicine_order/:id" element={<MedicineOrder/>} />
           <Route path="/orderlist/:id" element={<OrderList/>} />
           <Route path="/allorders" element={<AllOrders/>} />
           <Route path="/order/:id" element={<Order/>} />
          
          
 
         </Routes>
       </BrowserRouter>
     </div>
 
   </>
 );
}
 
export default App;
 
 
 
