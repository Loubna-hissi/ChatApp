const mongoose=require('mongoose');
// const bcrypt =require('bcryptjs');
const {ObjectId}=mongoose.Schema;

const userSchema=new mongoose.Schema({
    username:{
      type:String,
      unique:true,
      min:3,
      max:30,
    },
    email:{
        type:String,
        unique:true,
        max:50,
    },
    password:{
        type:String,
        min:8,
        max:50,
    },
    isImageLogoset:{
        type:Boolean,
        default:false,
    },
    ImageLogo:{
        type:String,
        default:"",
    }
});
module.exports=mongoose.model("users",userSchema);