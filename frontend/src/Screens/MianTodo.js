import { useContext, useState } from 'react';
import EachTodo from '../Components/EachComponents';
import Navbar from '../Components/NavBar';
import TodoContext from '../Context/Todo/TodoContext';
import { useEffect } from 'react';
import UserContext from '../Context/User/UserContext';

export default function MainPage(){
  const todo=useContext(TodoContext)
  const user=useContext(UserContext)

  var [page,setPage]=useState(1)
  useEffect(()=>{ 
    todo.getData(user.userData.userId,user.userData.token)
    return () => {}

  },[])
  const changeIndex=(pageno)=>{
      setPage(pageno)
  }
    return <div className="App">
    <header className="App-header">
    <Navbar changeIndex={changeIndex}/>
    <div style={{
      display:"flex",
      flexWrap:"wrap",
      gap:"20px",
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
    }}>No Todo!</p>:(page==1)?todo.data.map((todo,i)=>{
      return <EachTodo title={todo.title} discription={todo.discription} status={todo.status} id={todo._id}/>
    }):(page==2)?todo.data.filter((todo,i)=>{
      return todo.status!="Done"
    }).map((todo,i)=>{
      return <EachTodo title={todo.title} discription={todo.discription} status={todo.status} id={todo._id}/>
    }):todo.data.filter((todo,i)=>{
      return todo.status=="Done"
    }).map((todo,i)=>{
      return <EachTodo title={todo.title} discription={todo.discription} status={todo.status} id={todo._id}/>
    })}
    </div >
    <button className='btn btn-danger' style={{
      position:"fixed",
      bottom:"15px",
      right:"0px",
      borderRadius:"1000px",
      height:"80px",
      width:"80px"
    }} onClick={user.logout}>Log Out</button>
    </header>
  </div>
}