import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";
 
const app = express();
app.use(cors());
app.use(express.json());

   
const db = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "Edexcel4234",
 database: "Appointmentslist",
 multipleStatements: true
});
 
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (req, res) => {
   res.json("HOME PAGE");
});
 
//where we can view doctors
app.get("/scheduler", (req, res) => {
 const q = "SELECT * FROM doctors"
  db.query(q, (err, data) => {
   if (err) {
     console.log(err);
     return res.json(err);
   }
   return res.json(data);
 });
});
 
app.post("/scheduler", (req, res) => {
 const q = "INSERT INTO doctors (name, password, dateofbirth, gender, qualification, specialization, slottime_1, slottime_2, slottime_3, office_number, mobilenumber, email) VALUES (?)";
  const values = [
   req.body.name,
   req.body.password,
   req.body.dateofbirth,
   req.body.gender,
   req.body.qualification,
   req.body.specialization,
   req.body.slottime_1,
   req.body.slottime_2,
   req.body.slottime_3,
   req.body.office_number,
   req.body.mobilenumber,
   req.body.email,
];
 
 db.query(q, [values], (err, data) => {
   if (err) return res.send(err);
   return res.json("Doctors displayed successfully");
 });
 
});
 
//register the patients
app.post("/register_patient", (req, res) => {
 const q = "INSERT INTO patients (name, password, dateofbirth, gender, bloodgroup, birthcountry, mobilenumber, email, address, postalcode, url) VALUES (?)";
  const values = [
   req.body.name,
   req.body.password,
   req.body.dateofbirth,
   req.body.gender,
   req.body.bloodgroup,
   req.body.birthcountry,
   req.body.mobilenumber,
   req.body.email,
   req.body.address,
   req.body.postalcode,
   req.body.url,
];
 
 db.query(q, [values], (err, data) => {
   if (err) return res.send(err);
   return res.json("Patient created successfully");
 });
 
});
 
app.get("/create_appointment/:id/choose_patient", (req, res) => {
 const q = "SELECT * FROM patients"
  db.query(q, (err, data) => {
   if (err) {
     console.log(err);
     return res.json(err);
   }
   return res.json(data);
 });
});
 
app.get("/create_appointment/:id/choose_date", (req, res) => {
  const q = "SELECT * FROM dates WHERE availability ='Open for Booking'"
  db.query(q, (err, data) => {
   if (err) {
     console.log(err);
     return res.json(err);
   }
   return res.json(data);
 });
});
 
app.put("/updatebooking/:id", (req, res) => {
 const date = req.params.id
 const q = "UPDATE dates SET `availability`=? WHERE date= ?";
  const values = [
   req.body.availability,
];
 
 db.query(q, [...values,date], (err, data) => {
   if (err) return res.send(err);
   return res.json("Booked successfully");
 });
 
});
 
app.post("/appointments", (req, res) => {
 const q = "INSERT INTO appointments (doctor_name, patient_name, slot_time, office_number, reason, doctors_id_doctor, patients_id_patient, dates_date) VALUES (?)";
  
 const values = [
   req.body.doctor_name,
   req.body.patient_name,
   req.body.slot_time,
   req.body.office_number,
   req.body.reason,
   req.body.doctors_id_doctor,
   req.body.patients_id_patient,
   req.body.dates_date,
 ];
 
 db.query(q, [values], (err, data) => {
   if (err) return res.send(err);
   return res.json("there is an error here");
 });
 
});
 
app.get("/appointments", (req, res) => {
 const q = "SELECT * FROM appointments";
 db.query(q, (err, data) => {
   if (err) {
     console.log(err);
     return res.json(err);
   }
   return res.json(data);
 });
});
 
app.get("/appointment_detail/:id", (req, res) => {
 const appointment_id = req.params.id
 const q = "SELECT * FROM appointments WHERE id_appointment = ?";
  db.query(q, [appointment_id], (err, data) => {
   if (err) {
     console.log(err);
     return res.json(err);
   }
   return res.json(data);
 });
});
 
app.get("/patient_portal/:id", (req, res) => {
 const ID = req.params.id;
 const q = "SELECT * FROM appointments WHERE patients_id_patient = '2'";
  db.query(q, [ID], (err, data) => {
   if (err) {
     console.log(err);
     return res.json(err);
   }
   return res.json(data);
 });
});
 
app.get("/pharmacist_portal", (req, res) => {
 const q = "SELECT * FROM medicines WHERE name != 'No medicine'";
  db.query(q, (err, data) => {
   if (err) {
     console.log(err);
     return res.json(err);
   }
   return res.json(data);
 });
});
 
app.post("/create_medicine", (req, res) => {
 const q = "INSERT INTO medicines (name, purpose, available) VALUES (?)";
  const values = [
   req.body.name,
   req.body.purpose,
   req.body.available,
];
 
 db.query(q, [values], (err, data) => {
   if (err) return res.send(err);
   return res.json("Medicines created successfully");
 });
 
});
 
app.put("/order_more/:id", (req, res) => {
 const medId = req.params.id
 const q = "UPDATE medicines SET `available`=? WHERE id_medicine = ?";
  const values = [
   req.body.available,
];
 
 db.query(q, [...values,medId], (err, data) => {
   if (err) return res.send(err);
   return res.json("Medicines created successfully");
 });
 
});
 
app.put("/order/:id", (req, res) => {
 const Id = req.params.id
 const q = "UPDATE medicines SET `available`=? WHERE id_medicine = ?";
  const values = [
   req.body.available,
];
 
 db.query(q, [...values,Id], (err, data) => {
   if (err) return res.send(err);
   return res.json("Medicine ordered successfully");
 });
 
});
 
app.get("/doctor_portal/:id", (req, res) => {
 const doctor_id = req.params.id
 const q = "SELECT * FROM appointments WHERE doctors_id_doctor = '2'";
  db.query(q, [doctor_id], (err, data) => {
   if (err) {
     console.log(err);
     return res.json(err);
   }
   return res.json(data);
 });
});
 
app.put("/upload_prescription/:id", (req, res) => {
 const patientName = req.params.id
 const q = "UPDATE patients SET `url`=? WHERE patient_name = ?";
  const values = [
   req.body.url,
];
 
 db.query(q, [...values,patientName], (err, data) => {
   if (err) return res.send(err);
   return res.json("Medicines created successfully");
 });
 
});
 
app.get("/medicine_order/:id", (req, res) => {
 const patient_id = req.params.id
 const q = "SELECT * FROM medicines";
  db.query(q, [patient_id], (err, data) => {
   if (err) {
     console.log(err);
     return res.json(err);
   }
   return res.json(data);
 });
});
 
 
app.post("/medicine_order/:id", (req, res) => {
 const q = "INSERT INTO orders (patient_id, notes, medicine_name_1, quantity_1, medicine_name_2, quantity_2, medicine_name_3, quantity_3, medicine_name_4, quantity_4, medicine_name_5, quantity_5 ) VALUES (?)";
  
 const values = [
   req.body.patient_id,
   req.body.notes,
   req.body.medicine_name_1,
   req.body.quantity_1,
   req.body.medicine_name_2,
   req.body.quantity_2,
   req.body.medicine_name_3,
   req.body.quantity_3,
   req.body.medicine_name_4,
   req.body.quantity_4,
   req.body.medicine_name_5,
   req.body.quantity_5,
  
 ];
 
 db.query(q, [values], (err, data) => {
   if (err) return res.send(err);
   return res.json("there is an error here");
 });
 
});
 
app.get("/allorders/:id", (req, res) => {
 const patient_id = req.params.id;
 const q = "SELECT * FROM orders WHERE patient_id = 2"
  db.query(q, [patient_id],(err, data) => {
   if (err) {
     console.log(err);
     return res.json(err);
   }
   return res.json(data);
 });
});
 
app.get("/allorders", (req, res) => {
 const patient_id = req.params.id;
 const q = "SELECT * FROM orders"
  db.query(q, [patient_id],(err, data) => {
   if (err) {
     console.log(err);
     return res.json(err);
   }
   return res.json(data);
 });
});


app.get("/login_question", (req, res) => {
    res.json("Login Question");
 });

 app.get("/register_question", (req, res) => {
    res.json("Register Question");
 });


 
 
 
 
app.listen(8800, () => {
 console.log("Connected to backend.");
});
