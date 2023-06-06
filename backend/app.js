const express=require('express')
const bodyParser=require('body-parser')
const app=express()
const mongoose=require('mongoose')
const morgan = require('morgan');
const user=require("./routes/user")
const todo=require("./routes/todo");
const check_auth = require('./Middeleware/check_auth');
mongoose.connect(
    "mongodb+srv://ankitkumsha9933:ankit@tododb.3i046tq.mongodb.net/?retryWrites=true&w=majority"
).then(()=>console.log("Connected...")).catch((e)=>console.log(e))
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });


app.use('/user',user)
app.use('/todo',check_auth,todo)

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});
module.exports=app