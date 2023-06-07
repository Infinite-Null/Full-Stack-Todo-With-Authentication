import { useState } from 'react';
import Api from '../../Components/Api/axios';
import UserContext from './UserContext';


const UserState=(props)=>{
    var num=0
    var [userData,setUserData]=useState({
        login:false,
        userId:"",
        token:"",
        fristName:"",
        lastName:""
    })
    const login=async(email,password)=>{
        try{
            const res=await Api.post("/user/login",{
                "email":email,
                "password":password
            })
            if(res.data.message=="successful login"){
                setUserData({
                    login:true,
                    token:res.data.token,
                    userId:res.data.userId,
                    fristName:res.data.fristName,
                    lastName:res.data.lastName,
                })
            }
            else{
                alert("Email Or Password Incorrect")
            }
        }catch(e){
            console.log(e)
        }
    }
    const signup=async(email,password,fristname,lastname)=>{
        try{
            const res=await Api.post("/user/signup",{
                "email":email,
                "password":password,
                "fristName":fristname,
                "lastName":lastname
            })
            if(res.data.message=="success"){
                setUserData({
                    login:true,
                    token:res.data.token,
                    userId:res.data.userId,
                    fristName:res.data.fristName,
                    lastName:res.data.lastName,
                })
            return true
            }
           else if(res.data.message=="already a user"){
               alert("This Email is already connected to a account")
               return false
            }
            else{
                alert("Something went wrong...")
                return false
            }
        }catch(e){
            console.log(e)
            return false
        }
    }
    return <UserContext.Provider value={{
        userData,login,num,signup
    }}>
        {props.children}
    </UserContext.Provider>
}

export default UserState