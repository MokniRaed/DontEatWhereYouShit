const JobOfferSchema = require('../models/jobOffers')
const jobOfferRouter = require('../routes/joboffer')

exports.getAllJobOffer=async(req,res)=>{
    try{
const returnJob = await JobOfferSchema.find()
return res.json({msg:'you did it you found the jobs',returnJob})

    }catch(err){
        console.log(err)
        res.status(500).send('msg erreur',err)    }
}

//update the job offer 

exports.updateJobOffer =async (req,res)=>{
    try{
const {id} = req.params
const updatedJobOffer = await JobOfferSchema.findByIdAndUpdate(id,{$set:{...req.body}})
const returnJob = await JobOfferSchema.find()
res.status(200).send({msg :'you did good this is the updated par',returnJob})
    }catch(err){
        console.log(err)
        res.status(500).send('msg erreur',err)    }
}

//post a job offer 

exports.postJobOffer =async( req,res)=>{
    try{
const newJob = new JobOfferSchema(req.body)
 await newJob.save()
 res.status(200).send({msg:'you did it u added a new job offer', newJob})

    }catch(err){
        console.log(err)
        res.status(500).send('msg erreur',err)    }
}

//delet a job offer 

exports.deletedJobOffer = async(req,res)=>{
    try{
        const {id} = req.params
const deletedJoboffer = await JobOfferSchema.findByIdAndDelete(id)
const returnJob = await JobOfferSchema.find()

res.status(200).send({msg:'you could delet the joboffer well done',returnJob})
    }catch(err){
        console.log(err)
        res.status(500).send('msg erreur',err)
    }
}

exports.getUniqueJobOffer=async(req,res)=>{
    try{
        const {id} = req.params
        const getUnique = await JobOfferSchema.findById(id)
        res.status(200).send({msg:'you did good this is the job offer ur looking for ',getUnique})

    }catch(err){
        console.log(err)
    }
}

//get unique job offer 
// const getUniquJob = 

