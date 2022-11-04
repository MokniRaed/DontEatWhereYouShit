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

    website:{
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
          DateFin:{
              type:String,
              required:true
          },
          Description:{
              type:String,
              required:true
          }}
  ],
  Formation:[
      {
          Diplome:{
              type:String,
              required:true
          },
          Ecole:{
              type:String,
              required:true
          },
          DateDebut:{
              type:String,
              required:true
          },
          DateFin:{
              type:String,
              required:true
          },
          Description:{
              type:String,
              required:true
          }
      }],
      Competence:[
          {
              Nom:{
                  type:String,
                  required:true
              },
              Niveau:{
                  type:String,
                  required:true
              }
          }],
          Langue:[
              {
                  Nom:{
                      type:String,
                      required:true
                  },
                  Niveau:{
                      type:String,
                      required:true
                  }}]
          
});

module.exports  = mongoose.model("userRegister", userRegisterSchema);