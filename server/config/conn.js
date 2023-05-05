import mongoose from "mongoose";

export const connectDB = () => {
    console.log(process.env.MONGO_URI);
    mongoose.set('strictQuery', false);
    return mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

}