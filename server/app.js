import express from 'express';

const app = express();

import userRoutes from './routes/userRoutes.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', userRoutes);

app.get('/',(req,res) => {
    res.json({
        data: "Server is working..."
    });
})

export default app;