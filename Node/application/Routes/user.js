import express from "express";
import { registerUser } from "../Controllers/user.js";

const router=express.Router();


//signup

router.post("/signup",async(req,res)=>{
    try {
        if(Object.keys(req.body).length<=0){
            return res.status(400).json({error:"Invalid request"})
        }
        //if the user already registered
        const checkUser=await getUser(req.body.email);
        if(!checkUser){
            const user=await registerUser(req.body);
        if((user).acknowledged){
            return res.status(400).json({error:"Failed registration"});
        }
        res.status(201).json({message:"register successfully",data:user})
        }
        res.status(400).json({error:"User already exist"})
       
    } catch (error) {
        res.status(500).json({error:'Internal server error',errorMessage:error});
    }
})


//login

router.post("/login",(req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({error:'Internal server error',errorMessage:error});
    }
})

export const userRouter=router;