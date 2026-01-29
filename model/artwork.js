const mongoose = require("mongoose")

const artworkSchema = new mongoose.Schema({
    id:{
        type:Number,
    },
    query:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
    },
    title:{
        type:String,
        trim:true
    }
})
 
module.exports = mongoose.model("Artwork",artworkSchema)