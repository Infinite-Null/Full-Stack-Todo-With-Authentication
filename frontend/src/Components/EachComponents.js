import '../Components/EachComponent.css'
import { useContext } from 'react';
import TodoContext from './../Context/Todo/TodoContext';
export default function EachTodo({title,discription,id,status}){
  const todo=useContext(TodoContext)
  const fontstyle={
    fontSize:"45px",
    fontWeight:"50"
  }
    return (status!="Done")?<>
    <div class="card" style={{width: "18rem", color:"black",backgroundColor:"white",transition:"0.4s",border: "2px solid white"}} >
    <div class="card-body">
    <h5 class="card-title" style={fontstyle}>{title}</h5>
    <p class="card-text textCard">{discription}</p>
   <button type="button" class="btn btn-primary" style={{
      margin:"0px 10px 0px 0px"
    }} onClick={()=>{
      todo.updateStatus(id,"Done")
    }}>Done</button><button type="button" class="btn btn-danger" onClick={()=>{
      todo.deleteData(id)
    }}>Delete</button>
  </div>
</div>
</>:<>
    <div class="card mainCard" style={{width: "18rem", color:"white"}} >
    <div class="card-body">
    <h5 class="card-title" style={fontstyle}>{title}</h5>
    <p class="card-text textCard">{discription}</p>
   <button type="button" class="btn btn-primary" style={{
      margin:"0px 10px 0px 0px"
    }} onClick={()=>{
      todo.updateStatus(id,"Not Done")
    }}>undo</button><button type="button" class="btn btn-danger" onClick={()=>{
      todo.deleteData(id)
    }}>Delete</button>
  </div>
</div>
</>
}