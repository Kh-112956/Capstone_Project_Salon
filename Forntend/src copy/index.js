import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import App from './App';
import Employee from "./salon/Employee";
import Appointment from "./salon/Appointment";
import Customer from "./salon/Customer"
//import login from "./routes/login";
import Homepage from "./salon/Homepage";
//import pemissionr from "./salon/pemissionr";
import Service from "./salon/Service";
import "./index.css";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {" "}
      <Route path="Homepage" element={<Homepage />} />
      <Route path="/" element={<App />}/>
        <Route path="Employee" element={<Employee />}/>
        <Route path="service" element={<Service/>} />
        <Route path="customer" element={<Customer/>} />
          <Route path=":appointment" element={<Appointment/>} />
        
        {/* <Route path="id" element={<login />}> */}

    
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
