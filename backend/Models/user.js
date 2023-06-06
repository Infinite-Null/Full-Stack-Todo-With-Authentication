const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    fristName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    token:{
        type:String,
        required:true,
    }
    
})
module.exports=mongoose.model('User',userSchema)