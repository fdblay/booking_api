// get all bookings function
export const getBookings = (req, res) => {
    res.status(200).json('These are all bookings');
}

export const getOneBooking = (req, res) => {
    res.status(200).json('These are all bookings');
}

export const addBooking = (req, res) => {
    res.status(201).json('Booking was made!');
}

export const updateBooking = (req, res) => {
    res.status(200).json('Booking updated!');
}

export const deleteBooking = (req, res) => {
    res.status(200).json('Booking deleted');
}
