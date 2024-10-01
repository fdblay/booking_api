//  Bringing in expressjs codes
import express from 'express';
import bookingRouter from './routes/allRoutes.js';

// create an express app
const app = express();

// Use routes
    app.use(bookingRouter);
// Listen for incoming requests
app.listen(3000, function() {
    console.log('App is running on port 3000')
});