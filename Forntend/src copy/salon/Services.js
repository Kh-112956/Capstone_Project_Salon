
import React,{useEffect,useState} from "react"
import axios from "axios"
export default function Service() {
    const [servicesId, setservicesId] = useState("")
    const [name, setname] = useState("")
    const [price, setprice] = useState("")
    const [myService, setMyServiice] = useState({ servicesId: "", name: "",price:"" })
    let [del,setdel]= useState("") 
    //const[del,setdel]= useState("") 
    function handelservicesId(event) {
        setservicesId((event.target.value));
    }
    function handelname(event) {
        setname((event.target.value));
    }
    function handelprice(event) {
        setprice((event.target.value));
    }
    function handleClickDel3(event)  {
        setdel((del= event.target.value))
        console.log("del in handleclick "+del)
    }
    // function handleClickDel3(event)  {
    //     setdel((del= event.target.value))
    //     console.log("del in handleclick "+del)
    let nuwService = {
        servicesId: servicesId,
        name: name,
        price: price,
      
    }
    useEffect(() => {
        axios.get("api/service")
        .then(response => {
            console.log(response.data)
        }) 
        return () => {}
    }, )
    function handleClick() {
        axios({
            method: 'post',
            url: 'api/service/add',
            data: nuwService
        });
    }
    // function handleClickDel2(){
       
    //     axios({
    //       method:'delete',
    //       url:`/api/customer/delete/${del}`,
    //     });}
    function handleClickDel2(){
        console.log("del "+del)
         axios({
           method:'delete',
           url:`/api/services/delete/${del}`,
         });
     }
    return (
        <div>
        <button onClick={handleClick} >Service </button>
        <form className='Patient' >
            <div class="log">
                <hr />
                <br></br>
                <label >  servicesId:</label>
                <dr />
                <input
                    type="number"
                    placeholder=""
                    name="Id"
                    onChange={handelservicesId} />
                    <br></br>
                <label > name :</label>
                <dr />
                <input
                    type="text"
                    placeholder=""
                    name="name"
                    onChange={handelname} />
                    <br></br>
                      <label > price :</label>
                <dr />
                <input
                    type="number"
                    placeholder=""
                    name="price"
                    onChange={handelprice} />
                    <br></br>
            </div>
        </form>
        <input type="text" id="id" name="id" onChange={handleClickDel3} />
         <br />
         <input type="submit" value="Delete2" onClick={handleClickDel2}></input>

        {/* <input type="text" id="id" name="id" onChange={handleClickDel3} />
         <br />
         <input type="submit" value="Delete2" onClick={handleClickDel2}></input> */}

        {/*<h2>my customer details are:  {JSON.stringify(mycustomer)}</h2>
<button onClick={handleClick}>Post</button>
    <button onClick={handleClick}>delete</button>*/}
        <br />
    </div>
)
}
