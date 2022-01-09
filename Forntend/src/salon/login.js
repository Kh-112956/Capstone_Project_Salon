import React,{useState,useContext} from 'react'
import { useHistory } from 'react-router-dom';
import { Route, Redirect } from 'react-router'
import { useNavigate } from 'react-router-dom';

// import { Form, Button } from 'react-bootstrap'
import { AuthContext } from './AuthContext';
import axios from "axios"
// import './styleForm.css'
export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   /*  const authContext = useContext(AuthContext) */
   function login(e) {
    let employee = {
        email: email,
        password: password,
        
    
    }
    e.preventDefault();
    console.log({ email, password });
        //Send Api request to validate data and get token
        axios({
            method: "get",
            url: 'api/employee/login',
            params: { email: email , password: password}
        }).then((response)=> {alert(response.data)
            if(response.data!="invalid credentials"){
                navigate("/home");
            }
        });
        
    }
    return (
        <div>
            <div class="pen-title">
                <h1>Welcome</h1>
            </div>
            <div class="container">
                <div class="card"></div>
                <div class="card">
                    <h1 class="title">Login</h1>
                    <form>
                        <div class="input-container">
                            <label for="#{label}">Email: </label>
                            <input type="email" id="#{label}" required="required" onChange={ e=>setEmail(e.target.value)}/>
                            
                            <div class="bar"></div>
                        </div>
                        <div class="input-container">
                            <label for="#{label}">Password:</label>
                            <input type="password" id="#{label}" required="required" onChange={e => setPassword(e.target.value)}/>

                            <div class="bar"></div>
                        </div>
                        <div class="button-container">
                            <button class="A1" onClick={login}><span>Go</span></button>
                        </div>
                        <div class="footer"><a href="#">Forgot your password?</a></div>
                    </form>
                </div>
              
            </div>
        
        </div>
    )
}