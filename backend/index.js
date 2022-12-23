import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import schoolsRoute from "./routes/schools.js";
import classesRoute from "./routes/classes.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

mongoose.set('strictQuery', false);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB.")
    }catch (error){
        throw error;   
    }
}


//middlewares
app.use(cors({ origin: 'http://localhost:3000', credentials:true }));
app.use(cookieParser());
app.use(express.json());
  
app.use("/api/auth", authRoute); 
app.use("/api/users", usersRoute);  
app.use("/api/schools", schoolsRoute);  
app.use("/api/classes", classesRoute);    

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json(errorMessage);
})
app.listen(8800, ()=>{
    connect();
    console.log("Connected to backend.");
});
