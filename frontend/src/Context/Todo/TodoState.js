import { useContext, useState } from "react"
import TodoContext from "./TodoContext"
import Api from "../../Components/Api/axios"
import UserContext from './../User/UserContext';

const TodoState=(props)=>{
    const user=useContext(UserContext)
    const [data,Setdata]=useState([{}])
    const getData=async(id,token)=>{
        const res=await Api.get(`/todo/${id}`,{
            headers:{
                Authorization:"Bearer "+token 
            }
        })
        Setdata(res.data.detail)
    }
    const deleteData=async(id)=>{
    await Api.delete(`/todo/${id}`,{
        headers:{
            Authorization:"Bearer "+user.userData.token 
        }
    })
    getData(user.userData.userId,user.userData.token)
    }
    const addData=async(title,discription)=>{
        await Api.post('/todo',{
                "userId":user.userData.userId,
                "title":title,
                "discription":discription
        })
        getData(user.userData.userId,user.userData.token)
    }
    return <TodoContext.Provider value={
        {
            data,getData,deleteData
        }
    }>
        {props.children}
    </TodoContext.Provider>
}

export default TodoState