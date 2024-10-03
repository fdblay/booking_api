import { Router } from "express";
import { addBooking, deleteBooking, getBookings, getOneBooking, updateBooking } from "../controllers/booking.js";


// create a router
const bookingRouter = Router();

// Define routes
bookingRouter.get('/bookings', getBookings);

bookingRouter.get('/bookings/:id', getOneBooking);

bookingRouter.post('/bookings', addBooking);

bookingRouter.patch('/bookings/:id', updateBooking);

bookingRouter.delete('/bookings/:id', deleteBooking);

// Export router
export default bookingRouter;