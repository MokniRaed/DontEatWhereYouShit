let mongoose = require("mongoose");

//Create a person having this prototype:
let userRegisterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName:{
    type:String,
    required:true,
  },
 email: {
    type: String,
    required: true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
    isRecruiter: {
     type: Boolean,
     required: true
   },
  
   adress:{
     type:String,
     
   },
   phoneNumber:{
     type:String
   }
});

module.exports  = mongoose.model("userRegister", userRegisterSchema);