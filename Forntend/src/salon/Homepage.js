
import React,{useEffect,useState} from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

// import { Form, Button } from 'react-bootstrap'
import { AuthContext } from './AuthContext';

// import './styleForm.css'
export default function Homepage() {
    const navigate = useNavigate();
    const [allServices, setAllServices] = useState({ id: "", sname: "",price:"" })

    useEffect(() => {
        window.history.replaceState(null, '', '');
      }, []);
    useEffect(() => {
        axios.get("api/service")
        .then(response => {
            setAllServices(response.data)
           
        }) 
       
    },[] )
    
        function gotoservice (event,id){
            event.preventDefault();
            navigate(`../oneservice/${id}`);
            console.log(id)
        }
    
    return (
        <div>
            <div class="pen-title">
                <h1>Welcome To Salon</h1>
            </div>
            <h2>Our Services</h2>
           
<table >
<tr>
  <td style={{border:"1px  solid black"}} >Service name </td>
  <td  style={{border:"1px  solid black"}} > Price </td>
  <td  style={{border:"1px  solid black"}} > Material </td>
  {/* <td  style={{border:"1px  solid black"}} > Photo </td> */}
  <td  style={{border:"1px  solid black"}} >  Make an appointment</td>

</tr>
{allServices.length ? allServices.map((service, i) => {     
                          
                          // Return the element. Also pass key     
                          return ( 
                          
                            <tr>
                            <td  style={{border:"1px  solid black"}} >{service.sname} </td>
                            <td  style={{border:"1px  solid black"}} >{service.price}</td>
                            <td  style={{border:"1px  solid black"}} >{service.materials}</td>
                            <td  style={{border:"1px  solid black"}} >  <img src={service.photo} width="150" height="200"/> </td>
                            <td  style={{border:"1px  solid black"}} >   <button onClick={(event) => gotoservice(event,service.id)}>Show</button></td>
                          </tr>
                          ) 
                       }): <h4>null</h4>}

</table>
<a href="/login">Login as Employee</a>
        </div>
    )
}