import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


const allowedOrigins = ['http://localhost:3000'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}

app.use(cors(corsOptions));

import userRoutes from './routes/userRoutes.js';
import otherRoutes from './routes/otherRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
app.use('/api/v1', userRoutes);
app.use('/api/v1', otherRoutes);
app.use('/api/v1', blogRoutes);
app.use('/api/v1', orderRoutes);


app.get('/', (req, res) => {
  res.json({
    data: "Server is working..."
  });
})

app.get("/api/get-key", (req, res) => {
  res.status(201).json({
      key: process.env.RAZORPAY_KEY_ID
  });
});

export default app;