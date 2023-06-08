import logo from '../Icons/todo-icon-5.png' 
import "../Components/NavBar.css"
import { useContext } from 'react';
import UserContext from './../Context/User/UserContext';
import TodoContext from '../Context/Todo/TodoContext';
export default function Navbar({changeIndex}){
  const user=useContext(UserContext)
    var style={
        color:"black",
        fontSize:"20px",
        letterSpacing:"2px",
        fontWeight:"500"
       }
 return <div style={{
    padding:"5px 13px 10px 13px"
 }}>
<nav className="navbar" style={
   {
    borderRadius:"10px",
   }
}>
  <div className="container-fluid">
    <div className="navbar-brand textNav" style={{
      display:"flex",
      flexDirection:"column"
    }}>
      <span className='span1'>Hello,</span>
      <span>{user.userData.fristName}</span>
    </div>
    <ul className="nav nav-underline">
    
    <li className="nav-item">
      <a className="nav-link" aria-current="page" href="#" onClick={()=>{
        changeIndex(1)
      }} style={style}>All</a>
    </li>
    <li className="nav-item" onClick={()=>{
        changeIndex(2)
      }}  style={style}>
      <a className="nav-link" href="#" style={style}>Todo</a>
    </li>
    <li className="nav-item" onClick={()=>{
        changeIndex(3)
      }} >
      <a className="nav-link" href="#" style={style}>Done</a>
    </li>
  
   </ul>
   {Dropdown()}
  </div>
</nav>
</div>;
}
function Dropdown(){
  const todo=useContext(TodoContext)
  function addTodo(){
    const title=document.querySelector("#recipient-name").value
    var discription=document.querySelector("#message-text").value
    if(title===''){
      alert("Title is required")
      return
    }
    if(discription==''){
      discription="..."
    }
    todo.addData(title,discription)
    document.querySelector("#recipient-name").value=''
    document.querySelector("#message-text").value=''
  }
  return  <>
  <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add Todo</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" >
    <div className="modal-content" style={{
    backgroundColor:"white",
    color:"black",
    border:'2px solid black'
  }}>
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Todo</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Title</label>
            <input type="text" className="form-control" id="recipient-name" style={{
  borderBottom:"2px solid black"
}}/>
          </div>
          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">Discription</label>
            <textarea className="form-control" id="message-text" style={{
  borderBottom:"2px solid black"
}}></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success" onClick={addTodo}>Add</button>
      </div>
    </div>
  </div>
</div>
  </>
}