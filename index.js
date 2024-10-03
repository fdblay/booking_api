//  Bringing in expressjs codes
import 'dotenv/config';
import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import bookingRouter from './routes/allRoutes.js';

await mongoose.connect(process.env.MONGO_URI)

// create an express app
const app = express();

// use middlewares
app.use(express.json());
app.use(cors());

// Use routes

app.use(bookingRouter);

// Listen for incoming requests
app.listen(3000, function () {
    console.log('App is running on port 3000')
});