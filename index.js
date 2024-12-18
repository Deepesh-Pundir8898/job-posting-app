import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv/config";
import jobRoutes from "./routes/jobs.route.js"

const app = express();

app.use(express.json());

app.use(jobRoutes);

const PORT =8090;
try {
    await mongoose.connect("mongodb://localhost:27017/job-posting");
    app.listen(PORT , ()=>console.log("Sever is starting on PORT:8090"));
} catch (error) {
    console.log("Error to connection with DB",error);
}

