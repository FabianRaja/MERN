import express, { Router } from "express";
import { addNewDoctor, getAllDoctors } from "./Controllers/doctor.js";
import { doctorRouter } from "./Routes/doctor.js";
import dotenv from "dotenv";
import { userRouter } from "./Routes/user.js";

//initiating server
const app=express();

//middlewares
app.use(express.json());

//env configuration
dotenv.config();

//application routes
app.use("/doctor",doctorRouter);
app.use("/user",userRouter);

//initiating PORT
const PORT=process.env.PORT;

//initiating DB
// dbConnection();


//listening to the server
app.listen(PORT,()=>{
    console.log(`Server listening in localhost:${PORT}`)
})