const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema = new mongoose.Schema({
    username:String,
    googleId:{
        type:String,
        unique:true
    }
})

const User= mongoose.model('user',userSchema)
module.exports=User