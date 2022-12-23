import School from "../models/School.js";
import User from "../models/User.js";

export const createSchool = async (req,res,next) =>{

    const userId = req.params.id;
    const newSchool = new School(req.body); 

    try{
        const savedSchool = await newSchool.save();
        try {
            await User.findByIdAndUpdate(userId, {
                $push: {schools: savedSchool._id},
            });
        } catch (err) {
            next(err);
            
        }
        res.status(200).json("School created.");
    }catch(err){
        next(err);
       

    }
};

export const updateSchool = async (req,res,next)=>{
    
    try {
        const updatedSchool = await School.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new: true});
        res.status(200).json(updatedSchool)
    } catch (err) {
        next(err);
    }
};

export const deleteSchool = async (req,res,next)=>{
    try {
        await School.findByIdAndDelete(req.params.schoolid);
        res.status(200).json("Deleted")
    } catch (err) {
        next(err);
    }
}

export const getSchool = async (req,res,next) =>{
    try {
        const school = await School.findById(req.params.id);
        res.status(200).json(school);
    } catch (err) {
        next(err);
    }
};

export const getAllSchools = async (req,res,next)=>{
    try {
        const schools = await School.find();
        res.status(200).json(schools);
    } catch (err) {
        next(err);
    }
}