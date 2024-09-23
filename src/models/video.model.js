import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";



const videoSchema= new mongoose.Schema({
     VideoFile:{
        type:String,
        require:true,
     },
     thumbnail:{
        type:String,
        require:true,
     },
     title:{
        type:String,
        require:true,
     },
     description:{
        type:String,
        require:true,
     },
   duration:{
    type:Number,
    default:0,
   },
   isPublished:{
    type:boolean,
    default:true,
   },
   owner:[
    {
        type:Schema.Types.ObjectId,
        ref:"User",
    }
   ],

   password:{
    type:"String",
    require:[true, "Password is required"],
   },
   refreshToken:{
    type:String,
   }


},{timestamps:true});

export const Video=mongoose.model("Video",videoSchema);