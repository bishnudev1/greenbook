import { Contact } from "../model/contact.js";

export const sendMsg = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) return res.status(422).json({
        success: false,
        message: 'Fill all the details'
    });

    await Contact.create({
        name, email, message
    });

    res.status(200).json({
        success: false,
        message: `Thanks ${name}. Your feedback has been sent.`
    });
}