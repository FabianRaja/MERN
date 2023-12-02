import express from "express";
import { addNewDoctor, deleteDoctor, editDoctor, getAllDoctors } from "../Controllers/doctor.js";
import { isAuthorized } from "../Auth/auth.js";

//initializing router
const router=express.Router();

//get doctor data
router.get("/get",async(req,res)=>{

    try {
         //get data from db
         const doctors=await getAllDoctors();
        
         if(doctors.length<=0){
            return res.status(404).json({message:"No data available"});
         }

         res.status(200).json({data:doctors});

    } catch (err) {
        res.status(500).json({error:"Internal server error",error:err})
    }
});

//add doctor data
router.post("/add",async(req,res)=>{  

    try {

    if(Object.keys(req.body).length<=0){
        return res.status(400).json({message:"No data to post"});
    }
         //doctor data
    const data={...req.body,status:"Available"};

    
     
    //adding data to the db
    const newDoctor= await addNewDoctor(data);

    if(!newDoctor.acknowledged){
        return res.status(400).json({error:"error in adding data"});
    }
    res.status(201).json({data:newDoctor});
    } catch (error) {
        res.status(500).json({error:"Internal Server Error",error: error});
    }
})

//edit doctor

router.put("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    //we need to handle error in req.body
    if (Object.keys(req.body).length <= 0) {
      return res.status(400).json({ error: "Check request body" });
    }
    //updating doctor
    const newlyUpdatedDoctor = await editDoctor(id, req.body);
    if (!newlyUpdatedDoctor.acknowledged) {
      return res.status(400).json({ error: "error in updating data" });
    }
    res.status(200).json({ data: newlyUpdatedDoctor });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", erorrMessage: error });
  }
});

//delete data
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    //deleting a doctor
    const doctorToDelete = await deleteDoctor(id);
    if (!doctorToDelete.acknowledged) {
      return res.status(400).json({ error: "error in deleting data" });
    }
    res.status(200).json({ data: doctorToDelete });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", erorrMessage: error });
  }
});

export const doctorRouter=router;