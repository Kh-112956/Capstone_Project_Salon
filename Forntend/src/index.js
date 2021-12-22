import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Customer from "./salon/Customer";
import "./index.css";
import Homepage from "./salon/Homepage";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}/>
      <Route path="Homepage" element={<Homepage />} />
        <Route path="Customer" element={<Customer/>}/> 
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);