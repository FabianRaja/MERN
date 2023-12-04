import React, { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const NotesCtx=createContext(null);

export default function AppProvider({children}){
    const navigate=useNavigate();
    useEffect(()=>{
     if(!localStorage.getItem("token")){
        navigate("/register",{replace:true});
     }
    },[navigate])
    return(
        <div>
           <NotesCtx.Provider value={{}}>
                {children}
           </NotesCtx.Provider>
        </div>
    )
}

export const NoteState=()=>{
    return useContext(NotesCtx)
}