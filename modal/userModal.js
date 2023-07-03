import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        minlength: 6,
        required:true
    }
})

const User = mongoose.model("User",userSchema)

export default User
