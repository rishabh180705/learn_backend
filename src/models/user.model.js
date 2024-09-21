import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema= new mongoose.Schema({
     username:{
        type:string,
        require:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,
     },
     email:{
        type:string,
        require:true,
        unique:true,
        lowercase:true,
        trim:true,
     },
     fullName:{
        type:string,
        require:true,
        trim:true,
        index:true,
     },
     Avtar:{
        type:string,
        require:true,
     },
   coverImage:{
    type:string,
   },
   watchHistory:[
    {
        type:Schema.Types.ObjectId,
        ref:"Video",
    }
   ],

   password:{
    type:"string",
    require:[true, "Password is required"],
   },
   refreshToken:{
    type:string,
   }


},{timestamps:true});

userSchema.pre('save',async function (next){
    if(!this.isModified("password")) return next();
     this.password = bcrypt.hash(this.password,10)
     next()
})
userSchema.method.isPasswordCorrect=async function (password){
 return await bcrypt.compare(password,this.password)
}
userSchema.methods.AccessTokenGenerate=async function(){
    return await jwt.sign({
        _id:this._id,
        username:this.username,
        email:this.email,
        fullName:this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIN:process.env.ACCESS_TOKEN_EXPIRY
    }
    )
}

userSchema.methods.RefreshTokenGenerate=async function(){
    return await jwt.sign({
        _id:this._id,
        username:this.username,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIN:process.env.REFRESH_TOKEN_EXPIRY
    }
    )
}

export const User=mongoose.model("User",userSchema);