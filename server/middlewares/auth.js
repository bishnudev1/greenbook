import jwt from "jsonwebtoken"
import { User } from "../model/user.js";

export const Authentication = async (req, res, next) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(400).json({
                success: true,
                message: "You are not signed it."
            });
        }
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findOne({ _id: verifyUser._id });

        req.user = user;

        next();

    } catch (error) {
        console.log(error);
    }
}