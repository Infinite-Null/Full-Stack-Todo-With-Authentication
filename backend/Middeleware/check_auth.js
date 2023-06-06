const jwt=require('jsonwebtoken')
module.exports=(req,res,next)=>{
    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1]
    try{
        const decoded= jwt.verify(token,process.env.JWT_KEY)
        next()
    }catch{
        (e)=>res.status(401).json({
            message:"Auth failed"
        })
    }
    }else{
        return res.status(401).json({
            message:"Auth failed"
        })
    }
    
}