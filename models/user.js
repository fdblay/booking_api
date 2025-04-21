import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    userName: {type: String},
    email: {type: String},
    password: {type: String}
});

export const UserModel = mongoose.model('User', userSchema);