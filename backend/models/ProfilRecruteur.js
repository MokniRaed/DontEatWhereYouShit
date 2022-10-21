const mongoose = require('mongoose')

const ProfilRecruteur = new mongoose.Schema({
name:{
    type:String,
    required:true
},
lastName:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true},
    civilité:{
        type:String,

    },
    
        Gouvernorat:{
            type:String,
            required:true
        },
        LinkedIn:{
            type:String,
        },
    
        ExperienceExperience:[
            {
                Entreprise:{
                    type:String,
                    required:true
                },
                Poste:{
                    type:String,
                    required:true
                },
                DateDebut:{
                    type:String,
                    required:true
                },
               
                Description:{
                    type:String,
                    required:true
                }}
        ],
              

})

module.exports = mongoose.model('ProfilRecruteur',ProfilRecruteur)