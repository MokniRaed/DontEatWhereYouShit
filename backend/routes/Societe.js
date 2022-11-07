const express = require('express')

const societeRouter = express.Router()
const societeSchema = require('../models/Societe')

const {getAllSociete,updateSociete,postSociete,getUniqueSociete,deletedSociete}= require('../controllers/societe')
//gett all the societe

societeSchema.get('/getAllSociete',getAllSociete)

//get a unique societe




//update a job offer 
//ici pour visioner la partie updated nous avons utiliser la partie get pour afficher les changements 

societeSchema.put('/updateSociete/:id',updateSociete)



//post a societe 

societeSchema.post('/postSociete',postSociete)




//delete a societe 

societeSchema.delete('/deletedSociete/:id',deletedSociete)




//get unique societe

societeSchema.get('/getUnique/:id',getUniqueSociete)


module.exports= societeSchema