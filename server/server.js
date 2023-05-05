import app from "./app.js";
import { config } from "dotenv";
import { v2 as cloudinaryV2 } from 'cloudinary';
import Razorpay from 'razorpay';
import admin from 'firebase-admin';
import serviceAccount from './firebase/serviceAccountKey.json' assert { type: "json" };


config({
    path: "./config/config.env"
});

import { connectDB } from "./config/conn.js";


const credential = admin.credential.cert(serviceAccount);

admin.initializeApp({
    credential: credential,
    storageBucket: "gs://greenbook-52395.appspot.com"
});


cloudinaryV2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    //secure: true
    //timeout: 120000
});



export const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY
});


app.listen(process.env.PORT, () => {
    connectDB().then(() => {
        console.log(`Server has started at http://localhost:${process.env.PORT}`);
        console.log('Mongo Connected');
    }).catch((err) => console.log(err))
})