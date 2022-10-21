const express = require('express')

const cors = require('cors');
const connectDb = require('./config/connection');

const app = express()

const Port = 4007;
connectDb()
require('dotenv').config()
 app.use(cors())

 app.listen(Port,(err)=>{
    err?console.log(err):console.log(`server is running on port ${Port}`)
 })