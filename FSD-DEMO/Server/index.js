import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import cors from "cors";
import { userRouter } from "./Routes/user.js";


//configuration
dotenv.config();
const PORT=process.env.PORT;

//initialize a server
const app=express();

//middlewares
app.use(express.json());
app.use(cors());

//connecting DB
connectDB();

//initializing the routes
app.use("/app/user",userRouter);

app.listen(PORT,()=>{console.log(`Server running in local host:${PORT}`)});