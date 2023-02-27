const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(express.json())

//Import Routes
const postsRoute = require('./routes/post')

app.use('/post',postsRoute)

//Midlleware
app.use('/',()=>{
  console.log("middleware")
})


//Connect to DB
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_CONNECTION,()=>{
  console.log('connected to DB')
})

//how to start listening to the server
app.listen(3000);