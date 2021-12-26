
import React,{UseEffect,useState} from "react"
import axios from "axios"
export default function Service() {
    const [id, setid] = useState("")
    const [name, setname] = useState("")
    const [price, setprice] = useState("")
    const [myService, setMyServiice] = useState({ id: "", name: "",price:"" })
}
    function handelid(event) {
        setid((event.target.value));
    }
    function handelname(event) {
        setname((event.target.value));
    }
    function handelprice(event) {
        setprice((event.target.value));
    }
    let nuwService = {
        id: id,
        name: name,
        price: price,
      
    }
    useEffect(() => {
        axios.get("api/service")
        .then(response => {
            console.log(response.data)
        }) 
        return () => {}
    }, [])
    function handleClick() {
        axios({
            method: 'post',
            url: 'api/service/add',
            data: nuwService
        });
    }
    return (
        <div>
        <button onClick={handleClick} >Service </button>
        <form className='Patient' >
            <div class="log">
                <hr />
                <br></br>
                <label > Id Service:</label>
                <dr />
                <input
                    type="number"
                    placeholder=""
                    name="Id"
                    onChange={handelid} />
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
        {/* <h2>my employee details are:  {JSON.stringify(myEmployee)}</h2>
  <button onClick={handleClick}>Post</button>
  <button onClick={handle1}>delete</button> */}
        <br />
    </div>
)
}

    