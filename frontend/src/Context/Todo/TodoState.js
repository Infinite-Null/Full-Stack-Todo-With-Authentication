import { useState } from "react"
import TodoContext from "./TodoContext"
import Api from "../../Components/Api/axios"

const TodoState=(props)=>{
    const [data,Setdata]=useState([{}])
    const getData=async(id,token)=>{
        const res=await Api.get(`/todo/${id}`,{
            headers:{
                Authorization:"Bearer "+token 
            }
        })
        Setdata(res.data.detail)
    }
    return <TodoContext.Provider value={
        {
            data,getData
        }
    }>
        {props.children}
    </TodoContext.Provider>
}

export default TodoState