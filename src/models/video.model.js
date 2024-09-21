import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";



const videoSchema= new mongoose.Schema({
     VideoFile:{
        type:string,
        require:true,
     },
     thumbnail:{
        type:string,
        require:true,
     },
     title:{
        type:string,
        require:true,
     },
     description:{
        type:string,
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
    type:"string",
    require:[true, "Password is required"],
   },
   refreshToken:{
    type:string,
   }


},{timestamps:true});

export const Video=mongoose.model("Video",videoSchema);