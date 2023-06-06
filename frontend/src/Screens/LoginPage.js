import { Link, useNavigate } from 'react-router-dom'
import background from '../Icons/background.jpg'
import './LoginPage.css'
import { useContext, useState } from 'react'
import UserContext from '../Context/User/UserContext'
export default function LoginPage(){
    const [loading,setloading]=useState(false)
    const navigator=useNavigate()
    function login(){
        console.log(document.querySelector("#exampleFormControlInput2").value)
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
        user.login(email,password)
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
     margin:"10px",
     backdropFilter:"grayscale(0.6) blur(7px)",
     boxShadow:"2px 5px 35px 0px rgba(0,0,0,0.5)"
    }}>
    <h1 class="display-6 displayGradient">Always Have Track</h1>
    <h1 class="display-6 displayGradient" style={{
    fontSize:"1.5em",
    marginBottom:"30px"
   }}>Of What To Do</h1>
   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
   </div>
   <div class="mb-3">
  <label for="exampleFormControlInput2" class="form-label">Password</label>
  <input type="password" class="form-control" id="exampleFormControlInput2"/>
   </div>
   <button className="btn btn-primary" onClick={login}>{loading?(<div class="spinner-border" role="status">
</div>):"Login"}</button>
   <h1 class="display-6" style={{
    fontSize:"1.5em",
    margin:"10px"
   }}>Not a user?  <Link to='/signup'
   style={{
    color:"lightblue"
   }}>Sign Up</Link></h1>
    </div>
    </div>
    </>
}