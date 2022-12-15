import express from "express";
import { createSchool, deleteSchool, getAllSchools, getSchool, updateSchool } from "../controllers/school.js";
import School from "../models/School.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:id", verifyUser, createSchool);
//UPDATE
router.put("/:id", verifyUser, updateSchool);
//DELETE
router.delete("/:schoolid/:id", verifyUser, deleteSchool);
//GET 
router.get("/:id", verifyUser, getSchool);
//GET ALL
router.get("/", verifyUser, getAllSchools );

export default router;