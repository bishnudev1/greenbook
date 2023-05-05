import { User } from "../model/user.js";
import bcrypt from 'bcrypt';
import { sendToken } from "../utils/sendToken.js";
import cloudinary from 'cloudinary';
import getDataUri from "../utils/dataUri.js";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from 'crypto';
import { unLinkFile } from "../middlewares/multer.js";
import admin from 'firebase-admin';

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) return res.status(422).json({
        success: false,
        message: 'Fill all the details'
    });

    const bucket = admin.storage().bucket();

    const file = req.file;

    if (!file) return res.status(422).json({
        success: false,
        message: 'Please upload your picture'
    });

    const isExist = await User.findOne({ email });

    if (isExist) return res.status(402).json({
        success: false,
        message: 'User with this email is already exists'
    });

    const blob = bucket.file(file.originalname);

    const blobStream = blob.createWriteStream();

    blobStream.on('error', (err) => {
        res.status(500).json({
            success: false,
            message: err
        });
    });


    blobStream.on('finish', async () => {
        try {

            const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${blob.name}?alt=media`;

            const newUser = await User.create({
                name,
                email,
                password,
                avatar: {
                    url: publicUrl
                }
            });
            sendToken(res, newUser, `Your account has been created successfully ${name}`, 201);
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error
            });
        }
    });
    blobStream.write(file.buffer);
    blobStream.end();
}

export const login = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) return res.status(422).json({
        success: false,
        message: 'Fill all the details'
    });

    const isExist = await User.findOne({ email });

    if (!isExist) return res.status(402).json({
        success: false,
        message: 'User with this email does not exists'
    });

    const isMatch = await bcrypt.compare(password, isExist.password);

    if (!isMatch) return res.status(400).json({
        success: false,
        message: "Wrong credintials"
    });

    sendToken(res, isExist, `Welcome back ${isExist.name}`, 201);
}

export const logout = async (req, res) => {
    res.status(200).cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        secure: true,
        sameSite: true,
    }).json({
        success: true,
        message: "Logged out successfully"
    });
}

export const myProfile = async (req, res) => {
    try {

        const user = await User.findById(req.user._id);

        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        });
    }
}

export const updateProfile = async (req, res) => {
    try {

        const { name, email } = req.body;

        const isExist = await User.findOne({ email });

        if (isExist) return res.status(402).json({
            success: false,
            message: 'User with this email already exists'
        });

        const user = await User.findById(req.user._id);

        if (name) user.name = name;
        if (email) user.email = email;

        await user.save();

        res.status(200).json({
            success: true,
            message: "Your profile has been updated successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: true,
            message: error
        });
    }
}

export const updateProfilePicture = async (req, res) => {
    try {

        const bucket = admin.storage().bucket();

        const user = await User.findById(req.user._id);

        const file = req.file;

        if (!file) return res.status(422).json({
            success: false,
            message: "Please upload your picture"
        });


        const blob = bucket.file(file.originalname);

        const blobStream = blob.createWriteStream();

        blobStream.on('error', (err) => {
            res.status(500).json({
                success: false,
                message: err
            });
        });

        blobStream.on('finish', async () => {
            try {

                const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${blob.name}?alt=media`;

                user.avatar = {
                    url: publicUrl
                }

                await user.save();
            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: error
                });
            }
        });


        blobStream.write(file.buffer);
        blobStream.end();

        res.status(200).json({
            success: true,
            message: "Your profile picture been updated successfully"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: true,
            message: error
        });
    }
}

export const updatePassword = async (req, res) => {
    try {

        const { password, newPassword } = req.body;

        if (!password || !newPassword) return res.status(422).json({
            success: false,
            message: "Please enter your current and new password"
        });

        const user = await User.findById(req.user._id);

        const verifyPassword = await bcrypt.compare(password, user.password);

        if (!verifyPassword) return res.status(400).json({
            success: false,
            message: "Your password is incorrect"
        });

        user.password = newPassword;

        await user.save();

        res.status(200).json({
            success: true,
            message: "Your password has been changed successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: true,
            message: error
        });
    }
}

export const forgetPassword = async (req, res) => {

    const { email } = req.body;

    if (!email) return res.status(422).json({
        success: false,
        message: 'Fill all the details'
    });

    const isExist = await User.findOne({ email });

    if (!isExist) return res.status(402).json({
        success: false,
        message: 'User with this email does not exists'
    });

    const resetToken = await isExist.getResetToken();

    await isExist.save();

    const url = `www.http://localhost:3000/reset-password/${resetToken}`

    const message = `Click on the link to reset your account password ${url}`;

    await sendEmail(isExist.email, "Greenbook Reset Password", message);

    res.status(200).json({
        success: true,
        message: `A reset token link has been sent to your email at ${isExist.email}. It will valid only for 15 minutes.`
    });
}

export const resetPassword = async (req, res) => {

    const { token } = req.params;

    const resetPasswordToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {
            $gt: Date.now(),
        },
    });

    if (!user) return res.status(401).json({
        success: false,
        message: "Token is invalid or expired. Try again."
    });

    user.password = req.body.password;
    user.resetPasswordExpire = undefined;
    user.resetPasswordToken = undefined;

    await user.save();

    res.status(200).json({
        success: true,
        message: `Your password has been changed successfully.`
    });
}

export const deleteAccount = async (req, res) => {

    const { password } = req.body;

    if (!password) return res.status(422).json({
        success: false,
        message: 'Please enter your password'
    });

    const user = await User.findById(req.user._id);

    const isVerified = await bcrypt.compare(user.password, password);

    if (!isVerified) return res.status(402).json({
        success: false,
        message: 'Incorrect password'
    });

    await user.delete();

    res.status(200).json({
        success: true,
        message: `Your account has been deleted successfully.`
    });
}