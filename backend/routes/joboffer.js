const express = require('express')

const jobOfferRouter = express.Router()
const JobOfferSchema = require('../models/jobOffers')
const {getAllJobOffer,updateJobOffer,postJobOffer,getUniqueJobOffer,deletedJobOffer}= require('../controllers/joboffer')
//gett all the job offers 

jobOfferRouter.get('/getalljobOffer',getAllJobOffer)

//get a unique job offer 




//update a job offer 
//ici pour visioner la partie updated nous avons utiliser la partie get pour afficher les changements 

jobOfferRouter.put('/updateJob/:id',updateJobOffer)



//post a job offer 

jobOfferRouter.post('/postJob',postJobOffer)




//delete a job offer 

jobOfferRouter.delete('/deletJoboffer/:id',deletedJobOffer)




//get unique job offer 

jobOfferRouter.get('/getUnique/:id',getUniqueJobOffer)
module.exports= jobOfferRouter