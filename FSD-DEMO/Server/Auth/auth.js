import jwt from "jsonwebtoken";
export const generateToken=(id)=>{
    return jwt.sign({id},process.env.SECRET_KEY)
};


//middleware
export const isAuthenticated=async(req,res,next)=>{
    let token;
    if(req.headers){
        try {
            token=await req.headers["x-auth-token"];
            const decode=jwt.verify(token,process.env.SECRET_KEY);
            console.log(decode);
            req.user=decode.id
            next();
        } catch (error) {
            res.status(500).json({error:"Authorization denied"})
        }
    }
    if(!token){
        res.status(400).json({error:"Access denied"});
    }

}