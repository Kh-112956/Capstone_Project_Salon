import React,{useState,useContext} from 'react'
import { Form, Button } from 'react-bootstrap'
import { AuthContext } from './AuthContext';
import './styleForm.css'
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const authContext = useContext(AuthContext)
    function login(e) {
        e.preventDefault();
        console.log({ email, password });
        //Send Api request to validate data and get token
        if (password=='123') {
            const token = "abc";
            localStorage.setItem('token', token)
            localStorage.setItem('email', email)
            authContext.setAuth({token,email})
        } else {
            alert("Wrong details")
        }
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
                            <input type="email" id="#{label}" required="required" onChange={ e=>setEmail(e.target.value)}/>
                            <label for="#{label}">Username</label>
                            <div class="bar"></div>
                        </div>
                        <div class="input-container">
                            <input type="password" id="#{label}" required="required" onChange={e => setPassword(e.target.value)}/>
                            <label for="#{label}">Password</label>
                            <div class="bar"></div>
                        </div>
                        <div class="button-container">
                            <button onClick={login}><span>Go</span></button>
                        </div>
                        <div class="footer"><a href="#">Forgot your password?</a></div>
                    </form>
                </div>
              
            </div>
        
        </div>
    )
}