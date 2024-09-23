import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

   // Configuration
   cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_KEY, 
    api_secret: process.env.CLOUD_SECRET,// Click 'View API Keys' above to copy your API secret
});


const fileUploadOnCloudinary = async (filePath)=>{

    try{
        if(!filePath) return null;
        const response=await cloudinary.uploader.upload(filePath,{resource_type:"auto"})
     console.log("file is uploaded on cloudinary",response.url)
     return response;
    }
    catch(err){
        fs.unlinkSync(filePath);
        return null;
    }
}


export {fileUploadOnCloudinary}