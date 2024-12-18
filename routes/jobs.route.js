import express from "express";
import {createJob,getJob,updateJob,deleteJob} from "../controller/jobs.controller.js"

const router = express.Router();

router.post("/",createJob);
router.get("/getJob",getJob);
router.patch("/updateJob",updateJob);
router.delete("/:id",deleteJob);

export default router;