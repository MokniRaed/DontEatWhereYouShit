const mongoose = require('mongoose');

const connectDb =async()=>{
    try{
        await mongoose.connect('mongodb+srv://bobi:4AVAo41teHZq2Zm1@cluster0.miicc4i.mongodb.net/?retryWrites=true&w=majority' ,
         console.log('you did it shitty ^^ ')
        )

    }catch(err){
        console.log(err)
    }
}
module.exports = connectDb;