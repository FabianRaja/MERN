import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const NotesCtx=createContext(null);

export default function AppProvider({children}){
    const navigate=useNavigate();
    useEffect(()=>{
     if(!localStorage.getItem("token")){
        navigate("/register",{replace:true});
     }
    },[navigate])
    const [token,setToken]=useState("");
    return(
        <div>
           <NotesCtx.Provider value={{token,setToken}}>
                {children}
           </NotesCtx.Provider>
        </div>
    )
}

export const NoteState=()=>{
    return useContext(NotesCtx)
}