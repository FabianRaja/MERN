import express from "express";
import { getUser, registerUser } from "../Controllers/user.js";
import bcrypt from "bcrypt";
import { generateToken } from "../Auth/auth.js";

const router=express.Router();


//signup

router.post("/signup",async(req,res)=>{
    try {
        if(Object.keys(req.body).length<=0){
            return res.status(400).json({error:"Invalid request"})
        }
        const salt=await bcrypt.genSalt(10);
        //if the user already registered
        const checkUser=await getUser(req.body.email);
        if(!checkUser){
            const hashedpass=await bcrypt.hash(req.body.password,salt);
            const encryptUser=await {...req.body,password:hashedpass};
            const user=await registerUser(encryptUser);
        if(!user.acknowledged){
            return res.status(400).json({error:"Failed registration"});
        }
        return res.status(201).json({message:"registered successfully",data:user})
        }
        res.status(400).json({error:"User already exist"})
       
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error',errorMessage:error});
    }
})


//login

router.post("/login",async(req,res)=>{
    try {
        if(Object.keys(req.body).length<=0){
            return res.status(400).json({error:"Invalid request"});
        }
        const checkUser=await getUser(req.body.email);
        if(!checkUser){
            return res.status(404).json({error:"Invalid email"});
        }
        const validPassword=await bcrypt.compare(req.body.password,checkUser.password);
        if(!validPassword){
            return res.status(400).json({error:"Invalid Password"});
        }
        const token=generateToken(checkUser._id);
        res.status(200).json({message:"Loggin in successfully",token});
    } catch (error) {
        res.status(500).json({error:'Internal server error',errorMessage:error});
    }
})

export const userRouter=router;