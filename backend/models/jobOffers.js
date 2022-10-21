const mongoose = require('mongoose')

const JobOfferSchema = new mongoose.Schema({
    NameScoiete:{
        type:String,
        required:true
    },
    adress:{
        type:String,
        require:true
    },
    Postesvacants:{
        type:String,required:true
    },
    Typedepostes:{
        type:String,required:true},
        Experiences:{
            type:String,required:true
        },
        Langue:{type:String},
        Genre:{
            type:String,
            default:"indifferent"
        },
        Niveaudetude:{
            type:String,
            require:true
        },
        Description:{
            type:String,
            required:true
        },
        DateExpiration:{
            type:String,
            required:true},
            MotCle:{
                type:String,
                required:true
            },
            Societe:{
                type:String,
                required:true
            }

})

module.exports = mongoose.model('JobOfferSchema',JobOfferSchema)