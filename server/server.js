import app from "./app.js";
import { config } from "dotenv";

config({
    path: "./config/config.env"
});

import { connectDB } from "./config/conn.js";

connectDB();


app.listen(process.env.PORT, () => {
    console.log(`Server has started at http://localhost:${process.env.PORT}`);
});