const mongoose = require('mongoose')
const societeSchema = new mongoose.Schema({
    societeName:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    adress:{
        type:String,
        required:true
    }


})

module.exports = mongoose.model('societeSchema',societeSchema)