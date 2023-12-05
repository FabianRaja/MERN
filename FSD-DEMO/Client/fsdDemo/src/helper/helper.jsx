
import { BaseNotesAPI, BaseUserAPI } from "./api";


export async function signupUser(userInfo){
    try {
        const res=await fetch(`${BaseUserAPI}/signup`,{
            method:"POST",
            body:JSON.stringify(userInfo),
            headers:{
                "Content-Type":"application/json",
            },
        })
        const data=res.json();
        return data;
    } catch (error) {
        return error;
    }
}

export async function loginUser(userInfo){
    try {
        const res=await fetch(`${BaseUserAPI}/login`,{
            method:"POST",
            body:JSON.stringify(userInfo),
            headers:{
                "Content-Type":"application/json",
            },
        })
        const data=res.json();
        return data;
    } catch (error) {
        return error;
    }
}

export async function getAllNotes(token){
       const res=await fetch(`${BaseNotesAPI}/all`,{
       method:"GET",
       headers:{
            "x-auth-token":token,
            "Content-Type":"application/json"
       }
    });
    const data=await res.json();
    return data;
}

export async function getUserNotes(token){
    const res=await fetch(`${BaseNotesAPI}/user/all`,{
    method:"GET",
    headers:{
         "x-auth-token":token,
         "Content-Type":"application/json"
    }
 });
 const data=await res.json();
 return data;
}