//external import
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');

//internal import
const {notFound,errorHandler} = require('./middleware/common/errorHandeler');

//middleware
app.use(express.json());
app.use(cors());

// database connected

mongoose.connect(process.env.DATABASE,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Database connected")
})
.catch((err)=>{
    console.log(err)
});





//404 handler
app.use(notFound);
//custome error handler
app.use(errorHandler);

const port = process.env.PORT||8000;
app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("job portal server is running",port);
    }
})

