import mongoose from "mongoose";

export const connectDB = async () => {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);

    if (!connection) return console.log(`Connection has failed to Database`);
    console.log(`Connection has established with ${connection.host}`);
}