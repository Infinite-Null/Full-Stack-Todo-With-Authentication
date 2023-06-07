import { BrowserRouter, Link, Navigate, useNavigate } from 'react-router-dom'
import background from '../Icons/background.jpg'
import './LoginPage.css'
import { useContext, useState } from 'react';
import UserContext from '../Context/User/UserContext';

export default function Signup(){
    const navigate = useNavigate();
    const user=useContext(UserContext)
    const [loading,setloading]=useState(false)
    function signup(){
        const email=document.querySelector("#exampleFormControlInput1").value
        const password=document.querySelector("#exampleFormControlInput2").value
        const fristName=document.querySelector("#exampleFormControlInput3").value
        const lastname=document.querySelector("#exampleFormControlInput4").value
        if(email===''||password===''||fristName===''||lastname===''){
            alert("All Fields Must Be Filled")
            return
        }
        setloading(true)
        user.signup(email,password,fristName,lastname)
        setloading(false)
        navigate("/")
        
        
    }
    return  <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"100vh",
        backgroundImage:`url(${background})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        // filter:"brightness(0.85)"
    }}>
    <div style={{
     height:"fit-content",
     display:"inline",
    backdropFilter:"blur(10px)",
    border:"2px solid white",
    backgroundColor:"rgba(0,0,0,0.4)",
     padding:"30px",
     color:"white",
     borderRadius:"10px",
     width:"30rem",
     height:"40rem",
     margin:"10px",
     backdropFilter:"grayscale(0.6) blur(7px)",
     boxShadow:"2px 5px 35px 0px rgba(0,0,0,0.5)"
    }}>
    <h1 className="display-6 displayGradient">Always Have Track</h1>
    <h1 className="display-6 displayGradient" style={{
    fontSize:"1.5em",
    marginBottom:"40px",
   }}>Of What To Do</h1>
   <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
   </div>
   <div className="mb-3">
  <label htmlFor="exampleFormControlInput2" className="form-label">Password</label>
  <input type="password" className="form-control" id="exampleFormControlInput2"/>
   </div>
   <div className="mb-3">
  <label htmlFor="exampleFormControlInput3" className="form-label">Frist Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput3" placeholder=""/>
   </div>
   <div className="mb-3">
  <label htmlFor="exampleFormControlInput4" className="form-label">Last Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput4" placeholder=""/>
   </div>
   <button className="btn btn-primary" onClick={signup}>{loading?(<div className="spinner-border" role="status">
</div>):"Signup"}</button>
   <h1 className="display-6" style={{
    fontSize:"1.5em",
    margin:"10px"
   }}>Already a user?  <Link
   to="/login"
   style={{
    color:"lightblue"
   }}>Login</Link></h1>
    </div></div>
}