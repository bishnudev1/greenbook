import { razorpayInstance } from "../server.js";
import { Order } from "../model/order.js";
import crypto from 'crypto';
import { User } from "../model/user.js";

export const orderPlant = async (req, res) => {
    try {
        const { item, amount } = req.body;

        const order = await razorpayInstance.orders.create({
            amount: Number((amount * item) * 80 * 100),
            currency: "INR"
        });

        const user = await User.findById(req.user._id);

        user.noOfTreesPlanted += item;

        await user.save();

        res.status(200).json({
            success: true,
            order
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            messsage: "Internal Server Error !"
        });
    }
}

// Current Issues

// Automatically redirects to /me after /order-plant instead of /order-successful
// Some issues in cloudinary, does not saving images at /register, /update-profile & /create-blog endpoints. Throwing internal server error (Catch block)
// <Toaster /> is giving DOM error while rendering the entire app

export const verifyPayment = async (req, res) => {

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    let body = razorpay_order_id + "|" + razorpay_payment_id;

    var expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET_KEY)
        .update(body.toString())
        .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    const user = await User.findById(req.user._id);

    if (isAuthentic) {
        await Order.create({
            buyerName: user.name, buyerEmail: user.email, razorpay_order_id, razorpay_payment_id, razorpay_signature
        });
        res.redirect(`http://localhost:3000/order-successful?reference=${razorpay_payment_id}`);
    }
    else {
        res.status(401).json({
            success: false,
            message: 'Some error occured! Try again...'
        });
    }


}