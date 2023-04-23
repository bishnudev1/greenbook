import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name..."]
    },
    email: {
        type: String,
        required: [true, "Please enter your email..."]
    },
    password: {
        type: String,
        required: [true, "Please enter your password..."]
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
    },
    createdAt: {
        type: String,
        default: new Date(Date.now()).toLocaleDateString()
    },
    noOfTreesPlanted: {
        type: Number,
        default: 0
    },
    noOfEventsHosted: {
        type: Number,
        default: 0
    },
});

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

userSchema.methods.generateToken = function () {
    return jwt.sign({ _id: this._id }, process.env.SECRET_KEY, {
        expiresIn: "15d",
    });
}

export const User = new mongoose.model("User", userSchema);