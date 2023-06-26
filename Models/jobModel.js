const mongoose = require('mongoose')
const jobSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    typeofjob:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    companyname:{
        type:Number,
        required:true
    }

})
module.exports=jobSchema