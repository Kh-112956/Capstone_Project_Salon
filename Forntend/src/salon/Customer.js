import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function Customer() {
    const [id, setid] = useState("")
    const [lname, setlname] = useState("")
    const [fname, setfname] = useState("")
    const [phone, setphone] = useState("")
    const [state, setstate] = useState("")
    const [City, setCity] = useState("")
    const [Gender, setGender] = useState("")
    const [myCustemor, setMyCustemor] = useState({ id: "", lname: "",fname:"", phone: "", state: "", Gender: "", city: ""  })

    function handelid(event) {
        setid((event.target.value));
    }
    function handellname(event) {
        setlname((event.target.value));
    }
    function handelfname(event) {
        setfname((event.target.value));
    }
    function handelphone(event) {
        setphone((event.target.value));
    }
    function handelstate(event) {
        setstate((event.target.value));
    }
    function handelGender(event) {
        setGender((event.target.value));
    }
    function handelcity(event) {
        setCity((event.target.value));
    }

    let nuwCustomer = {
        id: id,
        lname: lname,
        fname: fname,
        City: City,
        phone: phone,
        state: state,
        Gender: Gender,
    }
    useEffect(() => {
        axios.get("api/customer")
            .then(response => {
                console.log(response.data)
                setMyCustemor(response.data[0])
            })
        return () => { }
    }, [])
    function handleClick() {
        axios({
            method: 'post',
            url: 'api/customer/add',
            data: nuwCustomer
        });
    }
    return (
        <div>
            <button onClick={handleClick} >Customer </button>
            <form className='Patient' >
                <div class="log">
                    <hr />
                    <br></br>
                    <label > Id Customer:</label>
                    <dr />
                    <input
                        type="number"
                        placeholder=""
                        name="Id"
                        onChange={handelid} />
                        <br></br>
                    <label > lname :</label>
                    <dr />
                    <input
                        type="text"
                        placeholder=""
                        name="lname"
                        onChange={handellname} />
                        <br></br>
                          <label > fname :</label>
                    <dr />
                    <input
                        type="text"
                        placeholder=""
                        name="name"
                        onChange={handelfname} />
                        <br></br>
                    <label > phone :</label>
                    <dr />
                    <input
                        type="number"
                        placeholder=""
                        name="phone"
                        onChange={handelphone} />
                        <br></br>
                    <label > state:</label>
                    <dr />
                    <input
                        type="text"
                        placeholder=""
                        name="state"
                        onChange={handelstate} />
                    <br></br>
                    <label > Gender</label>
                    <dr />
                    <input
                        type="text"
                        placeholder=""
                        name=""
                        onChange={handelGender} />
                   <br></br>
                    <label > City</label>
                    <dr />
                    <input
                        type="text"
                        placeholder=""
                        name="city"
                        onChange={handelcity} />
                </div>
            </form>
            {/* <h2>my employee details are:  {JSON.stringify(myEmployee)}</h2>
      <button onClick={handleClick}>Post</button>
      <button onClick={handle1}>delete</button> */}
            <br />
        </div>
    )
}