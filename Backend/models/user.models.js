import { Schema } from "mongoose";
import mongoose  from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
       
    },
    password: {
        type: String,
        required: true
    },
    list: [{
        type: Schema.Types.ObjectId,
        ref: "Todo"
    }]
    
} , {timestamps: true})

const User = mongoose.model("User" , userSchema)