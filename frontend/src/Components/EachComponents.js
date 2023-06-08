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
    <div className="card mainCard1" style={{width: "18rem", color:"black",backgroundColor:"rgba(250, 217, 159,0.7)",border:"2px solid rgb(0,0,0,0.5)",transition:"0.4s"}} >
    <div className="card-body">
    <h5 className="card-title" style={fontstyle}>{title}</h5>
    <p className="card-text textCard">{discription}</p>
   <button type="button" className="btn btn-primary" style={{
      margin:"0px 10px 0px 0px"
    }} onClick={()=>{
      todo.updateStatus(id,"Done")
    }}>Done</button><button type="button" className="btn btn-danger" onClick={()=>{
      todo.deleteData(id)
    }}>Delete</button>
  </div>
</div>
</>:<>
    <div className="card mainCard" style={{width: "18rem", color:"black",border:"2px solid rgb(0,0,0,0.5)",backgroundColor:"rgb(192, 255, 162)"}} >
    <div className="card-body">
    <h5 className="card-title" style={fontstyle}>{title}</h5>
    <p className="card-text textCard">{discription}</p>
   <button type="button" className="btn btn-primary" style={{
      margin:"0px 10px 0px 0px"
    }} onClick={()=>{
      todo.updateStatus(id,"Not Done")
    }}>undo</button><button type="button" className="btn btn-danger" onClick={()=>{
      todo.deleteData(id)
    }}>Delete</button>
  </div>
</div>
</>
}