import mongoose from "mongoose";

const jobSchema = {
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    }
}
export const jobModel = mongoose.model("Job", jobSchema);