import mongoose from "mongoose";

//user scema:

const userScema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true}
);

const User=mongoose.model('User',userScema);
export default User;

