const mongoose = require("mongoose")

const searchSchema = new mongoose.Schema({
    query:{
        type:String,
        required:true
    },
     timestamps:{
        required:true,
     }
  
})

module.exports = mongoose.model("search",searchSchema)