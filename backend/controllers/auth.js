const userRegisterSchema = require('../models/userRegister')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');



exports.register= async(req,res)=>{
   
    try{ 
        const{name,email,password} = req.body
        const found = await userRegisterSchema.findOne({email})
        if(found){return res.status(404).json({ errors })}

            const newUser = await new userRegisterSchema(req.body)

            const saltRounds = 10;
            const salt = bcrypt.genSaltSync(saltRounds);
           
const hash = bcrypt.hashSync(password, salt);


newUser.password = hash 

const payload = { id : newUser._id}
var token = jwt.sign(payload, process.env.privateKey);
            newUser.save()
            res.status(200).send({msg:'welcome to the groupe',newUser,token})
        console.log(newUser,token)

       
            }catch(err){
                console.log(err)
                res.send({msg:'it error',err})
            }
}




exports.getUser=async(req,res)=>{
    try{
        const take = await userRegisterSchema.find()

res.send({msg:'true you did it ',take})
    }catch(err){
        res.send({msg:'it error'})
    }
}

exports.login=async(req,res)=>{
    try{
    const{email,password} = req.body
    const found = await userRegisterSchema.findOne({email})
    if(!found){return res.status(404).json({ errors })}
    

    const match = await bcrypt.compare(password, found.password);
 
    if(!match){return res.status(404).json({ errors })}
    
    
    const payload = { id : found._id}
    var token = jwt.sign(payload, process.env.privateKey);
    res.status(200).send({msg:'you did good welcome ',token,found})
    }catch(err){
        console.log(err)
        res.send({msg:'you have a prob',err})
    }
    }


