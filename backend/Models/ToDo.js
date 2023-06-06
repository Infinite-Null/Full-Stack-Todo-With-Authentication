const mongoose=require('mongoose')

const TodeSchema=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    status:{
        type:String,
        required:true,
    }
})
module.exports=mongoose.model('Todo',TodeSchema)