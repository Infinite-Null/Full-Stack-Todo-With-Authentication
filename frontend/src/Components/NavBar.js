import logo from '../Icons/todo-icon-5.png' 
import "../Components/NavBar.css"
import { useContext } from 'react';
import UserContext from './../Context/User/UserContext';
export default function Navbar(){
  const user=useContext(UserContext)
    var style={
        color:"white",
        fontSize:"20px",
        letterSpacing:"2px"
       }
 return <div style={{
    padding:"5px 13px 10px 13px"
 }}>
<nav class="navbar" style={
   {
    borderRadius:"10px",
   }
}>
  <div class="container-fluid">
    <div class="navbar-brand textNav" style={{
      display:"flex",
      flexDirection:"column"
    }}>
      <span class='span1'>Hello,</span>
      <span>{user.userData.fristName}</span>
    </div>
    <ul class="nav nav-underline">
    
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="#" style={style}>All</a>
    </li>
    <li class="nav-item" style={style}>
      <a class="nav-link" href="#" style={style}>Todo</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" style={style}>Done</a>
    </li>
  
   </ul>
   {dropdown()}
  </div>
</nav>
</div>;
}
function dropdown(){
  return  <>
  <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add Todo</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{
  backgroundColor:"rgba(0,0,0,0.3)"
}}>
  <div class="modal-dialog" >
    <div class="modal-content" style={{
    background:"rgb(20,20,20)",
    color:"white",
    border:'2px solid white'
  }}>
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Todo</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Title</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Discription</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">Add</button>
      </div>
    </div>
  </div>
</div>
  </>
}