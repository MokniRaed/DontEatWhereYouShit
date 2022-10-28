const express = require('express')
// const UserSchema = require('../model/user')
const userRoutes = express.Router()
const {login,getUser,register} = require('../controllers/auth')
//partie validation 
const {registerValidation,validation,logvalidator} = require('../Middelware/RegisterValidator')
const {isAuth} = require('../Middelware/isAuth')
// 2nd lieu 


userRoutes.post('/singup',registerValidation,validation,register)


//login 

userRoutes.post('/login',login)
userRoutes.get('/uraccount',isAuth,(req,res)=>{
    res.send(req.user)
})
userRoutes.get('/gett',(req,res)=>{
    try{
        const newUser = new userSchema(req.body)
        newUser.save()
        res.send({msg:'you did it '})
    }catch(err){res.send({msg:'mkn',err})}
})
module.exports = userRoutes

