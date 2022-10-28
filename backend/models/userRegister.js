let mongoose = require("mongoose");

//Create a person having this prototype:
let userRegisterSchema = new mongoose.Schema({
  name:String,
  email:{
      type:String,
      required:true,
      unique:true
  },
  password:{
      type:String,
      required:true
  },
  lastName:{
    type:String,
  },
    isRecruiter: {
     type: Boolean,
   },
  
   adress:{
     type:String,
     
   },
   phoneNumber:Number,
});

module.exports  = mongoose.model("userRegister", userRegisterSchema);