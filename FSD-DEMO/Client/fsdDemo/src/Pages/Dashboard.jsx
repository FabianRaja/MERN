import React, { useEffect, useState } from "react";
import { Base } from "../Base/Base";
import { NoteState } from "../Context/AppContext";
import { getAllNotes } from "../helper/helper";
import { Paper } from "@mui/material";

export default function Dashboard(){
    
    const [allNotes,setAllNotes]=useState([]);
    const [err,setErr]=useState("");
    const{token}=NoteState();

    useEffect(()=>{
        console.log("calling function")
        getAllNotes(token).then((data)=>{
            if(data.error){
                setErr(data.err)
            }else{
                console.log(data)
                setAllNotes(data.data);
            }
        })
    },[])

    return(
        <Base>
        {allNotes?.map((data,idx)=>(
             <Paper elevation={6}
             key={idx}
             >
                {data.title}
                {data.content}
                {data.user.name}
             </Paper>
        ))}
           
        </Base>
    )
}