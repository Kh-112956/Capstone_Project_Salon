
// import React, {useEffect,useState}from 'react'
// import axios from 'axios'

// // export default function Emp() {
    
// //     const [id, setid] = useState("")
// //     const [lname, setlname] = useState("")
// //     const [fname, setfname] = useState("")
// //     const [emeail, setemeail] = useState("")
// //     let [del,setdel]= useState("") 
// //     const [myEmploee, setMyCustemor] = useState({ id: "", lname: "",fname:"", emeail: "" })
//     export default function Employee (){
// const [id,setid] = useState("")
// const [lname ,setlname]=useState("")
// const [fname,setfname] = useState("")
// const[email,setemail]=useState("")
// const [myEmployee,srtMyEmployee]= useState ({id:"",lname:"",fname:"",email:""})
//     }
//     function handelid(event) {
//         setid((event.target.value));
//     }
//     function handellname(event) {
//         setlname((event.target.value));
//     }
//     function handelfname(event) {
//         setfname((event.target.value));
//     }
//     function handelemeail(event) {
//         setemeail((event.target.value));
//     }
  
//     function handleClickDel3(event)  {
//         setdel((del= event.target.value))
//         console.log("del in handleclick "+del)
//     }
//     let nuwCustomer = {
//         id: id,
//         lname: lname,
//         fname: fname,
//         emeail: emeail,
      
//     }
//     useEffect(() => {
//         axios.get("api/Employee")
//             .then(response => {
//                 console.log(response.data)
//                 setMyEmployee(response.data[0])
//             })
//         return () => { }
//     }, [])
//     function handleClick() {
//         axios({
//             method: 'post',
//             url: 'api/employee/add',
//             data: nuwCustomer
//         });
//     }
//     function handleClickDel2(){
//        console.log("del "+del)
//         axios({
//           method:'delete',
//           url:`/api/employee/delete/${del}`,
//         });
//     }

//     return (
//         <div>
//             <button onClick={handleClick} >Employee </button>
//             <form className='Patient' >
//                 <div class="log">
//                     <hr />
//                     <br></br>
//                     <label > Id Employee:</label>
//                     <dr />
//                     {/* <input
//                         type="number"
//                         placeholder=""
//                         name="Id"
//                         onChange={handelid} />
//                         <br></br> */}
//                         <input
//                         type="number"
//                         placeholder=""
//                         name="id"
//                         onchange={handlid}/>
//                         <br></br>
//                     <label > lname :</label>
//                     <dr />
//                     <input
//                         type="text"
//                         placeholder=""
//                         name="lname"
//                         onChange={handellname} />
//                         <br></br>
//                           <label > fname :</label>
//                     <dr />
//                     <input
//                         type="text"
//                         placeholder=""
//                         name="name"
//                         onChange={handelfname} />
//                         <br></br>
//                     <label > phone :</label>
//                     <dr />
//                     <input
//                         type="number"
//                         placeholder=""
//                         name="phone"
//                         onChange={handelemeail} />
//                         <br></br>
//                     <label > state:</label>
//                     <dr />
//                 </div>
//             </form>
//             <input type="text" id="id" name="id" onChange={handleClickDel3} />
//          <br />
//          <input type="submit" value="Delete2" onClick={handleClickDel2}></input>
//          </div>
// )
// }

