
/*import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function App() {
  const [Mycustomer, setMyCustomer] = useState({ Id: "", lname: "" ,fname:"" ,phone:"",state:"",Gender:"",city:""})//
  
  useEffect(() => {
    axios.get("api/customer")
      .then(response => {
        console.log(response.data)
        setMyCustomer(response.data[1])
      })
    return () => { }
  }, [])
  function handleClick() {
    axios({
      method: 'post',
      url: 'api/customer/add',
      data: {
        id: 5,
        name: "sara",
        email: "ffdfg@gfgbn",
        phon:1234567890
      }
    });
  }
  function handleClickDel() {
    axios({
      method: 'delete',
      url: "/api/customer/delete/4"
    })
  }
  return (
    <div>
      <br></br>
      <br></br>
      <h2>my customer details are:  {JSON.stringify(Mycustomer)}</h2>
      <button onClick={handleClick}>Post to Spring</button><br></br>
      <button onClick={handleClickDel}>Delete to Spring</button>
    </div>
  )
}
*/
import React ,{Link}from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Employee from "./routes/Employee";
// import login from "./routes/login";
// import Homepage from "./routes/Homepage";
// import pemissionr from "./routes/pemissionr";
// import Service from "./routes/Service";
// import "./index.css";

//import React from 'react'

export default function App() {
  return (
    <div>
      
      <h1>3wsxdsmfnskfksf</h1>
    </div>
  )
}













