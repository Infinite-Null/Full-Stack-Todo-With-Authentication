import '../Components/EachComponent.css'
export default function EachTodo({title,discription}){
    return <>
    <div class="card mainCard" style={{width: "18rem", color:"black"}} >
    <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text textCard">{discription}</p>
   <button type="button" class="btn btn-primary" style={{
      margin:"0px 10px 0px 0px"
    }}>Done</button><button type="button" class="btn btn-danger">Delete</button>
  </div>
</div>
</>
}