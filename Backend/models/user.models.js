import { Schema } from "mongoose";
import mongoose  from "mongoose";
import bcrypt from "bcryptjs";

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
        ref: "Todo",
        required: true
    }]
    
} , {timestamps: true})

userSchema.pre("save" , async function( ) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password , salt);
    }

})

export const User = mongoose.model("User" , userSchema)