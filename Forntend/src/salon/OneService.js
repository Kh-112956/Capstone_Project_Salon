
import React,{useEffect,useState} from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

// import { Form, Button } from 'react-bootstrap'
import { AuthContext } from './AuthContext';
import { useParams } from "react-router-dom";

// import './styleForm.css'
export default function Oneservice() {
    const [sel1, setSel1] = useState("")
    const params = useParams();
    const navigate = useNavigate();
    const [service, setService] = useState({ id: "", sname: "",price:"" })
    const [employees, setEmployees] = useState({ id: "", email: "",first_name:"", last_name: "", password: ""})

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [gender, setGender] = useState("")
    const [date, setDate] = useState("")

    function handleFname(event) {setFname((event.target.value));}
    function handleLname(event) {setLname((event.target.value));}
    function handlePhone(event) {setPhone((event.target.value));}
    function handleCity(event) {setCity((event.target.value));}
    function handleState(event) {setState((event.target.value));}
    function handleGender(event) {setGender((event.target.value));}
    function handleDate(event) {setDate((event.target.value));}
    function handleAddAppointment(){
        let appointment = {
            fname:fname,
            lname:lname,
            phone:phone,
            city:city,
            state:state,
            gender:gender,
            serviceId: params.id,
            employeeId: sel1, 
            date:date

        }
        axios({
            method: 'post',
            url: `../api/appointment/addcustomer`,
            data: appointment
        });
        console.log(appointment)
    }
    useEffect(() => {
        axios.get(`../api/employee/service/${params.id}`)
        .then(response => {
            setEmployees(response.data)
            console.log(response.data)
        }) 
       
    },[] )
    useEffect(() => {
        axios.get(`../api/service/${params.id}`)
        .then(response => {
            setService(response.data)
           
        }) 
       
    },[] )
    function handleSelect(event){
        setSel1(event.target.value) 
        console.log(sel1)
    }
       
    
    return (<>
        <div>
            
            <h4>Service Name : {service.sname} </h4>
            <h4>Service Price : {service.price} </h4>
            <h4>Service Materials : {service.materials} </h4>

        </div>
        <h1>Make appointment</h1>

        <br></br>
        <label>Select employee : </label>
        <select onChange={handleSelect}>
                <option value="">--Please choose an option--</option>
                {employees.length ? employees.map((emp, i) => {     
                          
                          // Return the element. Also pass key     
                          return ( <option value={emp.id}>{emp.firstName}</option>) 
                       }): <h4>null</h4>}
                
               
                
        </select>
        <br></br>
        <label>Customer first name : </label>
        <input type="text"  placeholder="first name" name="first name" onChange={handleFname} />
        <br></br>
        <label>Customer Last name : </label>
        <input type="text"  placeholder="Last name" name="Last name" onChange={handleLname} />
        <br></br>
        <label>Customer phone number : </label>
        <input type="text"  placeholder="phone number" name="first name" onChange={handlePhone} />
        <br></br>
        <label>Customer State : </label>
        <input type="text"  placeholder="State" name="State" onChange={handleState} />
        <br></br>
        <label>Customer City : </label>
        <input type="text"  placeholder="City" name="City" onChange={handleCity} />
        <br></br>
        <label>Select Gender: </label>
        <select onChange={handleGender}>
                <option value="">--Please choose Gender--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
        </select>
        <br></br>
        <label>Appointment Date : </label>
        <input type="text"  placeholder="Date" name="Date" onChange={handleDate} />
        <br></br>
        <button onClick={handleAddAppointment} >Make Appointment </button>

        
        </>
    )
}