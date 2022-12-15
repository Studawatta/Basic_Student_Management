import express from "express";
import { createClass } from "../controllers/class.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:schoolid/:id", verifyUser, createClass);

export default router;