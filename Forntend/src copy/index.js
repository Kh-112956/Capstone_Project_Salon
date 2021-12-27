import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Customer from "./salon/Customer";
import "./index.css";
import Homepage from "./salon/Homepage";
import Appointment from "./salon/Appointment";
import AuthContex from "./salon/AuthContext";
import Employee from "./salon/Employee";
import Header from "./salon/Header";
import login from "./salon/login";
import Service from './salon/Services';
import  payment from "./salon/payment";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}/>
      <Route path="Homepage" element={<Homepage />} />
        <Route path="Customer" element={<Customer/>}/> 
       <Route path="Services" element={<Service/>}/> 
       <Route path="Appointment" element={<Service/>}/> 
       <Route path="AuthContext" element={<AuthContex/>}/> 
       <Route path="Employee" element={<Employee/>}/> 
       <Route path="Header" element={<Header/>}/> 
       <Route path="login" element={<login/>}/> 
       <Route path="payment" element={<payment/>}/> 
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
/*import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Customer from "./salon/Customer";
import "./index.css";
import Homepage from "./salon/Homepage";
import Homepage from "./salon/Services";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}/>
      <Route path="Homepage" element={<Homepage />} />
        <Route path="Customer" element={<Customer/>}/> 
        <Route path="Services" element={<Services/>}/> 
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);*/