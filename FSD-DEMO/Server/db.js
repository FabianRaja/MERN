import mongoose from "mongoose";    

export function connectDB(){
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("database connected");
    } catch (error) {
        console.log("Connection Error");
    }
}