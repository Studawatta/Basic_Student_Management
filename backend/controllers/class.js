import Class from "../models/Class.js";
import School from "../models/School.js";
import {createError} from "../utils/error.js";

export const createClass = async (req, res, next) => {

    const schoolId = req.params.schoolid;
    const newClass = new Class(req.body);

    try {
        const savedClass = await newClass.save();
        try {
            await School.findByIdAndUpdate(schoolId, {
                $push: {classes: savedClass._id},
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json("Class created");
    } catch (err) {
        next(err);
    }
}