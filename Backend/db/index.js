import mongoose, { mongo } from "mongoose";
import  "dotenv/config";
export const mongoDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Mongo DB conneted succesfully");
        
    } catch (error) {
        console.error("mongodb connection failed!! error ->" , error)
        process.exit(1)
    }
}