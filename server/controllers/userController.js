import { User } from "../model/user.js";
import bcrypt from 'bcrypt';
import { sendToken } from "../utils/sendToken.js";

export const register = async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) return res.status(422).json({
        success: false,
        message: 'Fill all the details'
    });

    const isExist = await User.findOne({ email });

    if (isExist) return res.status(402).json({
        success: false,
        message: 'User with this email is already exists'
    });

    const newUser = await User.create({
        name,
        email,
        password
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
