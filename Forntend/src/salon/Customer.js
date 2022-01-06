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
    let [del,setdel]= useState("") 
    const [myCustemor, setMyCustemor] = useState({ id: "", lname: "",fname:"", phone: "", state: "", gender: "", city: ""  })
    
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
    function handleClickDel3(event)  {
        setdel(event.target.value)
        console.log("del in handleclick "+del)
    }
    let nuwCustomer = {
        id: id,
        lname: lname,
        fname: fname,
        city: City,
        phone: phone,
        state: state,
        gender: Gender,
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
        console.log(nuwCustomer)
        axios({
            method: 'post',
            url: 'api/customer/add',
            data: nuwCustomer
        });
    }
    function handleClickDel2(){
       console.log("del "+del)
        axios({
          method:'delete',
          url:`/api/customer/delete/${del}`,
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
            <input type="text" id="id" name="id" onChange={handleClickDel3} />
         <br />
         <input type="submit" value="Delete2" onClick={handleClickDel2}></input>







             {/* <h2>my details are:  {JSON.stringify(myCustemor)}</h2>
      <button onClick={handleClick}>Post</button>
      { <button onClick={handle1}>delete</button>  } */}
            <br />
     </div>
    )
}