import React, { useState } from "react";

import { Button, TextField } from "@mui/material";
import { loginUser, signupUser } from "../helper/helper";
import { NoteState } from "../Context/AppContext";



export default function Form({btnName,handleClick}){

  const [userName,setUserName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [msg,setmsg]=useState("")
  const [err,setErr]=useState("")
  const {setToken}=NoteState();

  function handleLogin(){
    const userData={
      name:userName,
      email,
      password
    }
    loginUser(userData).then((data)=>{
      if(data.error){
        console.log("error")
        setErr(data.error)
        setmsg("")
      }else{
        localStorage.setItem("token",data.token)
        setToken(data.token);
        setErr("");
        setmsg(data.data);
      }
    }).catch((error)=>console.log(error));

  }

  function handleSignUp(){
    const userData={
      name:userName,
      email,
      password
    }
    signupUser(userData).then((data)=>{
      if(data.error){
        console.log("error")
      }else{
        localStorage.setItem("token",data.token)
        setToken(data.token);
      }
    }).catch((error)=>console.log(error));
  }
    return(
      <div>
        <div className="forms">
       
        <TextField type="text" id="outlined-basic" label="UserName" variant="outlined"
        value={userName}
        onChange={(e)=>setUserName(e.target.value)} />
        <TextField type="email" id="outlined-basic" label="Email" variant="outlined"
         value={email}
         onChange={(e)=>setEmail(e.target.value)}  />
        <TextField type="password" id="outlined-basic" label="Password" variant="outlined"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}  />
        <Button variant="outlined" onClick={btnName==="Login"?handleLogin:handleSignUp}>{btnName}</Button>
<div>
        <div style={{color:"teal"}}>{msg?msg:""}</div>
        <div style={{color:"crimson"}}>{err?err:""}</div>
</div>
        
      </div>
      </div>
    )
}