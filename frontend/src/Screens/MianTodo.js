import { useContext } from 'react';
import EachTodo from '../Components/EachComponents';
import Navbar from '../Components/NavBar';
import TodoContext from '../Context/Todo/TodoContext';
import { useEffect } from 'react';
import UserContext from '../Context/User/UserContext';

export default function MainPage(){
  const todo=useContext(TodoContext)
  const user=useContext(UserContext)
  useEffect(()=>{ 
    todo.getData(user.userData.userId,user.userData.token)
    return () => {}

  },[])
    return <div className="App">
    <header className="App-header">
    <Navbar/>
    <div style={{
      display:"flex",
      flexWrap:"wrap",
      gap:"10px",
      margin:"10px",
      alignItems:"center",
      justifyContent:"center"
    }}>
    {(todo.data[0]=={}||todo.data.length==0)?<p style={{
      fontSize:"30px",
      color:"white",
      height:"81vh",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}>No Todo!</p>:todo.data.map((todo,i)=>{
      return <EachTodo title={todo.title} discription={todo.discription} status={todo.status} id={todo._id}/>
    })}
    </div >
    </header>
  </div>
}