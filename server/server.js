import app from "./app.js";
import { config } from "dotenv";
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
    storageBucket: process.env.Firebase_Storage_URI
});



export const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY
});


app.listen(process.env.PORT, () => {
    connectDB().then(() => {
        console.log(`Server has started at http://localhost:${process.env.PORT}`);
        console.log('MongoDB has Connected');
        console.log('Firebase has been connected to Express');
    }).catch((err) => console.log(err))
})