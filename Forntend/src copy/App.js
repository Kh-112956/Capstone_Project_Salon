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
}*/
 
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./index.css"
//import { getPatients } from "./data";
function App() {
  // let [User, setUser] = useState(false);
  // let employee = getEmployees();
  // let NewArray = [];
  //   localStorage.setItem("MyNewArray", JSON.stringify(NewArray))
  // localStorage.setItem("MyEmployee", JSON.stringify(employee))
  // console.log(JSON.parse(localStorage.getItem("Myemployee")))
  return (
    <div>
      <h1 id="HeaderName"> </h1>
      <nav id="navPage">
      <Link to="/Homepage">Homepage </Link>|{"      "}
        <Link to="/Employee">Employee</Link>|{"      "}
        <Link to="/Services">services</Link> |{"      "}
        <Link to="/Customer">Customer</Link> |{"      "}
        <Link to="/Header">Header</Link> | {"     "}
        <Link to="/login">login</Link> |{"    "}
        <Link to="/payment">payment</Link>|{"    "}
        <Link to="/AuthContext">AuthContext|</Link>{"    "}
        <Link to="/Appointement">Appointement |</Link>{"    "}
      </nav>
      <Outlet />
    </div>
  );
}
export default App




