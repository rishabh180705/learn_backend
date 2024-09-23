import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();
app.use(cors({
    origin: "process.env.CORS_ORIGIN",
    Credential:true
}));
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static("public"));
app.use(cookieParser());


// routes
import userRoute from "./routes/user.route.js";

// routes declearation

app.use('/api/v1/user',userRoute);
export {app};