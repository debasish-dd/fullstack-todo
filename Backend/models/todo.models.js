import { Schema } from "mongoose";
import mongoose from "mongoose";

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true })

export const Todo = mongoose.model("Todo", todoSchema)