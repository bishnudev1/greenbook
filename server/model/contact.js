import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name..."]
    },
    email: {
        type: String,
        required: [true, "Please enter your email..."]
    },
    message: {
        type: String,
        required: [true, "Please enter your password..."]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});


export const Contact = new mongoose.model("Contact", contactSchema);