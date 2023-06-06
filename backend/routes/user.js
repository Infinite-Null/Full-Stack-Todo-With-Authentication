const express =require('express')
const router=express.Router()
const bcrypt=require('bcrypt')
const mongoose=require('mongoose')
const user=require('../Models/user')
const jwt=require('jsonwebtoken')
require('dotenv').config()
router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:req.body.hi
    })
})
router.post('/signup',(req,res,next)=>{
    const {email,password,fristName,lastName}=req.body
    user.find({email:email}).then((doc)=>{
        if(doc.length>=1){
            res.status(202).json({
                message:"already a user"
            })
        }
        else{
            bcrypt.hash(password,10,(err,hash)=>{
                if(err){
                    res.status(200).json({
                        message:"fail",
                        detail:err
                    })
                }else{
                    id=new mongoose.Types.ObjectId()
                   const token=jwt.sign(
                    {
                        email: email,
                        userid:id
                    },
                    process.env.JWT_KEY,
                    {
                        expiresIn:"30d"
                    }
                   )
                const User=new user({
                    _id:id,
                    email:email,
                    password:hash,
                    fristName:fristName,
                    lastName:lastName,
                    token:token
                })
                User.save().then((doc)=>res.status(200).json({
                    message:"success",
                    token:token,
                    userId:id,
                    fristName:fristName,
                    lastName:lastName
                })).catch((e)=>res.status(500).json({
                    message:"failed",
                    detail:e
                }))
                }
            })

           
        }
    })
   })
   router.post("/login",(req,res,next)=>{
    const {email,password}=req.body
    user.findOne({email:email}).then((doc)=>{
        bcrypt.compare(password,doc.password,(err,result)=>{
            if(err){
                res.status(500).json({
                    message:"auth failed",
                })
            }else{
                if(result){
                    const token=jwt.sign(
                        {
                            email:doc.email,
                            userId:doc.id
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn:"30d"
                        }
                    )
                    user.updateOne({email:email},{token:token}).then((_)=>{
                        res.status(200).json({
                            message:"successful login",
                            token:token,
                            userId:doc.id,
                            fristName:doc.fristName,
                            lastName:doc.lastName
                        })
                    }).catch(e=>res.status(500).json({
                        message:"auth failed",
                    }))
                    
                }
                else{
                    res.status(200).json({
                        message:"Auth Failed",
                    })
                }
            }
        })
    }).catch(e=>res.status(500).json({
        message:"Auth Failed"
    }))
   })




   
   router.get('/users',(req,res,next)=>{
    user.find().then(doc=>res.status(200).json({
        message:"success",
        data:doc 
    }))
})
module.exports=router