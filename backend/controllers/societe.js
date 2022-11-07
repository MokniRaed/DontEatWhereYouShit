const societeSchema = require('../models/Societe')

exports.getAllSociete=async(req,res)=>{
    try{
const returnSociete = await societeSchema.find()
return res.json({msg:'you did it you found the jobs',returnSociete})

    }catch(err){
        console.log(err)
        res.status(500).send('msg erreur',err)    }
}

//update the job offer 

exports.updateSociete =async (req,res)=>{
    try{
const {id} = req.params
const updatedSociete = await societeSchema.findByIdAndUpdate(id,{$set:{...req.body}})
const returnSociete= await societeSchema.find()
res.status(200).send({msg :'you did good this is the updated par',returnSociete})
    }catch(err){
        console.log(err)
        res.status(500).send('msg erreur',err)    }
}

//post a job offer 

exports.postSociete =async( req,res)=>{
    try{
const newSociete = new societeSchema(req.body)
 await newSociete.save()
 res.status(200).send({msg:'you did it u added a new job offer', newSociete})

    }catch(err){
        console.log(err)
        res.status(500).send('msg erreur',err)    }
}

//delet a job offer 

exports.deletedSociete = async(req,res)=>{
    try{
        const {id} = req.params
const deletedSociete = await societeSchema.findByIdAndDelete(id)
const returnSociete = await societeSchema.find()

res.status(200).send({msg:'you could delet the joboffer well done',returnSociete})
    }catch(err){
        console.log(err)
        res.status(500).send('msg erreur',err)
    }
}

exports.getUniqueSociete=async(req,res)=>{
    try{
        const {id} = req.params
        const getUniquSociete = await societeSchema.findById(id)
        res.status(200).send({msg:'you did good this is the job offer ur looking for ',getUniquSociete})

    }catch(err){
        console.log(err)
    }
}



