import { Link, useNavigate } from 'react-router-dom'
import background from '../Icons/background.jpg'
import './LoginPage.css'
import { useContext, useState } from 'react'
import UserContext from '../Context/User/UserContext'
export default function LoginPage(){
    const [loading,setloading]=useState(false)
    const navigator=useNavigate()
   async  function login(){
        var email=document.querySelector("#exampleFormControlInput1").value
        var password=document.querySelector("#exampleFormControlInput2").value
        if(email==""){
            alert("Email field can't be empty")
            return
        }
        else if(password==""){
            alert("Password field can't be empty")
        }
        setloading(true)
        await user.login(email,password)
        setloading(false)
        navigator("/")
    }
    var user=useContext(UserContext)
    return  <>
    <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"100vh",
        backgroundImage:`url(${background})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        zIndex:"1",
        filter:"brightness(0.85)"
    }} className='mainDiv'>
    <div style={{
     height:"fit-content",
     display:"inline",
    backdropFilter:"blur(10px)",
    border:"2px solid black",
    backgroundColor:"rgb(255,255,255)",
     padding:"30px",
     color:"black",
     borderRadius:"10px",
     width:"30rem",
     margin:"10px",
     zIndex:"100",
     boxShadow:"12px 15px 25px 5px rgba(0,0,0,0.4)"
    }} className='mainDiv1'>
    <h1 className="display-6 displayGradient mainDiv2">"Always Have Track</h1>
    <h1 className="display-6 displayGradient mainDiv2" style={{
    fontSize:"1.5em",
    marginBottom:"30px"
   }}>Of What To Do"</h1>
   <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label" >Email address</label>
  <input style={{
    borderBottom:"2px solid rgba(0,0,0,0.7)"
  }} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
   </div>
   <div className="mb-3">
  <label htmlFor="exampleFormControlInput2" className="form-label">Password</label>
  <input style={{
    borderBottom:"2px solid rgba(0,0,0,0.7)"
  }} type="password" className="form-control" id="exampleFormControlInput2"/>
   </div>
   <button className="btn btn-primary" onClick={login}>{loading?(<div className="spinner-border" role="status">
</div>):"Login"}</button>
   <h1 className="display-6" style={{
    fontSize:"1.5em",
    margin:"10px",
    fontWeight:"400"
   }}>Not a user? <Link to='/signup'
   style={{
    color:"blue",
    textDecoration:"none"
   }}>Sign Up</Link></h1>
    </div>
    </div>
    </>
}