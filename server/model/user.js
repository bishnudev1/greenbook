import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

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
    resetPasswordToken: String,
    resetPasswordExpire: String
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

userSchema.methods.getResetToken = function () {

    const resetToken = crypto.randomBytes(20).toString("hex");

    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    return resetToken;
}

export const User = new mongoose.model("User", userSchema);