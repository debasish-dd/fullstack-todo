import { Schema } from "mongoose";
import mongoose  from "mongoose";

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
} , {timestamps: true})

const Todo = mongoose.model( "Todo" ,todoSchema)