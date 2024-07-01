const mongoose = require("mongoose")
const Schema = require("mongoose")

const UserSchema = mongoose.Schema({
    user:{
        type:String
    },
    assistant:{
        type:String
    },
    time : {
        type:String,
        default:new Date()
    },
    image:{
        type:String,
    }
})
const ChatModel = mongoose.model("gemchat" , UserSchema)
module.exports = ChatModel