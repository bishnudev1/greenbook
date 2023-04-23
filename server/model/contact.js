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
        type: String,
        default: new Date(Date.now()).toLocaleDateString()
    }
});


export const Contact = new mongoose.model("Contact", contactSchema);