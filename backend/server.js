
const express = require('express')

const cors = require('cors');

const connectDb = require('./config/connection');

const app = express()
//partie routes : 
const userRoutes = require("./routes/auth")

// const Port = 4007;

connectDb()
require('dotenv').config()

 app.use(cors())



//route authentification : 


app.use(express.json())
app.use('/authentification',userRoutes)







 
 app.listen(process.env.PORT,(err)=>{
    err?console.log(err):console.log(`server is running on port ${process.env.PORT}`)
 })