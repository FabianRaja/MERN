import React, { useEffect, useState } from "react";
import { Base } from "../Base/Base";
import { getAllNotes, getUserNotes } from "../helper/helper.jsx";
import { NoteState } from "../Context/AppContext.jsx";
import { Paper } from "@mui/material";


export default function Profile(){
 
    const [userNotes,setUserNotes]=useState([]);
    const [err,setErr]=useState("");
    const{token}=NoteState();

    useEffect(()=>{
        console.log("calling function")
        getUserNotes(token).then((data)=>{
            if(data.error){
                setErr(data.err)
            }else{
                console.log(data)
                setUserNotes(data.data);
            }
        })
    },[])
  
    return(
     
             <Base>
                {userNotes?.map((data,idx)=>(
             <Paper elevation={6}
             key={idx}
             >
                {data.title}
                {data.content}
                {data.user.name}
                <button>Edit</button>
                <button>Delete</button>
             </Paper>
        ))}
           
             </Base>
  
    )
}