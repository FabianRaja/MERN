import express  from "express";
import { addNewNotes, deleteNote, editNote, getAllNotes, getUserNotes } from "../Controllers/notes.js";


const router=express.Router();



//get all notes
router.get("/all",async(req,res)=>{
    try {
        const notes=await getAllNotes();
        if(notes.length<=0){
            return res.status(404).json({error:"No content available"})
        }
        res.status(200).json({data:notes});
    } catch (error) {
        res.status(500).json({error:"Internal server error"});
    }
})



//get user notes
router.get("/user/all",async(req,res)=>{
    try {
       const notes=await getUserNotes(req);
       if(notes.length<=0){
        return res.status(404).json({error:"no content available"})
       }
       res.status(200).json({data:notes});
    } catch (error) {
        res.status(500).json({error:"Internal server error"});
    }
})




//add new notes
router.post("/add",async(req,res)=>{
    try {
        const newNotes=await addNewNotes(req);
        if(!newNotes){
            return res.status(400).json({error:"Error adding new notes"})
        }
        return res.status(200).json({data:newNotes,message:"Added successfully"})
    } catch (error) {
        res.status(500).json({error:"Internal server error"});
    }
})




//edit note
router.put("/edit/:id",async(req,res)=>{
    try {
        const editedNote=await editNote(req);
        if(!editedNote){
            return res.status(400).json({error:"Error editing note"})
        }
        return res.status(200).json({data:editedNote,message:"Edited successfully"})
    } catch (error) {
        res.status(500).json({error:"Internal server error"});
    }
})




//delete note
router.delete("/delete/:id",async(req,res)=>{
    try {
          const deletedNote=await deleteNote(req);
          if(!deletedNote){
            return res.status(400).json({error:"Error Deleting note"});
          }
          return res.status(200).json({message:"Deleted Succesfully"})
    } catch (error) {
        res.status(500).json({error:"Internal server error"});
    }
})


export const notesRouter=router;