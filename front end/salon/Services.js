
import React,{useEffect,useState} from "react"
import axios from "axios"
export default function Service() {
    const [servicesId, setservicesId] = useState("")
    const [sname, setsname] = useState("")
    const [price, setprice] = useState("")
    const [materials, setmaterials] = useState("")
    const [img, setimg] = useState("")
    const [selectedFile, setSelectedFile] = useState("")
    const[del,setdel]= useState("") 
    function handelservicesId(event) {
         
        setservicesId((event.target.value));
    }
    function handelname(event) {
        setsname((event.target.value));
    }
    function handleMaterials(event) {
        setmaterials((event.target.value));
    }
    function handelprice(event) {
        setprice((event.target.value));
    }

    function handleImg(event) {
        setimg((event.target.value));
    }
    function handleClickDel3(event)  {
         setdel(event.target.value)
         console.log(del)  ;
         console.log("del in handleclick "+del) 
        }

        function onFileChange(event) {
            setSelectedFile(event.target.files[0]); 
          }

    let nuwService = {
        id: servicesId,
        sname: sname,
        price: price,
        materials: materials,
        photo: img
    }
    useEffect(() => {
        axios.get("api/service")
        .then(response => {
            console.log(response.data)
        }) 
        return () => {}
    }, )
    function handleClick(event) {
        console.log(nuwService)
        axios({
            method: 'post',
            url: 'api/service/add',
            data: nuwService
        });

        

    }
     function handleClickDel2(){
        console.log("del",del)
         axios({
           method:'delete',
           url:`/api/service/delete/${del}`,
         });} 
          

    return (
        <div class="import1">
            <main style={{ padding: "1rem 0" }}>
        {/* <button onClick={handleClick} >Service </button> */}
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

                    <label > Materials :</label>
                <dr />
                <input
                    type="text"
                    placeholder=""
                    name="price"
                    onChange={handleMaterials} />
                    <br></br>
                    <br></br>
          
          <label > Choose photo:</label>
          <input type="text" onChange={handleImg} />
          <br></br>
            </div>
        </form>

        <input type="text" id="id" name="id" onChange={handleClickDel3} />
         <br />
         <input type="submit" value="Delete2" onClick={handleClickDel2}></input>

         <button class ="buton" onClick={handleClick} > add </button>

         </main>
    </div>
)
}
