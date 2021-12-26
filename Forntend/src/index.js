/*import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Customer from "./salon/Customer";
import "./index.css";
import Homepage from "./salon/Homepage";
import Service from "./salon/Service";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}/>
      <Route path="Homepage" element={<Homepage />} />
        <Route path="Customer" element={<Customer/>}/> 
       <Route path="Service" element={<Service/>}/> 
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
ReactDOM.render(
    <App />
  ,
  document.getElementById('root')
);