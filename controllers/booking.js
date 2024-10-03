import { booking, } from "../models/booking.js";


// get all bookings function
export const getBookings = async (req, res, next) => {
    try {
        const bookings = await booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        next(error);
    }
}

export const getOneBooking = async (req, res, next) => {

    try {
        const oneBooking = await booking.findOne();

        res.status(200).json(oneBooking);
    } catch (error) {
        next(error);
    }
}

export const addBooking = async (req, res, next) => {
    try {
        // const newBooking = new booking();
        // const bookings = await newBooking.save(req.body);
        console.log(req.body);
        await booking.create(req.body);

        res.status(201).json('Booking added!');
    } catch (error) {
        next(error);

    }
}

export const updateBooking = async (req, res, next) => {

    try {
        await booking.updateOne(req.body);
        res.status(200).json('Booking updated!');
    } catch (error) {
        next(error);

    }
}

export const deleteBooking = async (req, res, next) => {
    try {

        await booking.deleteOne(req.body)
        res.status(200).json('Booking deleted');
    } catch (error) {
        next(error);
    }
}
