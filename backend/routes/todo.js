const express=require('express')
const router=express.Router()
const dotenv=require('dotenv')
const todo=require('../Models/ToDo')
const user=require('../Models/user')
const mongoose = require('mongoose')
dotenv.config()
router.post('/',(req,res,next)=>{
    const{userId,title,discription}=req.body
    user.findOne({_id:userId}).then((doc)=>{
        if(!doc){
            res.status(404).json({
                message:"failed",
                detail:"Invalid UserId"
            })
        }else{
            const Todo=new todo({
                _id:new mongoose.Types.ObjectId(),
                user:userId,
                title:title,
                discription:discription,
                status:"Not Done"
            })
            Todo.save().then((doc)=>{
                res.status(200).json({
                    message:"success",
                    detail:doc
                })
            }).catch((e)=>{
                res.status(500).json({
                    message:"failed",
                    detail:e
                })
            })
        }
        
    }).catch((e)=>{
        res.status(200).json({
            message:"Failed",
            detail:e
        })
    })
})
router.get('/:userId',(req,res,_)=>{
    const {userId}=req.params
    todo.find({user:userId}).then((doc)=>{
        res.status(200).json({
            message:"success",
            detail:doc
        })
    }).catch(e=>res.status(500).json({
        message:'Failed',
        detail:e
    }))
})

router.delete('/:todoId',(req,res,_)=>{
    const {todoId}=req.params
    todo.deleteOne({_id:todoId}).then((doc)=>res.status(200).json({
        message:"success",
        detail:doc
    })).catch(e=>res.status(500).json({
        message:"failed",
        detail:e
    }))
})

router.patch("/status/:todoId",(req,res,_)=>{
    todo.updateOne({_id:req.params.todoId},{status:req.body.status}).then((doc)=>{
        res.status(200).json({
            message:"success",
            detail:doc
        })
    }).catch((e)=>{ 
        res.status(200).json({
        message:"failed",
        detail:e
    })})
})



router.get('/',(req,res,_)=>{
    todo.find().then((doc)=>{
        res.status(200).json({
            message:"success",
            detail:doc
        })
    })
})
module.exports=router