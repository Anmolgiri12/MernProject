import mongoose from "mongoose"

const UserSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        Enum:["user","admin"],
        default:"user"
    },
    image:{
        type:String,
        
    },
    status:{
        type:String,
        enum: ["active","inactive"],
        default:"inactive"
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
    
});

export default mongoose.model("user", UserSchema)