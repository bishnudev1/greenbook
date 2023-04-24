import { User } from "../model/user.js";
import bcrypt from 'bcrypt';
import { sendToken } from "../utils/sendToken.js";
import cloudinary from 'cloudinary';
import getDataUri from "../utils/dataUri.js";

export const register = async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) return res.status(422).json({
        success: false,
        message: 'Fill all the details'
    });


    const file = req.file;

    if (!file) return res.status(422).json({
        success: false,
        message: 'Please upload your picture'
    });

    const fileUri = getDataUri(file);

    const isExist = await User.findOne({ email });

    if (isExist) return res.status(402).json({
        success: false,
        message: 'User with this email is already exists'
    });

    const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

    const newUser = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url
        }
    });

    sendToken(res, newUser, `New user has added ${newUser.name}`, 201);
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

        if (!user) return new Error('Not valid user');

        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        console.log(error);
    }
}

export const updateProfile = async (req, res) => {
    try {

        const { name, email } = req.body;

        const user = await User.findById(req.user._id);

        if (name) user.name = name;
        if (email) user.email = email;

        await user.save();

        res.status(200).json({
            success: true,
            message: "Your profile has been updated successfully"
        });

    } catch (error) {
        console.log(error);
    }
}

export const updateProfilePicture = async (req, res) => {
    try {

        const user = await User.findById(req.user._id);

        const file = req.file;

        if (!file) return res.status(422).json({
            success: false,
            message: "Please upload your picture"
        });

        const fileUri = getDataUri(file);

        const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

        await cloudinary.v2.uploader.destroy(user.avatar.public_id);

        user.avatar = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url
        }

        await user.save();

        res.status(200).json({
            success: true,
            message: "Your profile has been updated successfully"
        });

    } catch (error) {
        console.log(error);
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
        console.log(error);
    }
}