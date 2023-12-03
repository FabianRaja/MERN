import express from "express";
import { getUserByEmail } from "../Controllers/user.js";
import bcrypt from "bcrypt";
import { generateToken } from "../Auth/auth.js";
import { User } from "../models/user.js";

const router=express.Router();

router.post("/login",async(req,res)=>{
    try {
        //is user exist
        const user=await getUserByEmail(req);
        if(!user){
            return res.status(400).json({error:"Invalid Credentials"})
        }
        //validating password
        const validPassword=await bcrypt.compare(req.body.password,user.password)
        if(!validPassword){
            return res.status(400).json({error:"Invalid Password"});
        }
        //generate token
        const token=generateToken(user._id);
        res.status(200).json({data:"Loggin in successfully",token});
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
    }
})


router.post("/signup",async(req,res)=>{
    try {
        //already exist user
        let user=await getUserByEmail(req);
        if(user){
            return res.status(400).json({error:"User already exist"});
        }
        //generate hashed password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(req.body.password,salt);

        user=await new User({...req.body,password:hashedPassword}).save();
        const token=generateToken(user._id);
        res.status(201).json({data:"Successfully registered",token});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});        
    }
});

export const userRouter=router;