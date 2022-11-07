
const express = require('express')

const cors = require('cors');

const connectDb = require('./config/connection');

const app = express()
//partie routes : 
const userRoutes = require("./routes/auth")
//route joboffer
const jobOfferRouter = require('./routes/joboffer')
// const Port = 4007;

connectDb()
require('dotenv').config()

 app.use(cors())

app.use(express.json())

//authentification route 
app.use('/authentification',userRoutes)

//job offer route 
app.use('/jobOffer',jobOfferRouter)








 
 app.listen(process.env.PORT,(err)=>{
    err?console.log(err):console.log(`server is running on port ${process.env.PORT}`)
 })