import { jobModel } from "../models/jobs.model.js";


const createJob=async(req,res)=>{
    try {
        const data = req.body;
        const newJob = new jobModel(data);
        await newJob.save();
        console.log(data)

        res.json({
            success:true,
            message:"Job created successfully",
        })
    } catch (error) {
        console.log("Error to create job",error);
        res.status(404).json({
            success:false,
            message:"Error to create job",
        })
    }
}

const getJob=async(req,res)=>{
    try {
        const data = await jobModel.find();
        res.json({
            success:true,
            message:"Jobs retrieved successfully",
            data:data
        })
    } catch (error) {
        console.log("Error to get job",error);
        res.status(404).json({
            success:false,
            message:"Error to get job",
        })
    }
}

const updateJob=async(req,res)=>{
    const body = req.body;
    try {
        const { _id } = req.body; 
        const updatedData = req.body;

        const job = await jobModel.findByIdAndUpdate(_id, updatedData, { new: true }); 
        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job not found",
            });
        }

        res.json({
            success: true,
            message: "Job updated successfully",
            data: job,
        });
    } catch (error) {
        console.log("Error to update job",error);
        res.status(404).json({
            success:false,
            message:"Error to update job",
        })
    }
}

const deleteJob=async(req,res)=>{
    try {
        const { id } = req.params;
        const job = await jobModel.findByIdAndDelete(id);

        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job not found",
            });
        }

        res.json({
            success: true,
            message: "Job deleted successfully",
        });
    } catch (error) {
        console.log("Error to update job",error);
        res.status(404).json({
            success:false,
            message:"Error to update job",
        })
    }
}

export {
    createJob,
    getJob,
    updateJob,
    deleteJob
}